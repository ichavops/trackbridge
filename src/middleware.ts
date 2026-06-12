import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { makeSessionToken } from '@/lib/session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login' || pathname.startsWith('/admin/logout')) {
      return NextResponse.next()
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

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
