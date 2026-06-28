import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Book a demo or join the waitlist for TrackBridge. We review submissions within one business day.',
  alternates: { canonical: 'https://trackbridge.ai/contact' },
  openGraph: {
    title: 'Book a TrackBridge Demo',
    description: 'Book a demo or join the waitlist. We review submissions within one business day.',
    url: 'https://trackbridge.ai/contact',
  },
}

const nextSteps = [
  'We review your submission within 1 business day',
  'We reach out to schedule a 30-minute intro call',
  'We walk you through a live demo using your PSA context',
  'Early access customers get onboarded as capacity allows',
]

export default function ContactPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* ── Left info ── */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Contact Us</span>
            <h1 className="text-[clamp(26px,3.5vw,34px)] font-extrabold mb-4 tracking-heading">
              Let&apos;s talk about your PSA data
            </h1>
            <p className="text-[15px] text-slate-ink leading-[1.7] mb-8">
              Whether you want to book a demo, join the early access waitlist, or just have questions about how TrackBridge works with your platform — we&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  label: 'Headquarters', value: 'Houston, Texas',
                  icon: <svg className="w-[18px] h-[18px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                },
                {
                  label: 'Email', value: 'hello@trackbridge.ai',
                  icon: <svg className="w-[18px] h-[18px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex gap-3 items-start">
                  <span className="w-10 h-10 rounded-[12px] bg-brand/[8%] flex items-center justify-center flex-shrink-0 shadow-pill">
                    {icon}
                  </span>
                  <div>
                    <strong className="block font-semibold text-[13px] mb-0.5 tracking-ui">{label}</strong>
                    <span className="text-[13px] text-slate-ink">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Next steps */}
            <div className="bg-canvas rounded-card shadow-card p-6 mb-6">
              <h3 className="text-[15px] font-bold mb-4 tracking-heading">What happens after you submit?</h3>
              <ol className="flex flex-col gap-3">
                {nextSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start text-[13px] text-slate-ink leading-relaxed">
                    <span className="text-brand font-bold flex-shrink-0 text-[12px] tracking-ui">{String(i + 1).padStart(2, '0')}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Current PSA support */}
            <div className="flex gap-3 items-start">
              <span className="w-10 h-10 rounded-[12px] bg-brand/[8%] flex items-center justify-center flex-shrink-0 shadow-pill">
                <svg className="w-[18px] h-[18px] stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>
              </span>
              <div>
                <strong className="block font-semibold text-[13px] mb-0.5 tracking-ui">Current PSA support</strong>
                <span className="text-[13px] text-slate-ink">NetSuite SuiteProjects Pro — live now</span>
              </div>
            </div>
          </div>

          {/* ── Right form ── */}
          <div className="bg-canvas rounded-card shadow-card p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
