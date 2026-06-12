import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { makeSessionToken } from '@/lib/session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Forward pathname as a REQUEST header so Server Components can read it via headers().
  // NextResponse.next({ request: { headers } }) is the correct way to pass data to layouts.
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login' || pathname.startsWith('/admin/logout')) {
      return NextResponse.next({ request: { headers: requestHeaders } })
    }

    const password = process.env.ADMIN_PASSWORD
    if (!password) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    const expectedToken = await makeSessionToken(password)
    const session = request.cookies.get('admin-session')

    if (!session || session.value !== expectedToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
