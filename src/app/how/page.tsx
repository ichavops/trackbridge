import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'TrackBridge connects to your PSA in three steps. Ask a question in plain English and get a precise answer from live data in seconds.',
}

const steps = [
  {
    num: '1',
    title: 'Connect Your PSA',
    body: 'Link TrackBridge to your existing PSA platform via secure API. No data migration. No parallel systems. Your data stays exactly where it is — we just make it accessible.',
  },
  {
    num: '2',
    title: 'Ask a Question',
    body: 'Type your question in plain English — in the TrackBridge web app, in Slack, or in Microsoft Teams. No dashboards to navigate. No filters to configure.',
  },
  {
    num: '3',
    title: 'Get Your Answer',
    body: 'TrackBridge retrieves the relevant live data from your PSA and returns a precise, context-aware response in seconds — with the numbers, the context, and what to do about it.',
  },
]

const deliveryOptions = [
  {
    emoji: '🌐',
    title: 'TrackBridge.ai',
    body: 'Dedicated web interface with full chat history, project views, and team collaboration features.',
    tag: 'Q3 2026',
    tagStyle: 'bg-brand/[8%] text-brand border-brand/25',
  },
  {
    emoji: '💬',
    title: 'Slack',
    body: 'Ask questions directly in your existing Slack workspace. Get answers without leaving the tool your team lives in.',
    tag: 'Q3 2026',
    tagStyle: 'bg-brand/[8%] text-brand border-brand/25',
  },
  {
    emoji: '🔷',
    title: 'Microsoft Teams',
    body: 'Native Teams integration for organizations that run on Microsoft 365. Ask from any channel or DM.',
    tag: 'Roadmap',
    tagStyle: 'bg-slate-100 text-slate-500 border-slate-300',
  },
  {
    emoji: '🔌',
    title: 'Chrome Extension',
    body: 'A floating TrackBridge chat window inside your PSA platform. Ask without switching tabs.',
    tag: 'Roadmap',
    tagStyle: 'bg-slate-100 text-slate-500 border-slate-300',
  },
]

const roadmap = [
  { when: 'Now', title: 'SuiteProjects Pro — Live', body: 'Natural language project health queries including budget status, project stage, customer data, and project notes. Proof of concept confirmed working against live SPP data.', done: true, active: false },
  { when: 'Q3 2026', title: 'TrackBridge.ai Web Platform + Slack', body: 'Full web interface with client login, chat history, and Slack integration. Utilization, resource bookings, timesheet analysis, and budget burn tracking.', done: false, active: true },
  { when: 'Q4 2026', title: 'Kantata (Mavenlink) Integration', body: 'Full feature parity with SuiteProjects Pro integration. Complete operational intelligence for Kantata customers.', done: false, active: false },
  { when: '2027', title: 'BigTime + Unanet', body: 'Expanding to two additional major PSA platforms with full TrackBridge intelligence layer support.', done: false, active: false },
  { when: '2027+', title: 'Full Professional Services AI Platform', body: 'Cross-platform analytics, predictive risk scoring, proactive alerts, and advanced workflow automation.', done: false, active: false },
]

export default function HowPage() {
  return (
    <>
      {/* ── STEPS ── */}
      <section className="py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">How It Works</span>
            <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">
              Three steps.<br />Seconds to an answer.
            </h1>
            <p className="text-lg text-slate-500 max-w-[600px] mx-auto leading-[1.7]">
              TrackBridge connects directly to your PSA, interprets your live operational data, and delivers plain-English intelligence wherever your team works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand/25 z-0" aria-hidden="true" />
            {steps.map((s) => (
              <div key={s.num} className="text-center px-6 relative z-10">
                <div className="w-24 h-24 rounded-full bg-brand mx-auto mb-6 flex items-center justify-center text-[32px] font-extrabold text-white shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                  {s.num}
                </div>
                <h2 className="text-xl font-bold mb-3">{s.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Arch note */}
          <div className="mt-16 bg-white border border-slate-300 rounded-2xl p-8 flex gap-6 items-start">
            <span className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-[22px] h-[22px] stroke-amber-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </span>
            <div>
              <h3 className="text-[17px] font-bold mb-2">A note on data accuracy</h3>
              <p className="text-sm text-slate-500 leading-[1.65]">
                TrackBridge never calculates core metrics itself. Your PSA platform computes utilization, budget consumption, and project financials using your existing business rules. TrackBridge retrieves those figures and explains what they mean, what changed, and what to watch. This architecture ensures full data fidelity — the numbers you see are your PSA&apos;s numbers, not an approximation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY OPTIONS ── */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">Delivery Options</span>
            <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">Meet your team where they work</h2>
            <p className="text-lg text-slate-500 max-w-[600px] mx-auto leading-[1.7]">
              TrackBridge delivers answers through the channels your team already uses — no new tools to adopt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryOptions.map((d) => (
              <div key={d.title} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-[24px] mb-4" aria-hidden="true">{d.emoji}</div>
                <h3 className="text-base font-bold mb-2">{d.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{d.body}</p>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${d.tagStyle}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
                  {d.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="py-24">
        <div className="max-w-site mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-3 block">Product Roadmap</span>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-12">Where we&apos;re headed</h2>

          <ol className="border-l-2 border-slate-300 pl-0" aria-label="Product roadmap">
            {roadmap.map((item) => (
              <li key={item.when} className="flex gap-6 items-start pb-8 pl-9 relative">
                <span
                  className={`absolute left-[-7px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    item.done
                      ? 'bg-brand border-brand shadow-[0_0_12px_rgba(124,58,237,0.45)]'
                      : item.active
                      ? 'bg-slate-50 border-brand border-[3px]'
                      : 'bg-slate-300 border-slate-300'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-brand min-w-[80px] pt-0.5">
                  {item.when}
                </span>
                <div>
                  <h3 className="text-base font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="max-w-site mx-auto px-6 pb-24">
        <div className="bg-brand/[8%] border border-brand/25 rounded-3xl px-12 py-16 text-center">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4">Ready to ask your first question?</h2>
          <p className="text-lg text-slate-500 mb-9 max-w-[520px] mx-auto">
            Join the waitlist and be among the first to experience TrackBridge when we launch.
          </p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all">
            Request Early Access
          </Link>
        </div>
      </div>
    </>
  )
}
