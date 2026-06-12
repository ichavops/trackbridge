import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { makeSessionToken } from '@/lib/session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Always stamp the pathname so root layout can conditionally render Nav/Footer
  const response = NextResponse.next()
  response.headers.set('x-pathname', pathname)

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login' || pathname.startsWith('/admin/logout')) {
      return response
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

  return response
}

export const config = {
  // Run on every route so x-pathname is always available in the root layout
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
