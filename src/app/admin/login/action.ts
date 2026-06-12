'use server'

import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { makeSessionToken } from '@/lib/session'

export type LoginState = { error: string } | null

// Module-level attempt tracker — resets on cold start, sufficient for an admin panel
const attempts = new Map<string, { count: number; lockedUntil: number }>()
const MAX_ATTEMPTS = 5
const LOCKOUT_MS = 15 * 60 * 1000

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const hdrs = await headers()
  const ip = hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  const now = Date.now()
  const rec = attempts.get(ip) ?? { count: 0, lockedUntil: 0 }

  if (now < rec.lockedUntil) {
    return { error: 'Too many failed attempts. Please try again in 15 minutes.' }
  }

  const password = formData.get('password') as string

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    await new Promise((r) => setTimeout(r, 400))
    const count = rec.count + 1
    attempts.set(ip, { count, lockedUntil: count >= MAX_ATTEMPTS ? now + LOCKOUT_MS : 0 })
    return {
      error: count >= MAX_ATTEMPTS
        ? 'Too many failed attempts. Please try again in 15 minutes.'
        : 'Incorrect password.',
    }
  }

  attempts.delete(ip)

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
