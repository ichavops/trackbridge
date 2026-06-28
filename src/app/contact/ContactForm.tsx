'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { submitContact, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = {}
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''

// Human-readable labels for Calendly prefill (mirrors server-side PSA_LABELS)
const PSA_LABELS: Record<string, string> = {
  spp: 'NetSuite SuiteProjects Pro',
  kantata: 'Kantata (Mavenlink)',
  bigtime: 'BigTime',
  unanet: 'Unanet',
  netsuite: 'NetSuite Projects',
  other: 'Other',
  evaluating: 'Still evaluating / not sure',
}

const inputClass =
  'w-full bg-white border-b border-fog/60 px-0 py-2.5 text-[14px] text-navy outline-none focus:border-brand transition-colors placeholder:text-ash tracking-ui'

function FormField({ label, required, error, children, id }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode; id: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[12px] font-semibold text-ash tracking-[0.06em] uppercase">
        {label}{required && <span className="text-brand ml-0.5" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p className="text-[12px] text-red-500 mt-1" role="alert">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)
  const [startMs, setStartMs] = useState(0)
  const capturedData = useRef<Record<string, string>>({})
  const calendlyReady = useRef(false)

  useEffect(() => { setStartMs(Date.now()) }, [])

  // Load Calendly widget assets once on mount
  useEffect(() => {
    if (!CALENDLY_URL) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => { calendlyReady.current = true }
    document.head.appendChild(script)

    return () => {
      try { document.head.removeChild(link) } catch { /* already removed */ }
    }
  }, [])

  // Open Calendly popup after successful submission
  useEffect(() => {
    if (!state.success || !CALENDLY_URL) return

    const openPopup = () => {
      const cal = (window as unknown as { Calendly?: CalendlyWidget }).Calendly
      if (!cal) return
      const d = capturedData.current
      cal.initPopupWidget({
        url: CALENDLY_URL,
        prefill: {
          firstName: d.firstName ?? '',
          lastName: d.lastName ?? '',
          email: d.email ?? '',
          customAnswers: {
            a1: PSA_LABELS[d.psaPlatform] ?? d.psaPlatform ?? '',
            a2: d.teamSize ?? '',
            a3: d.message ?? '',
          },
        },
      })
    }

    // Brief delay so widget.js finishes initialising after load
    const t = setTimeout(openPopup, 400)
    return () => clearTimeout(t)
  }, [state.success])

  // Capture form values before the server action runs
  const captureValues = (e: React.FormEvent<HTMLFormElement>) => {
    const fd = new FormData(e.currentTarget)
    capturedData.current = Object.fromEntries(
      [...fd.entries()].map(([k, v]) => [k, String(v)])
    )
  }

  const openCalendlyPopup = () => {
    const cal = (window as unknown as { Calendly?: CalendlyWidget }).Calendly
    if (!cal || !CALENDLY_URL) {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
      return
    }
    const d = capturedData.current
    cal.initPopupWidget({
      url: CALENDLY_URL,
      prefill: {
        firstName: d.firstName ?? '',
        lastName: d.lastName ?? '',
        email: d.email ?? '',
        customAnswers: {
          a1: PSA_LABELS[d.psaPlatform] ?? d.psaPlatform ?? '',
          a2: d.teamSize ?? '',
          a3: d.message ?? '',
        },
      },
    })
  }

  if (state.success) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-brand/[8%] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3 className="text-[20px] font-bold mb-2 tracking-heading">Details received!</h3>
        <p className="text-[14px] text-slate-ink leading-relaxed mb-8">
          A calendar is opening so you can lock in a time. If it didn&apos;t appear, click below.
        </p>

        {CALENDLY_URL && (
          <button
            type="button"
            onClick={openCalendlyPopup}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity"
          >
            Book Your Demo Slot
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </button>
        )}

        <p className="text-[12px] text-ash mt-5">
          A confirmation has been sent to your email. Our team will follow up within one business day.
        </p>
      </div>
    )
  }

  const fe = state.fieldErrors ?? {}

  return (
    <form action={action} onSubmit={captureValues}>
      {/* Honeypot — invisible to real users, bots fill it and get silently rejected */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" tabIndex={-1}>
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="_t" value={startMs} />
      </div>
      <h2 className="text-[20px] font-bold mb-7 tracking-heading">Book a Demo or Join the Waitlist</h2>

      {state.error && !state.fieldErrors && (
        <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 text-[13px] text-red-600 shadow-badge" role="alert">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField id="firstName" label="First Name" required error={fe.firstName?.[0]}>
            <input id="firstName" className={inputClass} type="text" name="firstName" placeholder="Jane" required autoComplete="given-name" />
          </FormField>
          <FormField id="lastName" label="Last Name" required error={fe.lastName?.[0]}>
            <input id="lastName" className={inputClass} type="text" name="lastName" placeholder="Smith" required autoComplete="family-name" />
          </FormField>
        </div>

        <FormField id="company" label="Company" required error={fe.company?.[0]}>
          <input id="company" className={inputClass} type="text" name="company" placeholder="Acme Consulting LLC" required autoComplete="organization" />
        </FormField>

        <FormField id="email" label="Work Email" required error={fe.email?.[0]}>
          <input id="email" className={inputClass} type="email" name="email" placeholder="jane@acmeconsulting.com" required autoComplete="email" />
        </FormField>

        <FormField id="psaPlatform" label="PSA Platform" required error={fe.psaPlatform?.[0]}>
          <select id="psaPlatform" title="PSA Platform" className={`${inputClass} bg-transparent cursor-pointer`} name="psaPlatform" required defaultValue="">
            <option value="" disabled>Select your primary PSA platform</option>
            <option value="spp">NetSuite SuiteProjects Pro</option>
            <option value="kantata">Kantata (Mavenlink)</option>
            <option value="bigtime">BigTime</option>
            <option value="unanet">Unanet</option>
            <option value="netsuite">NetSuite Projects</option>
            <option value="other">Other</option>
            <option value="evaluating">Still evaluating / not sure</option>
          </select>
        </FormField>

        <FormField id="teamSize" label="Approximate billable resources" error={fe.teamSize?.[0]}>
          <select id="teamSize" title="Approximate billable resources" className={`${inputClass} bg-transparent cursor-pointer`} name="teamSize" defaultValue="">
            <option value="" disabled>Select team size</option>
            <option value="1-10">1–10</option>
            <option value="10-50">10–50</option>
            <option value="50-150">50–150</option>
            <option value="150-500">150–500</option>
            <option value="500+">500+</option>
          </select>
        </FormField>

        <FormField id="message" label="Biggest operational data challenge" error={fe.message?.[0]}>
          <textarea
            id="message"
            className={`${inputClass} resize-none min-h-[90px]`}
            name="message"
            placeholder="What questions do you wish you could answer instantly from your PSA data?"
            maxLength={2000}
          />
        </FormField>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full py-3.5 rounded-full bg-brand text-white font-semibold text-[15px] tracking-ui shadow-cta hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Sending…' : 'Continue — Choose a Time →'}
      </button>
    </form>
  )
}
