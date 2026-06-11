import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    'TrackBridge is built for delivery managers, PMO leaders, VPs of Professional Services, and CFOs who need operational clarity without more dashboards.',
}

const personas = [
  { emoji: '📋', title: 'Delivery Managers', body: "You're responsible for on-time, on-budget delivery across multiple concurrent projects. You need instant answers about project health, budget burn, and resource availability — not a 30-minute reporting exercise. TrackBridge gives you that in seconds." },
  { emoji: '🗂️', title: 'PMO Leaders', body: 'You oversee the portfolio. You need to know which projects are at risk, where capacity gaps are developing, and how the bench looks next quarter. TrackBridge surfaces portfolio-level intelligence from your live PSA data — no aggregation required.' },
  { emoji: '📈', title: 'VPs of Professional Services', body: "You're accountable for utilization targets, margin performance, and client satisfaction. TrackBridge gives you the operational view your PSA was supposed to provide — without the manual work that was always supposed to be automated." },
  { emoji: '💼', title: 'CFOs & Finance Leaders', body: "You need accurate, real-time visibility into project financials, billing status, and revenue at risk. TrackBridge pulls directly from your PSA's financial data — the same source your team trusts — and makes it instantly queryable." },
]

const verticals = [
  { tag: 'Gov', tagClass: 'bg-blue-50 text-blue-700', title: 'Government Contractors', body: 'DCAA compliance is non-negotiable. TrackBridge understands timesheet accuracy requirements, project accounting integrity, and audit readiness — baked into every answer for government contracting environments.' },
  { tag: 'IT', tagClass: 'bg-violet-50 text-violet-700', title: 'IT & Technology Consulting', body: 'Managing multiple concurrent client engagements with complex billing structures, mixed contract types, and resource sharing across projects. TrackBridge handles the complexity your PSA already tracks.' },
  { tag: 'Eng', tagClass: 'bg-amber-50 text-amber-700', title: 'Engineering Firms', body: 'Running fixed-fee and time-and-materials projects simultaneously. TrackBridge understands the nuance — billing rule logic, revenue recognition, and the operational signals that matter.' },
  { tag: 'Con', tagClass: 'bg-pink-50 text-pink-700', title: 'Mid-Market Consulting', body: "You've outgrown spreadsheet-based reporting but aren't ready for enterprise BI. TrackBridge gives you the intelligence layer that makes your PSA investment pay off — without the implementation complexity." },
]

export default function WhoPage() {
  return (
    <>
      {/* ── PERSONAS ── */}
      <section className="bg-white py-24">
        <div className="max-w-site mx-auto px-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Who We Serve</span>
          <h1 className="text-[clamp(30px,4vw,44px)] font-extrabold mb-4 tracking-heading">Built for the people who run delivery</h1>
          <p className="text-[17px] text-slate-ink max-w-[560px] leading-[1.7] mb-12">
            TrackBridge is purpose-built for professional services leaders who need operational clarity — not more dashboards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personas.map((p) => (
              <article key={p.title} className="bg-canvas rounded-card shadow-card p-7 flex gap-5 items-start hover:-translate-y-0.5 transition-transform duration-200">
                <span className="text-[34px] leading-none flex-shrink-0 mt-0.5" aria-hidden="true">{p.emoji}</span>
                <div>
                  <h2 className="text-[16px] font-bold mb-2 tracking-heading">{p.title}</h2>
                  <p className="text-[14px] text-slate-ink leading-relaxed">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section className="bg-canvas py-20">
        <div className="max-w-site mx-auto px-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Verticals</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4 tracking-heading">Industries we understand deeply</h2>
          <p className="text-[17px] text-slate-ink max-w-[560px] leading-[1.7] mb-12">
            TrackBridge isn&apos;t a generic tool. It was built with deep knowledge of how professional services firms in specific verticals actually operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verticals.map((v) => (
              <article key={v.title} className="bg-white rounded-card shadow-card p-6 flex gap-4 items-start">
                <span className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide shadow-pill ${v.tagClass}`}>
                  {v.tag}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold mb-1.5 tracking-heading">{v.title}</h3>
                  <p className="text-[13px] text-slate-ink leading-relaxed">{v.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIZE BANNER ── */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-6">
          <div className="bg-canvas rounded-card shadow-card px-10 py-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1 min-w-[200px]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-2 block">Firm Size</span>
              <h2 className="text-[20px] font-bold tracking-heading">10 to 500 billable resources</h2>
            </div>
            <p className="text-[14px] text-slate-ink leading-[1.7] flex-[2] min-w-[200px]">
              TrackBridge is designed for mid-market professional services firms that are large enough to have real operational complexity — but don&apos;t have a dedicated analytics team to wrangle it. If your team spends meaningful time pulling reports to answer operational questions, TrackBridge was built for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="max-w-site mx-auto px-6 pb-24">
        <div className="relative bg-cosmos rounded-card px-12 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 hero-dots opacity-40" aria-hidden="true" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] pointer-events-none cta-violet-glow" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white mb-4 tracking-heading">Sound like your firm?</h2>
            <p className="text-[16px] text-white/60 mb-8 max-w-[460px] mx-auto leading-[1.65]">Tell us about your PSA platform and team size — we&apos;ll reach out when TrackBridge is ready for you.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity">Get in Touch</Link>
              <Link href="/why" className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-ice/25 shadow-ghost-dark hover:bg-white/5 transition-colors">Why TrackBridge</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
