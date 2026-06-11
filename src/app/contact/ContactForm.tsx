'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = {}

// Antimetal-style: inputs use 0px radius (sharp corners contrast against pill buttons)
const inputClass =
  'w-full bg-white border-b border-fog/60 px-0 py-2.5 text-[14px] text-navy outline-none focus:border-brand transition-colors placeholder:text-ash tracking-ui'

function FormField({ label, required, error, children, id }: { label: string; required?: boolean; error?: string; children: React.ReactNode; id: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[12px] font-semibold text-ash tracking-[0.06em] uppercase">{label}{required && <span className="text-brand ml-0.5" aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="text-[12px] text-red-500 mt-1" role="alert">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)

  if (state.success) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-brand/[8%] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 stroke-brand" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-[20px] font-bold mb-2 tracking-heading">You&apos;re on the list</h3>
        <p className="text-[14px] text-slate-ink leading-relaxed">
          Thanks for reaching out. We&apos;ll be in touch within one business day to schedule your intro call.
        </p>
      </div>
    )
  }

  const fe = state.fieldErrors ?? {}

  return (
    <form action={action} noValidate>
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
          <select id="psaPlatform" className={`${inputClass} bg-transparent cursor-pointer`} name="psaPlatform" required defaultValue="">
            <option value="" disabled>Select your primary PSA platform</option>
            <option value="spp">NetSuite SuiteProjects Pro (OpenAir)</option>
            <option value="kantata">Kantata (Mavenlink)</option>
            <option value="bigtime">BigTime</option>
            <option value="unanet">Unanet</option>
            <option value="netsuite">NetSuite Projects</option>
            <option value="other">Other</option>
            <option value="evaluating">Still evaluating / not sure</option>
          </select>
        </FormField>

        <FormField id="teamSize" label="Approximate billable resources" error={fe.teamSize?.[0]}>
          <select id="teamSize" className={`${inputClass} bg-transparent cursor-pointer`} name="teamSize" defaultValue="">
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
        {pending ? 'Sending…' : 'Submit — Request Demo / Waitlist'}
      </button>
    </form>
  )
}
