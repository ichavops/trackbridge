// Session tokens: HMAC-SHA-256 over a random session ID + issue timestamp.
// Each login gets a unique token; expiry is enforced server-side (not just via cookie maxAge).
// Bump ADMIN_SESSION_VERSION to revoke all active sessions without changing the password.

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000

async function deriveKey(password: string): Promise<CryptoKey> {
  const version = process.env.ADMIN_SESSION_VERSION ?? '1'
  const raw = new TextEncoder().encode(`${password}:v${version}:trackbridge-session-v2`)
  return crypto.subtle.importKey('raw', raw, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify'])
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

function fromHex(hex: string): ArrayBuffer | null {
  const bytes = hex.match(/.{2}/g)
  if (!bytes || bytes.length * 2 !== hex.length) return null
  return new Uint8Array(bytes.map(h => parseInt(h, 16))).buffer as ArrayBuffer
}

export async function makeSessionToken(password: string): Promise<string> {
  const key = await deriveKey(password)
  const randomBytes = new Uint8Array(16)
  crypto.getRandomValues(randomBytes)
  const sessionId = toHex(randomBytes.buffer as ArrayBuffer)
  const issuedAt = Date.now().toString(36)
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${sessionId}.${issuedAt}`))
  return `${sessionId}.${issuedAt}.${toHex(sig as ArrayBuffer)}`
}

export async function verifySessionToken(token: string, password: string): Promise<boolean> {
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const [sessionId, issuedAt, providedHmac] = parts

  const issued = parseInt(issuedAt, 36)
  if (isNaN(issued) || Date.now() - issued > SESSION_TTL_MS) return false

  const key = await deriveKey(password)
  const hmacBytes = fromHex(providedHmac)
  if (!hmacBytes) return false

  return crypto.subtle.verify('HMAC', key, hmacBytes, new TextEncoder().encode(`${sessionId}.${issuedAt}`))
}
