import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Page Not Found' }

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-cosmos flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="TrackBridge" className="w-14 h-14 rounded-2xl opacity-80" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand block mb-4">
          404
        </span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-white tracking-display mb-4">
          Page not found
        </h1>
        <p className="text-[16px] text-white/50 max-w-[380px] mx-auto leading-[1.75] mb-9">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/20 hover:bg-white/[0.07] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
