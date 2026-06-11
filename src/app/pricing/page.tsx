import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for every stage of growth. TrackBridge is currently in early access — contact us to lock in founding rates.',
}

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${muted ? 'stroke-slate-300' : 'stroke-brand'}`}
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

const plans = [
  {
    name: 'Starter',
    desc: 'For smaller teams getting started with PSA intelligence. One platform, core queries, up to 5 users.',
    price: 'Contact Us',
    note: 'Pricing available upon request',
    featured: false,
    badge: null,
    cta: 'Contact for Pricing',
    ctaStyle: 'border border-slate-300 text-slate-950 hover:border-brand hover:bg-brand/[8%]',
    features: [
      { text: '1 PSA platform connected', included: true },
      { text: 'Up to 5 users', included: true },
      { text: 'Project health queries', included: true },
      { text: 'Budget status & risk', included: true },
      { text: 'Web interface access', included: true },
      { text: 'Slack / Teams integration', included: false },
      { text: 'DCAA compliance queries', included: false },
      { text: 'Dedicated support', included: false },
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
    ctaStyle: 'bg-brand text-white hover:opacity-90',
    features: [
      { text: '1 PSA platform connected', included: true },
      { text: 'Up to 25 users', included: true },
      { text: 'Full project intelligence suite', included: true },
      { text: 'Resource utilization queries', included: true },
      { text: 'Slack integration', included: true },
      { text: 'DCAA compliance queries', included: true },
      { text: 'Chat history & exports', included: true },
      { text: 'Dedicated success manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    desc: 'For larger firms with complex multi-platform environments, compliance requirements, and enterprise security needs.',
    price: 'Custom',
    note: 'Tailored to your firm\'s needs',
    featured: false,
    badge: null,
    cta: 'Talk to Sales',
    ctaStyle: 'border border-slate-300 text-slate-950 hover:border-brand hover:bg-brand/[8%]',
    features: [
      { text: 'Multiple PSA platforms', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'Everything in Growth', included: true },
      { text: 'Microsoft Teams integration', included: true },
      { text: 'SSO / enterprise security', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'Custom onboarding', included: true },
      { text: 'SLA & priority support', included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      {/* ── PLANS ── */}
      <section className="py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">Pricing</span>
            <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">
              Simple, transparent pricing<br />for every stage of growth
            </h1>
            <p className="text-lg text-slate-500 max-w-[600px] mx-auto leading-[1.7]">
              TrackBridge is currently in early access. Pricing below reflects our planned tiers — contact us to lock in early access rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`bg-white rounded-2xl p-8 flex flex-col transition-all duration-200 ${
                  plan.featured
                    ? 'border-2 border-brand shadow-[0_0_60px_rgba(124,58,237,0.15)] md:scale-[1.03]'
                    : 'border border-slate-200 hover:-translate-y-1 hover:border-slate-300'
                }`}
              >
                {plan.badge && (
                  <span className="self-start px-3 py-1 rounded-full bg-brand text-white text-[11px] font-bold uppercase tracking-widest mb-5">
                    {plan.badge}
                  </span>
                )}
                <h2 className="text-2xl font-extrabold mb-2">{plan.name}</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{plan.desc}</p>
                <div className="text-[36px] font-extrabold mb-1">{plan.price}</div>
                <p className="text-xs text-slate-500 mb-7">{plan.note}</p>

                <ul className="flex-1 flex flex-col gap-2.5 mb-7" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex gap-2.5 items-start text-sm ${f.included ? '' : 'text-slate-400'}`}>
                      <CheckIcon muted={!f.included} />
                      {f.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all hover:-translate-y-0.5 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center mt-7 text-sm text-slate-500">
            <strong>Government contractors and DCAA-compliant environments</strong> — contact us for custom deployment options.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 mt-10 text-center">
            <h3 className="text-xl font-bold mb-2.5">Not sure which plan fits?</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-[540px] mx-auto">
              Tell us about your firm — number of billable resources, PSA platform, and how your team currently accesses operational data. We&apos;ll recommend the right fit.
            </p>
            <Link href="/contact" className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── EARLY ACCESS ── */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-site mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">Early Access Program</span>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4">Join before we launch</h2>
          <p className="text-lg text-slate-500 max-w-[600px] mx-auto leading-[1.7] mb-9">
            Early access customers get priority onboarding, locked-in founding rates, and direct input into our product roadmap. We&apos;re accepting a limited number of firms now.
          </p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all">
            Apply for Early Access
          </Link>
        </div>
      </section>
    </>
  )
}
