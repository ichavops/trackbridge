import Link from 'next/link'

function LogoIcon() {
  return (
    <span className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-slate-950 w-fit">
              <LogoIcon />
              TrackBridge
            </Link>
            <p className="mt-4 text-sm text-slate-500 leading-7 max-w-[280px]">
              An AI intelligence layer for professional services firms. Instant answers from your live PSA data.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Product</h5>
            <nav aria-label="Product links">
              <Link href="/how" className="block text-sm text-slate-500 hover:text-brand mb-2.5 transition-colors">How It Works</Link>
              <Link href="/why" className="block text-sm text-slate-500 hover:text-brand mb-2.5 transition-colors">Why TrackBridge</Link>
              <Link href="/pricing" className="block text-sm text-slate-500 hover:text-brand mb-2.5 transition-colors">Pricing</Link>
            </nav>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Company</h5>
            <nav aria-label="Company links">
              <Link href="/who" className="block text-sm text-slate-500 hover:text-brand mb-2.5 transition-colors">Who We Serve</Link>
              <Link href="/contact" className="block text-sm text-slate-500 hover:text-brand mb-2.5 transition-colors">Contact</Link>
              <a
                href="https://trackbridge.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-500 hover:text-brand mb-2.5 transition-colors"
              >
                trackbridge.ai
              </a>
            </nav>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">PSA Platforms</h5>
            <p className="text-sm text-slate-500 mb-2">NetSuite SuiteProjects Pro (OpenAir)</p>
            <p className="text-sm text-slate-500 mb-2">Kantata (Mavenlink)</p>
            <p className="text-sm text-slate-500 mb-2">BigTime</p>
            <p className="text-sm text-slate-500 mb-2">Unanet</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© 2026 TrackBridge LLC · Richmond, Texas</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" aria-hidden="true" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
