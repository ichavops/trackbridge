import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for every stage of growth. TrackBridge is currently in early access — contact us to lock in founding rates.',
  alternates: { canonical: 'https://trackbridge.ai/pricing' },
  openGraph: {
    title: 'TrackBridge Pricing',
    description: 'Simple, transparent pricing. Early access available — contact us to lock in founding rates.',
    url: 'https://trackbridge.ai/pricing',
  },
}

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${muted ? 'stroke-fog' : 'stroke-brand'}`} viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const plans = [
  {
    name: 'Starter',
    desc: 'For smaller teams getting started with PSA intelligence. One platform, core queries, up to 5 users.',
    price: 'Contact Us',
    note: 'Pricing available upon request',
    featured: false,
    badge: null,
    cta: 'Contact for Pricing',
    ctaStyle: 'border border-fog/60 text-navy shadow-ghost-light hover:shadow-badge',
    features: [
      { text: '1 PSA platform connected', on: true },
      { text: 'Up to 5 users', on: true },
      { text: 'Project health queries', on: true },
      { text: 'Budget status & risk', on: true },
      { text: 'Web interface access', on: true },
      { text: 'Slack / Teams integration', on: false },
      { text: 'DCAA compliance queries', on: false },
      { text: 'Dedicated support', on: false },
    ],
  },
  {
    name: 'Growth',
    desc: 'For mid-market firms with active delivery operations and PMO leadership. Full intelligence, up to 25 users.',
    price: 'Contact Us',
    note: 'Early access pricing available',
    featured: true,
    badge: 'Most Popular',
    cta: 'Request Early Access',
    ctaStyle: 'bg-brand text-white shadow-cta hover:opacity-90',
    features: [
      { text: '1 PSA platform connected', on: true },
      { text: 'Up to 25 users', on: true },
      { text: 'Full project intelligence suite', on: true },
      { text: 'Resource utilization queries', on: true },
      { text: 'Slack integration', on: true },
      { text: 'DCAA compliance queries', on: true },
      { text: 'Chat history', on: true },
      { text: 'Dedicated success manager', on: false },
    ],
  },
  {
    name: 'Enterprise',
    desc: 'For larger firms with complex multi-platform environments, compliance requirements, and enterprise security needs.',
    price: 'Custom',
    note: "Tailored to your firm's needs",
    featured: false,
    badge: null,
    cta: 'Talk to Sales',
    ctaStyle: 'border border-fog/60 text-navy shadow-ghost-light hover:shadow-badge',
    features: [
      { text: 'Multiple PSA platforms', on: true },
      { text: 'Unlimited users', on: true },
      { text: 'Everything in Growth', on: true },
      { text: 'Microsoft Teams integration', on: true },
      { text: 'SSO / enterprise security', on: true },
      { text: 'Dedicated success manager', on: true },
      { text: 'Custom onboarding', on: true },
      { text: 'SLA & priority support', on: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      {/* ── PLANS ── */}
      <section className="bg-white py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">Pricing</span>
            <h1 className="text-[clamp(30px,4vw,44px)] font-extrabold mb-4 tracking-heading">
              Simple, transparent pricing<br />for every stage of growth
            </h1>
            <p className="text-[17px] text-slate-ink max-w-[560px] mx-auto leading-[1.7]">
              Currently in early access. Pricing below reflects our planned tiers — contact us to lock in founding rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`bg-canvas rounded-card flex flex-col transition-all duration-200 p-8 ${
                  plan.featured
                    ? 'shadow-[rgba(124,58,237,0.25)_0px_0px_0px_2px,rgba(0,39,80,0.06)_0px_32px_48px_-8px] md:scale-[1.03]'
                    : 'shadow-card hover:-translate-y-1'
                }`}
              >
                {plan.badge && (
                  <span className="self-start px-3 py-1 rounded-full bg-brand text-white text-[11px] font-semibold uppercase tracking-wide mb-5 shadow-cta">
                    {plan.badge}
                  </span>
                )}
                <h2 className="text-[22px] font-extrabold mb-2 tracking-heading">{plan.name}</h2>
                <p className="text-[13px] text-slate-ink leading-relaxed mb-6">{plan.desc}</p>
                <div className="text-[32px] font-extrabold mb-1 tracking-tight">{plan.price}</div>
                <p className="text-[12px] text-ash mb-7">{plan.note}</p>

                <ul className="flex-1 flex flex-col gap-2.5 mb-7" aria-label={`${plan.name} features`}>
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex gap-2.5 items-start text-[13px] tracking-ui ${f.on ? 'text-navy' : 'text-fog'}`}>
                      <CheckIcon muted={!f.on} />
                      {f.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full text-[14px] font-semibold text-center tracking-ui transition-all hover:-translate-y-0.5 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center mt-7 text-[13px] text-slate-ink">
            <strong>Government contractors and DCAA-compliant environments</strong> — contact us for custom deployment options.
          </p>

          {/* Footer card */}
          <div className="bg-canvas rounded-card shadow-card p-8 mt-10 text-center">
            <h3 className="text-[20px] font-bold mb-2.5 tracking-heading">Not sure which plan fits?</h3>
            <p className="text-slate-ink text-[14px] mb-6 max-w-[500px] mx-auto leading-[1.7]">
              Tell us about your firm — number of billable resources, PSA platform, and how your team currently accesses operational data. We&apos;ll recommend the right fit.
            </p>
            <Link href="/contact" className="inline-flex items-center px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── EARLY ACCESS ── */}
      <section className="bg-canvas py-20">
        <div className="max-w-site mx-auto px-6 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 block">Early Access Program</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-4 tracking-heading">Join before we launch</h2>
          <p className="text-[17px] text-slate-ink max-w-[560px] mx-auto leading-[1.7] mb-9">
            Early access customers get priority onboarding, locked-in founding rates, and direct input into our product roadmap. We&apos;re accepting a limited number of firms now.
          </p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity">
            Apply for Early Access
          </Link>
        </div>
      </section>
    </>
  )
}
