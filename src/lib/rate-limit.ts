import { kv } from '@vercel/kv'

// In-memory fallback used only in local dev when KV env vars are absent
const memWindows = new Map<string, number[]>()
const memLockouts = new Map<string, { count: number; lockedUntil: number }>()

function kvAvailable(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

/**
 * Sliding-window rate limit. Returns true if the request should be allowed.
 * Uses a Redis sorted-set keyed by `rl:sw:<key>`.
 */
export async function slidingWindowAllow(
  key: string,
  limit: number,
  windowMs: number,
): Promise<boolean> {
  if (!kvAvailable()) {
    if (process.env.NODE_ENV === 'production') {
      console.error(
        '[rate-limit] KV env vars missing in production — rate limits are per-instance only and not shared across serverless instances. Set KV_REST_API_URL and KV_REST_API_TOKEN.',
      )
    }
    const now = Date.now()
    const prev = (memWindows.get(key) ?? []).filter((t) => now - t < windowMs)
    if (prev.length >= limit) return false
    memWindows.set(key, [...prev, now])
    return true
  }

  const now = Date.now()
  const kvKey = `rl:sw:${key}`
  const pipe = kv.pipeline()
  pipe.zremrangebyscore(kvKey, 0, now - windowMs)
  pipe.zcard(kvKey)
  const [, count] = (await pipe.exec()) as [unknown, number]

  if (count >= limit) return false

  // Unique member avoids collisions on same-millisecond requests
  await kv.zadd(kvKey, { score: now, member: `${now}-${Math.random().toString(36).slice(2)}` })
  await kv.pexpire(kvKey, windowMs)
  return true
}

/**
 * Fixed-window lockout for login attempts.
 * Returns whether a login attempt is currently allowed.
 */
export async function loginAttemptAllowed(ip: string): Promise<boolean> {
  if (!kvAvailable()) {
    const rec = memLockouts.get(ip) ?? { count: 0, lockedUntil: 0 }
    return Date.now() >= rec.lockedUntil
  }
  const rec = await kv.get<{ count: number; lockedUntil: number }>(`rl:login:${ip}`)
  if (!rec) return true
  return Date.now() >= rec.lockedUntil
}

/** Record a failed login attempt; locks out the IP after maxAttempts failures. */
export async function recordLoginFailure(
  ip: string,
  maxAttempts: number,
  lockoutMs: number,
): Promise<void> {
  const now = Date.now()
  if (!kvAvailable()) {
    const rec = memLockouts.get(ip) ?? { count: 0, lockedUntil: 0 }
    const count = rec.count + 1
    memLockouts.set(ip, { count, lockedUntil: count >= maxAttempts ? now + lockoutMs : 0 })
    return
  }
  const kvKey = `rl:login:${ip}`
  const rec = (await kv.get<{ count: number; lockedUntil: number }>(kvKey)) ?? {
    count: 0,
    lockedUntil: 0,
  }
  const count = rec.count + 1
  const lockedUntil = count >= maxAttempts ? now + lockoutMs : 0
  // Keep the key alive for the lockout window (or 1h if not yet locked out)
  await kv.set(kvKey, { count, lockedUntil }, { px: lockedUntil ? lockoutMs : 60 * 60 * 1000 })
}

/** Clear the failure record after a successful login. */
export async function clearLoginFailures(ip: string): Promise<void> {
  if (!kvAvailable()) {
    memLockouts.delete(ip)
    return
  }
  await kv.del(`rl:login:${ip}`)
}
