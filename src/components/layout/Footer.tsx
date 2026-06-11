import Link from 'next/link'

function LogoIcon() {
  return (
    <span className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="white" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 17L8 12L12 16L16 10L21 14" />
        <path d="M19 6h2v2" />
      </svg>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-cosmos pt-16 pb-10">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold text-[17px] text-white tracking-ui w-fit mb-4">
              <LogoIcon />
              TrackBridge
            </Link>
            <p className="text-sm text-white/50 leading-7 max-w-[260px]">
              An AI intelligence layer for professional services firms. Instant answers from your live PSA data.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-4">Product</h5>
            <nav aria-label="Product links">
              <Link href="/how" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">How It Works</Link>
              <Link href="/why" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">Why TrackBridge</Link>
              <Link href="/pricing" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">Pricing</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-4">Company</h5>
            <nav aria-label="Company links">
              <Link href="/who" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">Who We Serve</Link>
              <Link href="/contact" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 mb-4">Legal</h5>
            <nav aria-label="Legal links">
              <Link href="/privacy" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-white/50 hover:text-white mb-2.5 transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 TrackBridge LLC · Richmond, Texas</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <span className="w-2 h-2 rounded-full bg-green-400 status-pulse" aria-hidden="true" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
