import type { Metadata } from 'next'
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
  { name: 'NetSuite SuiteProjects Pro (OpenAir)', full: 'NetSuite SuiteProjects Pro (OpenAir)', icon: '/icons/netsuite.png', status: 'live' },
  { name: 'Kantata', full: 'Kantata (Mavenlink)', icon: '/icons/kantata.png', status: 'roadmap' },
  { name: 'BigTime', full: 'BigTime', icon: '/icons/bigtime.png', status: 'roadmap' },
  { name: 'Unanet', full: 'Unanet', icon: '/icons/unanet.png', status: 'roadmap' },
  { name: 'Dynamics 365', full: 'Microsoft Dynamics 365', icon: '/icons/dynamics365.svg', status: 'roadmap' },
  { name: 'Deltek Vantagepoint', full: 'Deltek Vantagepoint', icon: '/icons/deltek.png', status: 'roadmap' },
]

function HeroChatMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-14">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-transparent to-pink-900/15 pointer-events-none" aria-hidden="true" />
      {/* Radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-brand/10 blur-[80px] pointer-events-none" aria-hidden="true" />

      {/* Floating badge — live data */}
      <div className="absolute top-8 left-8 hidden sm:flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-sm z-10">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
        <span className="text-white text-[11px] font-semibold tracking-ui">Live PSA data, always</span>
      </div>

      {/* Chat window */}
      <div className="relative z-10 w-full max-w-[370px] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">

        {/* Title bar */}
        <div className="bg-[#13072b] px-4 py-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="text-white/50 text-[12px] font-medium tracking-ui mx-auto">TrackBridge AI</span>
        </div>

        {/* Message thread */}
        <div className="bg-[#f6f5fb] px-4 py-4 space-y-3">

          {/* User bubble */}
          <div className="flex justify-end">
            <div className="bg-brand text-white text-[12.5px] leading-[1.5] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[87%] shadow-sm">
              Which projects are at risk of going over budget this month?
            </div>
          </div>

          {/* AI bubble */}
          <div className="flex gap-2.5 items-start">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">
              TB
            </div>
            <div className="bg-white text-[12px] leading-[1.6] px-3.5 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%]">
              <p className="font-semibold text-navy mb-2">3 projects showing elevated budget risk:</p>
              <div className="space-y-1.5 mb-2">
                <p><span className="font-semibold text-navy">Apex Modernization</span><span className="text-slate-500"> — 87% consumed, 34% complete</span></p>
                <p><span className="font-semibold text-navy">TriState Portal</span><span className="text-slate-500"> — burn rate 2.1× plan, escalating</span></p>
                <p><span className="font-semibold text-navy">Clearview Phase 2</span><span className="text-slate-500"> — $18K over baseline, change order pending</span></p>
              </div>
              <p className="text-[11px] text-slate-400">Want me to break down the root cause for any of these?</p>
            </div>
          </div>

          {/* User follow-up */}
          <div className="flex justify-end">
            <div className="bg-brand text-white text-[12.5px] px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm">
              Yes — show me Apex Modernization
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="bg-white border-t border-gray-100 px-3 py-2.5 flex items-center gap-2">
          <span className="flex-1 text-[11.5px] text-slate-300 select-none">
            Ask about utilization, budget, projects…
          </span>
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating badge — response time */}
      <div className="absolute bottom-8 right-8 hidden sm:block bg-white/8 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2.5 shadow-sm z-10 text-right">
        <p className="text-white/40 text-[10px] uppercase tracking-[0.1em] mb-0.5">Avg response</p>
        <p className="text-white font-extrabold text-[20px] leading-none">&lt;&nbsp;3s</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      {/* Mobile: stacked (content → image). Desktop: side-by-side panels */}
      <section className="bg-[#160733] overflow-hidden flex flex-col lg:flex-row lg:h-[calc(100vh-68px)]">

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
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-brand-gradient text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </Link>
              <Link
                href="/how"
                className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/20 hover:bg-white/[0.07] transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — chat mockup panel */}
        <div className="relative w-full min-h-[480px] lg:flex-1 lg:h-auto lg:w-auto">
          {/* Fade seam — desktop only */}
          <div className="absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r from-[#160733] to-transparent hidden lg:block" aria-hidden="true" />
          {/* Fade top on mobile */}
          <div className="absolute inset-x-0 top-0 h-16 z-20 bg-gradient-to-b from-[#160733] to-transparent lg:hidden" aria-hidden="true" />
          <HeroChatMockup />
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

      {/* ── CTA BANNER ── */}
      <div className="max-w-site mx-auto px-6 py-24">
        {/* Gradient border ring wrapping a dark card */}
        <div className="bg-brand-gradient rounded-card p-[1.5px]">
          <div className="relative bg-[#0b0118] rounded-[inherit] px-12 py-16 text-center overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/15 pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 hero-dots opacity-[0.06]" aria-hidden="true" />
            <div className="relative z-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">Early Access</span>
              <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white mb-4 tracking-heading">
                Be first when we launch
              </h2>
              <p className="text-[17px] text-white/55 mb-9 max-w-[480px] mx-auto leading-[1.65]">
                TrackBridge is in active development. Join the waitlist for early access and priority onboarding when we go live.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-full bg-brand-gradient text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
                >
                  Request Early Access
                </Link>
                <Link
                  href="/how"
                  className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/20 hover:bg-white/[0.07] transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
