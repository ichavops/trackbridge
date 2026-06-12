import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  cookieStore.delete('admin-session')
  return NextResponse.redirect(new URL('/admin/login', request.url))
}
