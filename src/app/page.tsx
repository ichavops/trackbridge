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
  { name: 'NetSuite SuiteProjects Pro (OpenAir)', status: 'live' },
  { name: 'Kantata (Mavenlink)', status: 'roadmap' },
  { name: 'BigTime', status: 'roadmap' },
  { name: 'Unanet', status: 'roadmap' },
  { name: 'Microsoft Dynamics 365', status: 'roadmap' },
  { name: 'Deltek Vantagepoint', status: 'roadmap' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO — full viewport, image covers right half absolutely ── */}
      <section className="relative bg-cosmos h-[calc(100vh-68px)] overflow-hidden">

        {/* Dot grid — left side only */}
        <div className="absolute inset-y-0 left-0 w-1/2 hero-dots opacity-[0.07]" aria-hidden="true" />

        {/* Image — right 50% of viewport, no max-width constraint */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full hidden lg:block">
          <Image
            src="/images/hero_1.jpeg"
            alt="Professional services delivery leader"
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
        </div>

        {/* Content — left half, vertically centered */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full lg:w-1/2 px-8 lg:px-16 xl:px-24 py-16">

            {/* Announcement pill */}
            <a href="/how" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.06] mb-10 hover:bg-white/[0.10] transition-colors group">
              <span className="px-2 py-0.5 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-wider">Live</span>
              <span className="text-white/55 text-[12px] tracking-ui">NetSuite SuiteProjects Pro — first integration</span>
              <svg className="w-3.5 h-3.5 stroke-white/30 group-hover:stroke-white/60 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>

            {/* Headline */}
            <h1 className="text-[clamp(52px,5.5vw,88px)] font-extrabold text-white leading-[0.95] tracking-display mb-7">
              Ask.<br />Know.<br />Decide.
            </h1>

            {/* Sub */}
            <p className="text-[clamp(15px,1.4vw,18px)] text-white/50 max-w-[420px] leading-[1.75] mb-10">
              The AI copilot for professional services delivery teams. Instant, plain-English answers from your live PSA data — no reports, no dashboards.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </Link>
              <Link
                href="/how"
                className="px-8 py-3.5 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/15 shadow-ghost-dark hover:bg-white/[0.07] transition-colors"
              >
                See How It Works
              </Link>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: '0 reports', lbl: 'to run' },
                { val: '<5 sec', lbl: 'to answer' },
                { val: 'Live', lbl: 'PSA data' },
              ].map(({ val, lbl }) => (
                <div key={val} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-[13px]">
                  <span className="font-bold text-white">{val}</span>
                  <span className="text-white/40">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS — ghost canvas ── */}
      <section className="bg-canvas py-16" aria-label="Supported PSA platforms">
        <div className="max-w-site mx-auto px-6 flex flex-col items-center gap-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">
            Works with your PSA platform
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {platforms.map(({ name, status }) => (
              <div
                key={name}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-badge bg-white shadow-badge text-[13px] font-medium text-navy tracking-ui ${status === 'roadmap' ? 'opacity-50' : ''}`}
              >
                {name}
                {status === 'live' ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-green-50 text-green-700 shadow-pill">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                    Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 shadow-pill">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    Roadmap
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
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
              >
                Request Early Access
              </Link>
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
