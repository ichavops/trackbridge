import { kv } from '@vercel/kv'

const isProd = process.env.NODE_ENV === 'production'

// In-memory fallback used ONLY in local dev when KV env vars are absent.
// In production we fail closed instead (see below) because a per-instance Map
// provides no real protection across serverless instances / cold starts.
const memWindows = new Map<string, number[]>()
const memLockouts = new Map<string, { count: number; lockedUntil: number }>()

function kvAvailable(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

/**
 * Sliding-window rate limit. Returns true if the request should be allowed.
 * Uses a Redis sorted-set keyed by `rl:sw:<key>`.
 *
 * Fails closed in production: if KV is missing or unreachable, the limit cannot
 * be enforced, so we deny rather than silently allow unlimited requests.
 */
export async function slidingWindowAllow(
  key: string,
  limit: number,
  windowMs: number,
): Promise<boolean> {
  if (!kvAvailable()) {
    if (isProd) {
      console.error(
        '[rate-limit] KV env vars missing in production — failing closed (request denied). Set KV_REST_API_URL and KV_REST_API_TOKEN.',
      )
      return false
    }
    const now = Date.now()
    const prev = (memWindows.get(key) ?? []).filter((t) => now - t < windowMs)
    if (prev.length >= limit) return false
    memWindows.set(key, [...prev, now])
    return true
  }

  try {
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
  } catch (err) {
    // KV outage — fail closed rather than allow an unbounded request rate.
    console.error('[rate-limit] KV error in slidingWindowAllow — failing closed:', err)
    return false
  }
}

/**
 * Fixed-window lockout for login attempts.
 * Returns whether a login attempt is currently allowed.
 *
 * Fails closed in production: without a shared KV the lockout counter can't
 * accumulate across instances, so brute force would be trivially bypassable.
 * Denying login when KV is unavailable hard-requires KV for the admin panel.
 */
export async function loginAttemptAllowed(ip: string): Promise<boolean> {
  if (!kvAvailable()) {
    if (isProd) {
      console.error(
        '[rate-limit] KV env vars missing in production — login disabled (fail closed). Set KV_REST_API_URL and KV_REST_API_TOKEN.',
      )
      return false
    }
    const rec = memLockouts.get(ip) ?? { count: 0, lockedUntil: 0 }
    return Date.now() >= rec.lockedUntil
  }
  try {
    const rec = await kv.get<{ count: number; lockedUntil: number }>(`rl:login:${ip}`)
    if (!rec) return true
    return Date.now() >= rec.lockedUntil
  } catch (err) {
    console.error('[rate-limit] KV error in loginAttemptAllowed — failing closed:', err)
    return false
  }
}

/** Record a failed login attempt; locks out the IP after maxAttempts failures. */
export async function recordLoginFailure(
  ip: string,
  maxAttempts: number,
  lockoutMs: number,
): Promise<void> {
  const now = Date.now()
  if (!kvAvailable()) {
    // Production login already fails closed when KV is absent — nothing to record.
    if (isProd) return
    const rec = memLockouts.get(ip) ?? { count: 0, lockedUntil: 0 }
    const count = rec.count + 1
    memLockouts.set(ip, { count, lockedUntil: count >= maxAttempts ? now + lockoutMs : 0 })
    return
  }
  try {
    const kvKey = `rl:login:${ip}`
    const rec = (await kv.get<{ count: number; lockedUntil: number }>(kvKey)) ?? {
      count: 0,
      lockedUntil: 0,
    }
    const count = rec.count + 1
    const lockedUntil = count >= maxAttempts ? now + lockoutMs : 0
    // Keep the key alive for the lockout window (or 1h if not yet locked out)
    await kv.set(kvKey, { count, lockedUntil }, { px: lockedUntil ? lockoutMs : 60 * 60 * 1000 })
  } catch (err) {
    console.error('[rate-limit] KV error in recordLoginFailure:', err)
  }
}

/** Clear the failure record after a successful login. */
export async function clearLoginFailures(ip: string): Promise<void> {
  if (!kvAvailable()) {
    if (!isProd) memLockouts.delete(ip)
    return
  }
  try {
    await kv.del(`rl:login:${ip}`)
  } catch (err) {
    console.error('[rate-limit] KV error in clearLoginFailures:', err)
  }
}
