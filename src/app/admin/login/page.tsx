'use client'

import { useActionState } from 'react'
import { loginAction } from './action'
import type { LoginState } from './action'

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, null)

  return (
    <div className="min-h-screen bg-cosmos flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo mark */}
        <div className="flex items-center gap-2.5 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" aria-hidden="true" className="w-9 h-9 rounded-xl flex-shrink-0" />
          <span className="text-white font-bold text-[17px] tracking-ui">TrackBridge</span>
        </div>

        <h1 className="text-2xl font-extrabold text-white tracking-heading mb-1">Admin sign in</h1>
        <p className="text-sm text-white/40 mb-8">Bookings dashboard access</p>

        <form action={action} className="space-y-5">
          <div>
            <label htmlFor="password" className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/20 focus:outline-none focus:border-brand/50 transition-colors"
              placeholder="Enter admin password"
            />
          </div>

          {state?.error && (
            <p className="text-red-400 text-sm">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full px-6 py-3 rounded-full bg-brand text-white font-semibold text-[14px] tracking-ui shadow-cta hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {pending ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
