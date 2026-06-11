import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why TrackBridge',
  description:
    'Not a generic AI tool — a PSA intelligence specialist built by someone who has spent a decade inside these platforms.',
}

const differentiators = [
  {
    title: 'Domain knowledge baked in',
    body: 'Utilization logic varies by platform and configuration. Billing rules differ across contract types. DCAA compliance has specific timesheet requirements. TrackBridge understands these nuances — it doesn\'t just relay data, it interprets it correctly.',
  },
  {
    title: 'Platform-native accuracy',
    body: 'We know how NetSuite SuiteProjects Pro calculates utilization. We know how Kantata handles resource bookings. We know the custom field patterns that carry real business meaning. Generic AI tools don\'t — and it shows in the answers.',
  },
  {
    title: 'No PSA replacement required',
    body: 'TrackBridge is an intelligence layer — not a competing system. Your PSA stays exactly where it is. We connect to it, amplify it, and make it dramatically more accessible. Your existing investment gets more valuable, not obsolete.',
  },
  {
    title: 'Trusted by finance & operations',
    body: 'Because TrackBridge retrieves metrics from your PSA rather than recalculating them, the numbers are exactly what your finance team sees. No reconciliation. No "but our system says something different." One source of truth.',
  },
]

const compareRows = [
  { capability: 'Natural language PSA queries', tb: 'Yes', other: 'Limited' },
  { capability: 'Deep PSA domain expertise', tb: 'Native', other: 'Generic' },
  { capability: 'DCAA-aware intelligence', tb: 'Built-in', other: 'Not specialized' },
  { capability: 'Uses PSA-native calculations', tb: 'Yes', other: 'Often recalculated' },
  { capability: 'Works alongside existing PSA', tb: 'Always', other: 'Varies' },
  { capability: 'Chat-first experience', tb: 'Yes', other: 'Dashboard-first' },
]

const founderTags = [
  'NetSuite SuiteProjects Pro (OpenAir)',
  'Kantata (Mavenlink)',
  'BigTime',
  'Unanet',
  'NetSuite Projects',
  'DCAA Compliance',
  'Gov Contracting',
]

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 stroke-brand flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function WhyPage() {
  return (
    <>
      {/* ── HEADER + FOUNDER ── */}
      <section className="py-24">
        <div className="max-w-site mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-3 block">Why TrackBridge</span>
          <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">
            Not a generic AI tool.<br />A PSA intelligence specialist.
          </h1>
          <p className="text-lg text-slate-500 max-w-[600px] leading-[1.7] mb-14">
            Anyone can wrap an LLM around a database and call it an AI reporting tool. TrackBridge was built by someone who has spent a decade inside these platforms — and that difference is measurable.
          </p>

          {/* Origin story / founder card */}
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-3 block">Our Origin Story</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-6">Why TrackBridge Exists</h2>
          </div>

          <div className="bg-white border border-slate-300 rounded-2xl p-10 flex flex-wrap gap-8 items-start">
            <div className="w-20 h-20 rounded-xl bg-brand flex items-center justify-center text-[28px] font-extrabold text-white flex-shrink-0">
              TB
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-xl font-bold mb-1.5">Built by a PSA practitioner</h3>
              <p className="text-sm text-brand font-semibold mb-4">Founder — Nearly a decade of hands-on PSA implementation experience</p>
              <p className="text-sm text-slate-500 leading-[1.7] mb-4">
                TrackBridge was founded by a consultant with direct implementation and administration experience across NetSuite SuiteProjects Pro (OpenAir), Kantata (Mavenlink), BigTime, NetSuite Projects, Unanet, and adjacent platforms including construction PM tools. That experience spans government contracting environments with DCAA compliance requirements — one of the most demanding operational contexts in professional services. The product isn&apos;t built from documentation. It&apos;s built from knowing what breaks, what gets misconfigured, what causes bad data, and what questions actually matter.
              </p>
              <div className="flex flex-wrap gap-2">
                {founderTags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 border border-slate-300 text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {differentiators.map((d) => (
              <article key={d.title} className="bg-white border border-slate-200 rounded-xl p-7">
                <h3 className="text-[17px] font-bold mb-2.5 flex items-center gap-2.5">
                  <CheckIcon />
                  {d.title}
                </h3>
                <p className="text-sm text-slate-500 leading-[1.65]">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-site mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-3 block">How We&apos;re Different</span>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">How TrackBridge compares</h2>
          <p className="text-lg text-slate-500 max-w-[600px] leading-[1.7] mb-12">
            TrackBridge operates in the PSA intelligence category alongside horizontal workforce planning and resource management tools. Here&apos;s the honest comparison.
          </p>

          <div className="rounded-2xl overflow-hidden border border-slate-200 overflow-x-auto">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-5 py-4 text-left text-sm font-bold text-slate-950">Capability</th>
                  <th className="px-5 py-4 text-left text-sm font-bold text-brand">TrackBridge</th>
                  <th className="px-5 py-4 text-left text-sm font-bold text-slate-950">Typical Planning Platforms</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.capability} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-4 text-sm text-slate-950 border-t border-slate-100">{row.capability}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-brand border-t border-slate-100">
                      <span className="mr-1" aria-hidden="true">✓</span>{row.tb}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-400 border-t border-slate-100">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="max-w-site mx-auto px-6 py-24">
        <div className="bg-brand/[8%] border border-brand/25 rounded-3xl px-12 py-16 text-center">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4">Experience the difference</h2>
          <p className="text-lg text-slate-500 mb-9 max-w-[520px] mx-auto">
            See how TrackBridge answers questions your PSA reports can&apos;t — in seconds, with full data fidelity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all">
              Book a Demo
            </Link>
            <Link href="/pricing" className="inline-flex items-center px-7 py-3.5 rounded-xl border border-slate-300 text-slate-950 font-semibold hover:border-brand hover:bg-brand/[8%] hover:-translate-y-0.5 transition-all">
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
