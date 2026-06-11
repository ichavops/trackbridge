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
      {/* ── HERO — dark gradient, full viewport ── */}
      <section className="relative bg-hero hero-dots min-h-[calc(100vh-68px)] flex flex-col items-center justify-center py-20 overflow-hidden">

        {/* Radial violet glow from below */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.45) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-site mx-auto px-6 text-center w-full">

          {/* Announcement pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white text-sm mb-8 shadow-pill">
            <span className="px-2.5 py-0.5 rounded-full bg-brand text-white text-[11px] font-semibold tracking-wide">
              New
            </span>
            <span className="text-white/70 text-[13px]">Now live — NetSuite SuiteProjects Pro (OpenAir)</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(56px,9vw,96px)] font-extrabold text-white leading-[1.0] tracking-display mb-6">
            Ask. Know.<br />Decide.
          </h1>

          {/* Sub */}
          <p className="text-[clamp(16px,2vw,20px)] text-white/60 max-w-[580px] mx-auto leading-[1.65] mb-10">
            Fewer surprises. Better margins. Faster decisions. TrackBridge connects your PSA to an AI copilot so delivery leaders get the answers they need — instantly, in plain English, from live data.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
            >
              Book a Demo
            </Link>
            <Link
              href="/how"
              className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-ice/25 shadow-ghost-dark hover:bg-white/5 transition-colors"
            >
              See How It Works
            </Link>
          </div>

          {/* Stats strip — frosted glass */}
          <div className="inline-flex rounded-2xl overflow-hidden bg-white/8 border border-white/10 mb-16 mx-auto">
            {[
              { val: '0', lbl: 'Reports to run' },
              { val: '<5s', lbl: 'Time to answer' },
              { val: 'Live', lbl: 'PSA data, always' },
            ].map(({ val, lbl }, i) => (
              <div key={i} className="px-8 py-5 text-center border-r border-white/10 last:border-r-0">
                <div className="text-[26px] font-extrabold text-white mb-1 tracking-tight">{val}</div>
                <div className="text-[12px] text-white/50 whitespace-nowrap">{lbl}</div>
              </div>
            ))}
          </div>

          {/* Chat demo — elevated white card on dark hero */}
          <div className="max-w-[520px] mx-auto bg-white rounded-card shadow-card overflow-hidden ring-1 ring-brand/20">
            {/* Window chrome */}
            <div className="bg-canvas px-4 py-3 flex items-center gap-2 border-b border-fog/30">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ac63a]" />
              <span className="mx-auto text-[12px] text-ash">TrackBridge AI</span>
            </div>
            {/* Messages */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex flex-row-reverse gap-2.5 items-start">
                <span className="w-8 h-8 rounded-lg bg-brand/[12%] flex items-center justify-center text-[11px] font-bold text-brand flex-shrink-0">JM</span>
                <div className="bg-brand text-white text-[13px] px-3.5 py-2.5 rounded-2xl font-medium max-w-[340px]">
                  Which projects are at risk of going over budget this month?
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">TB</span>
                <div className="bg-canvas text-navy text-[13px] px-3.5 py-2.5 rounded-2xl max-w-[340px] leading-relaxed shadow-badge">
                  3 projects showing elevated budget risk:<br /><br />
                  <strong>Apex Modernization</strong> — 87% consumed, 34% complete<br />
                  <strong>TriState Portal</strong> — burn rate 2.1× plan<br />
                  <strong>Clearview Phase 2</strong> — $18K over baseline
                </div>
              </div>
              <div className="flex flex-row-reverse gap-2.5 items-start">
                <span className="w-8 h-8 rounded-lg bg-brand/[12%] flex items-center justify-center text-[11px] font-bold text-brand flex-shrink-0">JM</span>
                <div className="bg-brand text-white text-[13px] px-3.5 py-2.5 rounded-2xl font-medium max-w-[340px]">
                  Yes — show me Apex Modernization
                </div>
              </div>
            </div>
            {/* Input row */}
            <div className="px-4 py-3 border-t border-fog/30 flex gap-2.5 items-center">
              <input
                className="flex-1 bg-canvas rounded-xl px-3.5 py-2 text-[13px] text-navy placeholder:text-ash outline-none"
                type="text"
                placeholder="Ask about utilization, budget, projects..."
                readOnly
                aria-label="Chat input (demo)"
              />
              <button type="button" className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center flex-shrink-0" aria-label="Send" tabIndex={-1}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
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
          {/* Violet glow bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.5) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
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
