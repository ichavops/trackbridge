'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = {}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-slate-500">
        {label}
        {required && <span className="text-brand ml-0.5" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'bg-slate-100 border border-slate-300 rounded-xl px-4 py-3 text-slate-950 text-sm outline-none focus:border-brand transition-colors placeholder:text-slate-400'

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)

  if (state.success) {
    return (
      <div className="text-center py-10 px-8">
        <svg
          className="w-14 h-14 stroke-brand mx-auto mb-4"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h3 className="text-xl font-bold mb-2">You&apos;re on the list</h3>
        <p className="text-slate-500 text-sm">
          Thanks for reaching out. We&apos;ll be in touch within one business day to schedule your intro call.
        </p>
      </div>
    )
  }

  const fe = state.fieldErrors ?? {}

  return (
    <form action={action} noValidate>
      <h2 className="text-xl font-bold mb-6">Book a Demo or Join the Waitlist</h2>

      {state.error && !state.fieldErrors && (
        <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700" role="alert">
          {state.error}
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <FormField label="First Name" required error={fe.firstName?.[0]}>
          <input
            className={inputClass}
            type="text"
            name="firstName"
            placeholder="Jane"
            required
            autoComplete="given-name"
          />
        </FormField>
        <FormField label="Last Name" required error={fe.lastName?.[0]}>
          <input
            className={inputClass}
            type="text"
            name="lastName"
            placeholder="Smith"
            required
            autoComplete="family-name"
          />
        </FormField>
      </div>

      <div className="flex flex-col gap-5 mb-5">
        <FormField label="Company" required error={fe.company?.[0]}>
          <input
            className={inputClass}
            type="text"
            name="company"
            placeholder="Acme Consulting LLC"
            required
            autoComplete="organization"
          />
        </FormField>

        <FormField label="Work Email" required error={fe.email?.[0]}>
          <input
            className={inputClass}
            type="email"
            name="email"
            placeholder="jane@acmeconsulting.com"
            required
            autoComplete="email"
          />
        </FormField>

        <FormField label="PSA Platform" required error={fe.psaPlatform?.[0]}>
          <select className={inputClass} name="psaPlatform" required defaultValue="">
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

        <FormField label="Approximate number of billable resources" error={fe.teamSize?.[0]}>
          <select className={inputClass} name="teamSize" defaultValue="">
            <option value="" disabled>Select team size</option>
            <option value="1-10">1–10</option>
            <option value="10-50">10–50</option>
            <option value="50-150">50–150</option>
            <option value="150-500">150–500</option>
            <option value="500+">500+</option>
          </select>
        </FormField>

        <FormField label="Tell us about your biggest operational data challenge" error={fe.message?.[0]}>
          <textarea
            className={`${inputClass} resize-y min-h-[120px]`}
            name="message"
            placeholder="What questions do you wish you could answer instantly from your PSA data?"
            maxLength={2000}
          />
        </FormField>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 rounded-xl bg-brand text-white font-bold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {pending ? 'Sending…' : 'Submit — Request Demo / Waitlist'}
      </button>
    </form>
  )
}
