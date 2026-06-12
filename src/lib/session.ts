// Works in both Node.js ≥ 18 and Edge Runtime (Web Crypto API).
// Derives a session token from the admin password so the cookie never stores
// the password itself — only a non-reversible SHA-256 digest.
//
// To revoke ALL active sessions without changing ADMIN_PASSWORD:
// bump ADMIN_SESSION_VERSION (e.g. '1' → '2') in Vercel env vars and redeploy.
export async function makeSessionToken(password: string): Promise<string> {
  const version = process.env.ADMIN_SESSION_VERSION ?? '1'
  const encoder = new TextEncoder()
  const data = encoder.encode(`${password}:v${version}:trackbridge-admin-v1`)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
