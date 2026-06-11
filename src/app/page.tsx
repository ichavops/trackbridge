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
      {/* ── HERO ── */}
      <section className="relative bg-cosmos min-h-[calc(100vh-72px)] flex flex-col items-center justify-center py-20 overflow-hidden">

        {/* Dot grid */}
        <div className="absolute inset-0 hero-dots opacity-[0.07]" aria-hidden="true" />

        <div className="relative z-10 max-w-site mx-auto px-6 text-center w-full">

          {/* Announcement pill */}
          <a href="/how" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.06] mb-10 cursor-pointer hover:bg-white/[0.10] transition-colors group">
            <span className="px-2 py-0.5 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-wider">Live</span>
            <span className="text-white/55 text-[12px] tracking-ui">NetSuite SuiteProjects Pro (OpenAir) — first integration</span>
            <svg className="w-3.5 h-3.5 stroke-white/30 group-hover:stroke-white/60 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>

          {/* Headline */}
          <h1 className="text-[clamp(64px,10vw,108px)] font-extrabold text-white leading-[0.95] tracking-display mb-8">
            Ask.<br />Know.<br />Decide.
          </h1>

          {/* Sub */}
          <p className="text-[clamp(16px,1.8vw,19px)] text-white/50 max-w-[480px] mx-auto leading-[1.7] mb-12">
            The AI copilot for professional services delivery teams. Get instant, plain-English answers from your live PSA data — no reports, no dashboards.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-20">
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

          {/* Chat demo — floating product card */}
          <div className="relative max-w-[580px] mx-auto">
            <div className="relative bg-white rounded-card shadow-card overflow-hidden ring-1 ring-white/10">
              {/* Browser chrome */}
              <div className="bg-[#f5f5f7] px-4 py-3 flex items-center gap-2 border-b border-black/[0.06]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="mx-auto flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 border border-black/[0.08] text-[11px] text-[#6b7280]">
                  <svg className="w-3 h-3 stroke-current opacity-50" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  app.trackbridge.ai
                </div>
              </div>

              {/* Sidebar + chat layout */}
              <div className="flex min-h-[300px]">
                {/* Left sidebar */}
                <div className="w-[52px] border-r border-black/[0.06] bg-[#fafafa] flex flex-col items-center py-4 gap-4 flex-shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">TB</span>
                  </div>
                  {[
                    <svg key="a" className="w-4 h-4 stroke-[#9ca3af]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                    <svg key="b" className="w-4 h-4 stroke-[#9ca3af]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                    <svg key="c" className="w-4 h-4 stroke-[#9ca3af]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>,
                  ]}
                </div>

                {/* Chat pane */}
                <div className="flex-1 flex flex-col">
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    {/* User message */}
                    <div className="flex flex-row-reverse gap-2.5 items-end">
                      <span className="w-7 h-7 rounded-full bg-brand/[14%] flex items-center justify-center text-[9px] font-bold text-brand flex-shrink-0">JM</span>
                      <div className="bg-brand text-white text-[13px] px-4 py-2.5 rounded-2xl rounded-br-sm font-medium max-w-[320px] leading-relaxed shadow-sm">
                        Which projects are at risk of going over budget this month?
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex gap-2.5 items-end">
                      <span className="w-7 h-7 rounded-full bg-brand flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">TB</span>
                      <div className="bg-[#f8f9fc] text-[#1b2540] text-[13px] px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[360px] leading-relaxed border border-black/[0.05]">
                        <p className="mb-2.5 font-medium">3 projects showing elevated budget risk:</p>
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-semibold text-[#1b2540]">Apex Modernization</span>
                            <span className="text-red-500 font-semibold text-[12px]">87% consumed</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-black/[0.06]">
                            <div className="h-full w-[87%] rounded-full bg-red-400" />
                          </div>
                          <p className="text-[11px] text-[#6b7184] mt-0.5">34% complete — burn rate 2.6× plan</p>
                        </div>
                      </div>
                    </div>

                    {/* Second user message */}
                    <div className="flex flex-row-reverse gap-2.5 items-end">
                      <span className="w-7 h-7 rounded-full bg-brand/[14%] flex items-center justify-center text-[9px] font-bold text-brand flex-shrink-0">JM</span>
                      <div className="bg-brand text-white text-[13px] px-4 py-2.5 rounded-2xl rounded-br-sm font-medium max-w-[320px] shadow-sm">
                        Show me Apex — who&apos;s on it?
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="px-4 py-3 border-t border-black/[0.06] flex gap-2 items-center bg-white">
                    <input
                      className="flex-1 bg-[#f5f5f7] rounded-xl px-3.5 py-2 text-[12px] text-[#1b2540] placeholder:text-[#9ca3af] outline-none"
                      type="text"
                      placeholder="Ask about budget, utilization, projects…"
                      readOnly
                      aria-label="Chat input (demo)"
                    />
                    <button type="button" className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center flex-shrink-0 shadow-sm" aria-label="Send" tabIndex={-1}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat pills below card */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
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
