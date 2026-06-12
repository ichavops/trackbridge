import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TrackBridge — Ask. Know. Decide.',
  description:
    'Fewer surprises. Better margins. Faster decisions. TrackBridge connects your PSA to an AI copilot so delivery leaders get instant answers from live data.',
}

// ── Feature card data ────────────────────────────────────────────
const features = [
  {
    title: 'Spot budget overruns before your client does.',
    body: 'TrackBridge flags which projects are burning ahead of plan — before the conversation gets uncomfortable.',
    icon: (
      <svg className="w-[22px] h-[22px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Find underutilized consultants in seconds.',
    body: "See who has capacity, who's overcommitted, and where to redeploy — without touching a single report.",
    icon: (
      <svg className="w-[22px] h-[22px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    title: 'Know which projects need attention before they turn red.',
    body: 'Get a plain-English health check on any project — stage, billing position, and risk signals in one answer.',
    icon: (
      <svg className="w-[22px] h-[22px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Stay Audit-Ready Without the Overhead',
    body: 'For government contractors: surface missing timesheets and compliance gaps before they become audit findings. DCAA readiness built in.',
    icon: (
      <svg className="w-[22px] h-[22px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Just Ask — No Training Required',
    body: 'Skip the filters, skip the dashboards. Type your question and get a precise, data-backed answer from your live PSA data in seconds.',
    icon: (
      <svg className="w-[22px] h-[22px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Works Where Your Team Already Works',
    body: 'Get answers in the TrackBridge web app, Slack, Microsoft Teams, or a Chrome extension inside your PSA. No new habits to build.',
    icon: (
      <svg className="w-[22px] h-[22px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
  },
]

const platforms = [
  { name: 'NetSuite OpenAir', full: 'NetSuite SuiteProjects Pro (OpenAir)', icon: '/icons/netsuite.png', status: 'live' },
  { name: 'Kantata', full: 'Kantata (Mavenlink)', icon: '/icons/kantata.png', status: 'roadmap' },
  { name: 'BigTime', full: 'BigTime', icon: '/icons/bigtime.svg', status: 'roadmap' },
  { name: 'Unanet', full: 'Unanet', icon: '/icons/unanet.png', status: 'roadmap' },
  { name: 'Dynamics 365', full: 'Microsoft Dynamics 365', icon: '/icons/dynamics365.svg', status: 'roadmap' },
  { name: 'Deltek Vantagepoint', full: 'Deltek Vantagepoint', icon: '/icons/deltek.png', status: 'roadmap' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      {/* Mobile: stacked (content → image). Desktop: side-by-side panels */}
      <section className="bg-cosmos overflow-hidden flex flex-col lg:flex-row lg:h-[calc(100vh-68px)]">

        {/* LEFT — solid dark panel, content only */}
        <div className="relative flex-shrink-0 w-full lg:w-[46%] flex items-center px-10 lg:px-16 xl:px-20 py-16 lg:py-0">
          <div className="absolute inset-0 hero-dots opacity-[0.07]" aria-hidden="true" />

          <div className="relative z-10 max-w-[480px]">
            {/* Announcement pill */}
            <a href="/how" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.06] mb-8 hover:bg-white/[0.10] transition-colors group">
              <span className="px-2 py-0.5 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-wider">Live</span>
              <span className="text-white/55 text-[12px] tracking-ui">NetSuite SuiteProjects Pro — first integration</span>
              <svg className="w-3.5 h-3.5 stroke-white/30 group-hover:stroke-white/60 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>

            <h1 className="text-[clamp(48px,5vw,82px)] font-extrabold text-white leading-[0.94] tracking-display mb-6">
              Ask.<br />Know.<br />Decide.
            </h1>

            <p className="text-[16px] text-white/50 leading-[1.75] mb-9">
              The AI copilot for professional services teams. Instant answers from your live PSA data — no reports, no dashboards.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/contact'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </a>
              <Link
                href="/how"
                className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/20 hover:bg-white/[0.07] transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — image panel. Mobile: full-width block below content. Desktop: fills remaining height */}
        <div className="relative w-full h-[80vw] lg:flex-1 lg:h-auto lg:w-auto">
          {/* Fade seam — desktop only */}
          <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-cosmos to-transparent hidden lg:block" aria-hidden="true" />
          {/* Fade top on mobile so it blends into the dark content panel above */}
          <div className="absolute inset-x-0 top-0 h-16 z-10 bg-gradient-to-b from-cosmos to-transparent lg:hidden" aria-hidden="true" />
          <Image
            src="/images/hero_1.jpeg"
            alt="Professional services delivery leader"
            fill
            className="object-cover object-top lg:object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
          />
        </div>

      </section>

      {/* ── PLATFORMS — scrolling ticker ── */}
      <section className="bg-canvas py-14 overflow-hidden" aria-label="Supported PSA platforms">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ash text-center mb-8">
          Works with your PSA platform
        </p>
        <div className="ticker-wrap">
          {/* duplicate array for seamless infinite loop */}
          <div className="ticker-track gap-3">
            {[...platforms, ...platforms].map((p, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 mx-1.5 px-5 py-3 rounded-badge bg-white shadow-badge text-[13px] font-medium text-navy tracking-ui flex-shrink-0 ${p.status === 'roadmap' ? 'opacity-55' : ''}`}
              >
                <img src={p.icon} alt={p.name} width={28} height={28} className="rounded-md flex-shrink-0" />
                <span>{p.name}</span>
                {p.status === 'live' ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-green-700 shadow-pill flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                    Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 shadow-pill flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES — white surface, canvas cards ── */}
      <section className="bg-white py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">Capabilities</span>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold mb-4 tracking-heading">
              Everything you need to know,<br />nothing you don&apos;t
            </h2>
            <p className="text-[17px] text-slate-ink max-w-[560px] mx-auto leading-[1.7]">
              TrackBridge surfaces operational intelligence your PSA already has — without requiring you to know where to look.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <article
                key={f.title}
                className="bg-canvas rounded-card shadow-card p-7 hover:-translate-y-1 transition-transform duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-brand/[8%] flex items-center justify-center mb-5">
                  {f.icon}
                </span>
                <h3 className="text-[16px] font-bold mb-2.5 tracking-heading">{f.title}</h3>
                <p className="text-[14px] text-slate-ink leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER — cosmos dark with dot grid ── */}
      <div className="max-w-site mx-auto px-6 py-24">
        <div className="relative bg-cosmos rounded-card px-12 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 hero-dots opacity-40" aria-hidden="true" />
          <div className="relative z-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">Early Access</span>
            <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white mb-4 tracking-heading">
              Be first when we launch
            </h2>
            <p className="text-[17px] text-white/60 mb-9 max-w-[480px] mx-auto leading-[1.65]">
              TrackBridge is in active development. Join the waitlist for early access and priority onboarding when we go live.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/contact'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
              >
                Request Early Access
              </a>
              <Link
                href="/how"
                className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-ice/25 shadow-ghost-dark hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
