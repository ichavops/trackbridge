'use server'

import { timingSafeEqual } from 'crypto'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { makeSessionToken } from '@/lib/session'
import { loginAttemptAllowed, recordLoginFailure, clearLoginFailures } from '@/lib/rate-limit'

function passwordsMatch(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  return timingSafeEqual(Buffer.from(a, 'utf8'), Buffer.from(b, 'utf8'))
}

export type LoginState = { error: string } | null

const MAX_ATTEMPTS = 5
const LOCKOUT_MS = 15 * 60 * 1000

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const hdrs = await headers()
  const ip = hdrs.get('x-real-ip')
    ?? hdrs.get('x-forwarded-for')?.split(',').at(-1)?.trim()
    ?? 'unknown'

  if (!(await loginAttemptAllowed(ip))) {
    return { error: 'Too many failed attempts. Please try again in 15 minutes.' }
  }

  const password = formData.get('password') as string

  if (!password || !passwordsMatch(password, process.env.ADMIN_PASSWORD ?? '')) {
    await new Promise((r) => setTimeout(r, 400))
    await recordLoginFailure(ip, MAX_ATTEMPTS, LOCKOUT_MS)
    const stillAllowed = await loginAttemptAllowed(ip)
    return {
      error: stillAllowed
        ? 'Incorrect password.'
        : 'Too many failed attempts. Please try again in 15 minutes.',
    }
  }

  await clearLoginFailures(ip)

  const token = await makeSessionToken(process.env.ADMIN_PASSWORD!)

  const cookieStore = await cookies()
  cookieStore.set('admin-session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',          // tighter than lax — admin is never reached cross-site
    maxAge: 60 * 60 * 8,         // 8 hours
    path: '/admin',              // scoped to /admin only — not sent on every request
  })

  redirect('/admin')
}
