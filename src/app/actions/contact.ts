'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations'

// Sliding-window rate limiter — 3 submissions per IP per hour
const ipWindows = new Map<string, number[]>()
const RATE_LIMIT = 3
const RATE_WINDOW_MS = 60 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const prev = (ipWindows.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (prev.length >= RATE_LIMIT) return false
  ipWindows.set(ip, [...prev, now])
  return true
}

export type ContactState = {
  success?: boolean
  error?: string
  fieldErrors?: Record<string, string[]>
}

const PSA_LABELS: Record<string, string> = {
  spp: 'NetSuite SuiteProjects Pro (OpenAir)',
  kantata: 'Kantata (Mavenlink)',
  bigtime: 'BigTime',
  unanet: 'Unanet',
  netsuite: 'NetSuite Projects',
  other: 'Other',
  evaluating: 'Still evaluating / not sure',
}

// HTML entity encode every user-supplied string before inserting into email HTML
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — bots fill hidden fields, real users never see them.
  const honey = formData.get('_honey') as string
  if (honey) return { success: true }

  // Rate limit by IP — 3 submissions per hour
  const hdrs = await headers()
  const ip = hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return { error: 'Too many submissions from your location. Please try again later.' }
  }

  const raw = Object.fromEntries(formData.entries())

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors as Record<string, string[]>
    return { error: 'Please correct the highlighted fields.', fieldErrors }
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL_TO
  const fromAddress = process.env.CONTACT_EMAIL_FROM ?? 'TrackBridge <onboarding@resend.dev>'

  if (!apiKey || !toEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_EMAIL_TO')
    return { error: 'Form is temporarily unavailable. Please try again later.' }
  }

  const { firstName, lastName, company, email, psaPlatform, teamSize, message } = parsed.data

  // Encode all user fields before placing into HTML
  const safeName    = esc(`${firstName} ${lastName}`)
  const safeCompany = esc(company)
  const safeEmail   = esc(email)
  const safePSA     = esc(PSA_LABELS[psaPlatform] ?? psaPlatform)
  const safeTeam    = teamSize ? esc(teamSize) : 'Not specified'
  const safeMsg     = message ? esc(message) : ''

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toEmail,
    replyTo: email,
    subject: `New demo request — ${firstName} ${lastName} @ ${company}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
        <h2 style="color:#7c3aed;margin-bottom:4px">New TrackBridge Demo Request</h2>
        <p style="color:#64748b;margin-top:0;font-size:13px">Submitted via trackbridge.ai</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>

        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#64748b;width:160px">Name</td><td style="padding:8px 0;font-weight:600">${safeName}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0;font-weight:600">${safeCompany}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}" style="color:#7c3aed">${safeEmail}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b">PSA Platform</td><td style="padding:8px 0">${safePSA}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Team Size</td><td style="padding:8px 0">${safeTeam}</td></tr>
        </table>

        ${safeMsg
          ? `<hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
             <p style="color:#64748b;font-size:13px;margin-bottom:8px">Message</p>
             <p style="font-size:14px;line-height:1.6;white-space:pre-wrap">${safeMsg}</p>`
          : ''}

        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        <p style="font-size:12px;color:#94a3b8">Reply directly to this email to respond to ${esc(firstName)}.</p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return { error: 'Something went wrong sending your message. Please try again.' }
  }

  // Confirmation email to the submitter — fire-and-forget so it never blocks the response
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''
  resend.emails.send({
    from: fromAddress,
    to: email,
    replyTo: toEmail,
    subject: `Your TrackBridge demo request — we'll be in touch`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
        <h2 style="color:#7c3aed;margin-bottom:4px">Thanks, ${esc(firstName)}!</h2>
        <p style="color:#64748b;margin-top:0">We've received your demo request and will be in touch within one business day.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        ${calendlyUrl ? `
        <p style="font-size:14px">Want to lock in a time right now? Pick a slot that works for you:</p>
        <a href="${calendlyUrl}" style="display:inline-block;padding:12px 28px;background:linear-gradient(to right,#7c3aed,#ec4899);color:#fff;border-radius:9999px;text-decoration:none;font-weight:600;font-size:14px">Choose Your Demo Time →</a>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        ` : ''}
        <p style="font-size:12px;color:#94a3b8">TrackBridge LLC · Richmond, Texas · <a href="https://trackbridge.ai" style="color:#94a3b8">trackbridge.ai</a></p>
      </div>
    `,
  }).catch((err) => console.error('Confirmation email failed:', err))

  return { success: true }
}
