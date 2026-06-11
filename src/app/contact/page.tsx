import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a demo or join the waitlist for TrackBridge. We review submissions within one business day.',
}

const steps = [
  'We review your submission within 1 business day',
  'We reach out to schedule a 30-minute intro call',
  'We walk you through a live demo using your PSA context',
  'Early access customers get onboarded as capacity allows',
]

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* ── Left: info ── */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-3 block">Contact Us</span>
            <h1 className="text-[clamp(28px,4vw,36px)] font-extrabold mb-4">
              Let&apos;s talk about your PSA data
            </h1>
            <p className="text-base text-slate-500 leading-[1.7] mb-8">
              Whether you want to book a demo, join the early access waitlist, or just have questions about how TrackBridge works with your platform — we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  label: 'Headquarters',
                  value: 'Richmond, Texas',
                  icon: (
                    <svg className="w-[18px] h-[18px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: 'Website',
                  value: 'trackbridge.ai',
                  icon: (
                    <svg className="w-[18px] h-[18px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  ),
                },
                {
                  label: 'Current PSA support',
                  value: 'NetSuite SuiteProjects Pro (OpenAir) — live now',
                  icon: (
                    <svg className="w-[18px] h-[18px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-xl bg-brand/[8%] border border-brand/25 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </span>
                  <div>
                    <strong className="block font-semibold text-sm mb-0.5">{label}</strong>
                    <span className="text-sm text-slate-500">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Next steps */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-bold mb-4">What happens after you submit?</h3>
              <ol className="flex flex-col gap-2.5">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-slate-500">
                    <span className="text-brand font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="bg-white border border-slate-200 rounded-2xl p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
