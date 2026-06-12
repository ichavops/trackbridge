import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    // These paths don't need auth
    if (pathname === '/admin/login' || pathname.startsWith('/admin/logout')) {
      return NextResponse.next()
    }

    const session = request.cookies.get('admin-session')
    const password = process.env.ADMIN_PASSWORD

    if (!password || !session || session.value !== password) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
