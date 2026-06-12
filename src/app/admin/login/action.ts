'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { makeSessionToken } from '@/lib/session'

export type LoginState = { error: string } | null

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password') as string

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    // Constant-time-ish delay to slow brute-force guessing
    await new Promise((r) => setTimeout(r, 400))
    return { error: 'Incorrect password.' }
  }

  const token = await makeSessionToken(process.env.ADMIN_PASSWORD!)

  const cookieStore = await cookies()
  cookieStore.set('admin-session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',          // tighter than lax — admin is never reached cross-site
    maxAge: 60 * 60 * 24 * 7,   // 7 days
    path: '/admin',              // scoped to /admin only — not sent on every request
  })

  redirect('/admin')
}
