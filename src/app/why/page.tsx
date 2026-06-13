import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why TrackBridge',
  description: 'Most AI tools understand language. TrackBridge understands PSA operations — built by a practitioner with nearly a decade inside these platforms.',
  alternates: { canonical: 'https://trackbridge.ai/why' },
  openGraph: {
    title: 'Why TrackBridge — PSA Intelligence Specialist',
    description: 'Most AI tools understand language. TrackBridge understands PSA operations.',
    url: 'https://trackbridge.ai/why',
  },
}

const differentiators = [
  { title: 'Domain knowledge baked in', body: "Utilization logic varies by platform and configuration. Billing rules differ across contract types. DCAA compliance has specific timesheet requirements. TrackBridge understands these nuances — it doesn't just relay data, it interprets it correctly." },
  { title: 'Platform-native accuracy', body: "We know how NetSuite SuiteProjects Pro calculates utilization. We know how Kantata handles resource bookings. We know the custom field patterns that carry real business meaning. Generic AI tools don't — and it shows in the answers." },
  { title: 'No PSA replacement required', body: 'TrackBridge is an intelligence layer — not a competing system. Your PSA stays exactly where it is. We connect to it, amplify it, and make it dramatically more accessible. Your existing investment gets more valuable, not obsolete.' },
  { title: 'Trusted by finance & operations', body: 'Because TrackBridge retrieves metrics from your PSA rather than recalculating them, the numbers are exactly what your finance team sees. No reconciliation. No "but our system says something different." One source of truth.' },
]

const compareRows = [
  { capability: 'Natural language PSA queries', tb: 'Yes', other: 'Limited' },
  { capability: 'Deep PSA domain expertise', tb: 'Native', other: 'Generic' },
  { capability: 'DCAA-aware intelligence', tb: 'Built-in', other: 'Not specialized' },
  { capability: 'Uses PSA-native calculations', tb: 'Yes', other: 'Often recalculated' },
  { capability: 'Works alongside existing PSA', tb: 'Always', other: 'Varies' },
  { capability: 'Chat-first experience', tb: 'Yes', other: 'Dashboard-first' },
]

const founderTags = ['NetSuite SuiteProjects Pro', 'Kantata (Mavenlink)', 'BigTime', 'Unanet', 'NetSuite Projects', 'DCAA Compliance', 'Gov Contracting']

function CheckIcon() {
  return (
    <svg className="w-5 h-5 stroke-brand flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function WhyPage() {
  return (
    <>
      {/* ── HEADER + FOUNDER ── */}
      <section className="bg-white py-24">
        <div className="max-w-site mx-auto px-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Why TrackBridge</span>
          <h1 className="text-[clamp(30px,4vw,44px)] font-extrabold mb-4 tracking-heading">
            Not a generic AI tool.<br />A PSA intelligence specialist.
          </h1>
          <p className="text-[17px] text-slate-ink max-w-[600px] leading-[1.7] mb-14">
            Most AI tools understand language. TrackBridge understands PSA operations.
          </p>

          {/* Founder card */}
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Our Origin Story</span>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold mb-6 tracking-heading">Why TrackBridge Exists</h2>

          <div className="bg-canvas rounded-card shadow-card p-10 flex flex-wrap gap-8 items-start mb-14">
            <div className="w-[72px] h-[72px] rounded-[20px] bg-brand flex items-center justify-center text-[24px] font-extrabold text-white flex-shrink-0">
              TB
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-[18px] font-bold mb-1 tracking-heading">Built by a PSA practitioner</h3>
              <p className="text-[13px] text-brand font-semibold mb-4">Founder — Nearly a decade of hands-on PSA implementation experience</p>
              <p className="text-[14px] text-slate-ink leading-[1.7] mb-4">
                TrackBridge was founded by a consultant with direct implementation and administration experience across NetSuite SuiteProjects Pro (OpenAir), Kantata (Mavenlink), BigTime, NetSuite Projects, Unanet, and adjacent platforms. That experience spans government contracting environments with DCAA compliance requirements — one of the most demanding operational contexts in professional services. The product isn&apos;t built from documentation. It&apos;s built from knowing what breaks, what gets misconfigured, and what questions actually matter.
              </p>
              <div className="flex flex-wrap gap-2">
                {founderTags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-[12px] font-medium bg-white shadow-pill text-slate-ink">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((d) => (
              <article key={d.title} className="bg-canvas rounded-card shadow-card p-7">
                <h3 className="text-[16px] font-bold mb-2.5 flex items-start gap-2.5 tracking-heading">
                  <CheckIcon />
                  {d.title}
                </h3>
                <p className="text-[14px] text-slate-ink leading-[1.65] pl-7">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-canvas py-20">
        <div className="max-w-site mx-auto px-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">How We&apos;re Different</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4 tracking-heading">How TrackBridge compares</h2>
          <p className="text-[17px] text-slate-ink max-w-[560px] leading-[1.7] mb-12">
            Here&apos;s the honest comparison against typical planning and resource management platforms.
          </p>
          <div className="rounded-card overflow-hidden shadow-card overflow-x-auto">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="bg-cosmos">
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-white/70 tracking-ui">Capability</th>
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-brand tracking-ui">TrackBridge</th>
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-white/40 tracking-ui">Typical Planning Platforms</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.capability} className={i % 2 === 0 ? 'bg-white' : 'bg-canvas'}>
                    <td className="px-5 py-4 text-[14px] text-navy tracking-ui border-t border-fog/20">{row.capability}</td>
                    <td className="px-5 py-4 text-[14px] font-semibold text-brand tracking-ui border-t border-fog/20">
                      <span className="mr-1.5" aria-hidden="true">✓</span>{row.tb}
                    </td>
                    <td className="px-5 py-4 text-[14px] text-ash tracking-ui border-t border-fog/20">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="max-w-site mx-auto px-6 py-24">
        <div className="bg-brand-gradient rounded-card p-[1.5px]">
          <div className="relative bg-[#0b0118] rounded-[inherit] px-12 py-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/15 pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 hero-dots opacity-[0.06]" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white mb-4 tracking-heading">Experience the difference</h2>
              <p className="text-[16px] text-white/55 mb-8 max-w-[460px] mx-auto leading-[1.65]">See how TrackBridge answers questions your PSA reports can&apos;t — in seconds, with full data fidelity.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="px-7 py-3 rounded-full bg-brand-gradient text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity">Book a Demo</Link>
                <Link href="/pricing" className="px-7 py-3 rounded-full text-white text-[15px] font-medium tracking-ui border border-white/20 hover:bg-white/[0.07] transition-colors">See Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
