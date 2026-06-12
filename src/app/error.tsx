'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[calc(100vh-68px)] bg-cosmos flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="TrackBridge" className="w-14 h-14 rounded-2xl opacity-80" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand block mb-4">
          Error
        </span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-white tracking-display mb-4">
          Something went wrong
        </h1>
        <p className="text-[16px] text-white/50 max-w-[380px] mx-auto leading-[1.75] mb-9">
          An unexpected error occurred. You can try again or return to the home page.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/20 hover:bg-white/[0.07] transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-[11px] text-white/20 font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
