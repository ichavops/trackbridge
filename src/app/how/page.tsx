import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'TrackBridge connects to your PSA in three steps. Ask a question in plain English and get a precise answer from live data in seconds.',
  alternates: { canonical: 'https://trackbridge.ai/how' },
  openGraph: {
    title: 'How TrackBridge Works',
    description: 'Connect your PSA, ask in plain English, get precise answers from live data in seconds.',
    url: 'https://trackbridge.ai/how',
  },
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
  { img: '/icons/trackbridge-app.svg', title: 'TrackBridge.ai', body: 'Dedicated web interface with full chat history, project views, and team collaboration features.', tag: 'Coming Soon', live: true },
  { img: '/icons/slack.svg', title: 'Slack', body: 'Ask questions directly in your existing Slack workspace. Get answers without leaving the tool your team lives in.', tag: 'Coming Soon', live: true },
  { img: '/icons/teams.svg', title: 'Microsoft Teams', body: 'Native Teams integration for organizations that run on Microsoft 365. Ask from any channel or DM.', tag: 'Roadmap', live: false },
  { img: '/icons/chrome.svg', title: 'Chrome Extension', body: 'A floating TrackBridge chat window inside your PSA platform. Ask without switching tabs.', tag: 'Roadmap', live: false },
]

const roadmap = [
  { when: 'Now', title: 'SuiteProjects Pro — Live', body: 'Natural language project health queries: budget status, project stage, customer data, and project notes. Confirmed working against live SPP data.', done: true, active: false },
  { when: 'Q3 2026', title: 'TrackBridge.ai Web Platform + Slack', body: 'Full web interface with client login, chat history, and Slack integration. Utilization, resource bookings, timesheet analysis, and budget burn tracking.', done: false, active: true },
  { when: 'Q4 2026', title: 'Kantata (Mavenlink) Integration', body: 'Full feature parity with SuiteProjects Pro. Complete operational intelligence for Kantata customers.', done: false, active: false },
  { when: '2027', title: 'BigTime + Unanet', body: 'Expanding to two additional major PSA platforms with full TrackBridge intelligence layer support.', done: false, active: false },
  { when: '2027+', title: 'Full Professional Services AI Platform', body: 'Cross-platform analytics, predictive risk scoring, proactive alerts, and advanced workflow automation.', done: false, active: false },
]

function CtaBanner({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="max-w-site mx-auto px-6 py-24">
      <div className="bg-brand-gradient rounded-card p-[1.5px]">
        <div className="relative bg-[#0b0118] rounded-[inherit] px-12 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/15 pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 hero-dots opacity-[0.06]" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white mb-4 tracking-heading">{title}</h2>
            <p className="text-[16px] text-white/55 mb-8 max-w-[460px] mx-auto leading-[1.65]">{sub}</p>
            <Link href="/contact" className="px-7 py-3 rounded-full bg-brand-gradient text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity">
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowPage() {
  return (
    <>
      {/* ── STEPS ── */}
      <section className="bg-white py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">How It Works</span>
            <h1 className="text-[clamp(30px,4vw,44px)] font-extrabold mb-4 tracking-heading">
              Three steps.<br />Answers in plain English.
            </h1>
            <p className="text-[17px] text-slate-ink max-w-[560px] mx-auto leading-[1.7]">
              TrackBridge connects directly to your PSA, interprets your live operational data, and delivers plain-English intelligence wherever your team works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-11 left-[16%] right-[16%] h-px bg-brand/20 z-0" aria-hidden="true" />
            {steps.map((s) => (
              <div key={s.num} className="text-center px-6 relative z-10">
                <div className="w-[88px] h-[88px] rounded-full bg-brand mx-auto mb-6 flex items-center justify-center text-[30px] font-extrabold text-white shadow-cta">
                  {s.num}
                </div>
                <h2 className="text-[18px] font-bold mb-3 tracking-heading">{s.title}</h2>
                <p className="text-[14px] text-slate-ink leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Architecture note */}
          <div className="mt-14 bg-canvas rounded-card shadow-card p-8 flex gap-6 items-start">
            <span className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 shadow-badge">
              <svg className="w-[20px] h-[20px] stroke-amber-500" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </span>
            <div>
              <h3 className="text-[16px] font-bold mb-2 tracking-heading">A note on data accuracy</h3>
              <p className="text-[14px] text-slate-ink leading-[1.65]">
                TrackBridge never calculates core metrics itself. Your PSA platform computes utilization, budget consumption, and project financials using your existing business rules. TrackBridge retrieves those figures and explains what they mean, what changed, and what to watch. The numbers you see are your PSA&apos;s numbers — not an approximation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY OPTIONS ── */}
      <section className="bg-canvas py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">Delivery Options</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4 tracking-heading">TrackBridge is built to meet your team where they work</h2>
            <p className="text-[17px] text-slate-ink max-w-[560px] mx-auto leading-[1.7]">
              TrackBridge delivers answers through the channels your team already uses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryOptions.map((d) => (
              <div key={d.title} className="bg-white rounded-card shadow-card p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 shadow-badge overflow-hidden">
                  <img src={d.img} alt={d.title} width={32} height={32} className="object-contain" />
                </div>
                <h3 className="text-[15px] font-bold mb-2 tracking-heading">{d.title}</h3>
                <p className="text-[13px] text-slate-ink leading-relaxed mb-4">{d.body}</p>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold shadow-pill ${d.live ? 'bg-brand/[8%] text-brand' : 'bg-canvas text-ash'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
                  {d.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="bg-white py-24">
        <div className="max-w-site mx-auto px-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Product Roadmap</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-12 tracking-heading">Where we&apos;re headed</h2>
          <ol className="border-l-2 border-fog/60" aria-label="Product roadmap">
            {roadmap.map((item) => (
              <li key={item.when} className="flex gap-6 items-start pb-8 pl-9 relative">
                <span
                  className={`absolute left-[-7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    item.done ? 'bg-brand border-brand shadow-[0_0_12px_rgba(124,58,237,0.5)]'
                    : item.active ? 'bg-white border-brand border-[3px]'
                    : 'bg-fog/40 border-fog'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand min-w-[80px] pt-0.5">{item.when}</span>
                <div>
                  <h3 className="text-[15px] font-bold mb-1 tracking-heading">{item.title}</h3>
                  <p className="text-[13px] text-slate-ink leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner title="Ready to ask your first question?" sub="Join the waitlist and be among the first to experience TrackBridge when we launch." />
    </>
  )
}
