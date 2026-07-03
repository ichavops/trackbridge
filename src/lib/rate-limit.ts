import { kv } from '@vercel/kv'

const isProd = process.env.NODE_ENV === 'production'

// In-memory fallback used ONLY in local dev when KV env vars are absent.
// In production we fail closed instead (see below) because a per-instance Map
// provides no real protection across serverless instances / cold starts.
const memWindows = new Map<string, number[]>()

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

