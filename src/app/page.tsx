import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TrackBridge — Ask. Know. Decide.',
  description:
    'Fewer surprises. Better margins. Faster decisions. TrackBridge connects your PSA to an AI copilot so delivery leaders get instant answers from live data.',
}

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-12 h-12 rounded-xl bg-brand/[8%] border border-brand/25 flex items-center justify-center mb-5">
      {children}
    </span>
  )
}

function FeatureCard({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon: React.ReactNode
}) {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-brand/25 hover:-translate-y-1 transition-all duration-200">
      <FeatureIcon>{icon}</FeatureIcon>
      <h3 className="text-lg font-bold mb-2.5">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
    </article>
  )
}

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
  { name: 'SuiteProjects (NetSuite)', status: 'roadmap' },
  { name: 'Microsoft Dynamics 365', status: 'roadmap' },
  { name: 'Certinia (FinancialForce)', status: 'roadmap' },
  { name: 'Deltek Vantagepoint', status: 'roadmap' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="py-[120px] pb-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[8%] border border-brand/25 text-brand text-sm font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
                Now live — NetSuite SuiteProjects Pro (OpenAir)
              </div>

              <h1 className="text-[clamp(48px,7vw,80px)] font-extrabold tracking-tight leading-none mb-6">
                Ask. Know.<br />Decide.
              </h1>

              <p className="text-[clamp(18px,2.5vw,22px)] text-slate-500 max-w-[640px] leading-[1.7] mb-10">
                Fewer surprises. Better margins. Faster decisions. TrackBridge connects your PSA to an AI copilot so delivery leaders get the answers they need — instantly, in plain English, from live data.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand text-white font-bold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Book a Demo
                </Link>
                <Link
                  href="/how"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent text-slate-950 font-semibold text-base border border-slate-300 hover:border-brand hover:bg-brand/[8%] hover:-translate-y-0.5 transition-all"
                >
                  See How It Works
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-slate-200 max-w-[700px]">
                {[
                  { val: '0', lbl: 'Reports to run' },
                  { val: '<5s', lbl: 'Time to answer' },
                  { val: 'Live', lbl: 'PSA data, always' },
                ].map(({ val, lbl }, i) => (
                  <div key={i} className="bg-white px-6 py-6 text-center border-r border-slate-200 last:border-r-0">
                    <div className="text-[28px] font-extrabold text-brand mb-1">{val}</div>
                    <div className="text-xs text-slate-500">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Chat demo */}
            <div>
              <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden max-w-[560px] mx-auto shadow-sm">
                {/* Window bar */}
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2ac63a]" />
                  <span className="mx-auto text-xs text-slate-500">TrackBridge AI</span>
                </div>
                {/* Messages */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex flex-row-reverse gap-2.5 items-start">
                    <span className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-xs font-bold flex-shrink-0">JM</span>
                    <div className="bg-brand text-white text-sm px-3.5 py-2.5 rounded-xl font-medium max-w-[380px]">
                      Which projects are at risk of going over budget this month?
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-xs font-bold text-white flex-shrink-0">TB</span>
                    <div className="bg-slate-100 border border-slate-200 text-sm px-3.5 py-2.5 rounded-xl max-w-[380px] leading-relaxed">
                      3 projects are showing elevated budget risk right now:<br /><br />
                      <strong>Apex Modernization</strong> — 87% consumed, 34% complete<br />
                      <strong>TriState Portal</strong> — burn rate 2.1× plan, escalating<br />
                      <strong>Clearview Phase 2</strong> — $18K over baseline, change order pending<br /><br />
                      Want me to break down the root cause for any of these?
                    </div>
                  </div>
                  <div className="flex flex-row-reverse gap-2.5 items-start">
                    <span className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center text-xs font-bold flex-shrink-0">JM</span>
                    <div className="bg-brand text-white text-sm px-3.5 py-2.5 rounded-xl font-medium max-w-[380px]">
                      Yes — show me Apex Modernization
                    </div>
                  </div>
                </div>
                {/* Input */}
                <div className="px-4 py-3 border-t border-slate-200 flex gap-2.5 items-center">
                  <input
                    className="flex-1 bg-slate-100 border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-950 placeholder:text-slate-400 outline-none"
                    type="text"
                    placeholder="Ask about utilization, budget, projects..."
                    readOnly
                    aria-label="Chat input (demo)"
                  />
                  <button className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center flex-shrink-0" aria-label="Send" tabIndex={-1}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="bg-white border-y border-slate-200" aria-label="Supported PSA platforms">
        <div className="max-w-site mx-auto px-6 py-16 flex flex-col items-center gap-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Works with your PSA platform</p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {platforms.map(({ name, status }) => (
              <div
                key={name}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 border border-slate-200 font-semibold text-sm ${status === 'roadmap' ? 'opacity-50' : ''}`}
              >
                {name}
                {status === 'live' ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                    Roadmap
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">Capabilities</span>
            <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">
              Everything you need to know,<br />nothing you don&apos;t
            </h2>
            <p className="text-lg text-slate-500 max-w-[600px] mx-auto leading-[1.7]">
              TrackBridge surfaces operational intelligence your PSA already has — without requiring you to know where to look.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} icon={f.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="max-w-site mx-auto px-6 pb-24">
        <div className="bg-brand/[8%] border border-brand/25 rounded-3xl px-12 py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">Early Access</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4">Be first when we launch</h2>
          <p className="text-lg text-slate-500 mb-9 max-w-[520px] mx-auto">
            TrackBridge is in active development. Join the waitlist for early access and priority onboarding when we go live.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all">
              Request Early Access
            </Link>
            <Link href="/how" className="inline-flex items-center px-7 py-3.5 rounded-xl border border-slate-300 text-slate-950 font-semibold hover:border-brand hover:bg-brand/[8%] hover:-translate-y-0.5 transition-all">
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
