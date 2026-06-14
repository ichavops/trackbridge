import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken } from '@/lib/session'

function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV !== 'production'
  const directives = [
    "default-src 'self'",
    isDev
      ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ]
  return directives.join('; ')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))))

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)
  requestHeaders.set('x-nonce', nonce)

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      const res = NextResponse.next({ request: { headers: requestHeaders } })
      res.headers.set('Content-Security-Policy', buildCsp(nonce))
      res.headers.set('X-Content-Type-Options', 'nosniff')
      res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
      res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
      res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains')
      return res
    }

    const password = process.env.ADMIN_PASSWORD
    if (!password) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    const session = request.cookies.get('admin-session')
    const valid = session ? await verifySessionToken(session.value, password) : false

    if (!valid) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } })
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
