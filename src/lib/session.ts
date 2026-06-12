// Works in both Node.js ≥ 18 and Edge Runtime (Web Crypto API).
// Derives a session token from the admin password so the cookie never stores
// the password itself — only a non-reversible SHA-256 digest.
export async function makeSessionToken(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + ':trackbridge-admin-v1')
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
