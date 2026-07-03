import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV !== 'production'
  const directives = [
    "default-src 'self'",
    isDev
      ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https://assets.calendly.com`
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://assets.calendly.com`,
    "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
    "img-src 'self' data: blob: https://*.calendly.com",
    "font-src 'self' https://assets.calendly.com",
    "connect-src 'self' https://calendly.com https://api.calendly.com",
    "frame-src https://calendly.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ]
  return directives.join('; ')
}

export function middleware(_request: NextRequest) {
  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))))

  const res = NextResponse.next()
  res.headers.set('Content-Security-Policy', buildCsp(nonce))
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains')
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
