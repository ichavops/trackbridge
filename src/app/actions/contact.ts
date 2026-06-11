'use server'

import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations'

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

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries())

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors as Record<string, string[]>
    return { error: 'Please correct the highlighted fields.', fieldErrors }
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL_TO
  const fromAddress = process.env.CONTACT_EMAIL_FROM ?? 'TrackBridge <noreply@resend.dev>'

  if (!apiKey || !toEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_EMAIL_TO')
    return { error: 'Form is temporarily unavailable. Please try again later.' }
  }

  const { firstName, lastName, company, email, psaPlatform, teamSize, message } = parsed.data

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
          <tr><td style="padding:8px 0;color:#64748b;width:160px">Name</td><td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b">PSA Platform</td><td style="padding:8px 0">${PSA_LABELS[psaPlatform] ?? psaPlatform}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Team Size</td><td style="padding:8px 0">${teamSize ?? 'Not specified'}</td></tr>
        </table>

        ${
          message
            ? `<hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
               <p style="color:#64748b;font-size:13px;margin-bottom:8px">Message</p>
               <p style="font-size:14px;line-height:1.6;white-space:pre-wrap">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
            : ''
        }

        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        <p style="font-size:12px;color:#94a3b8">Reply directly to this email to respond to ${firstName}.</p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return { error: 'Something went wrong sending your message. Please try again.' }
  }

  return { success: true }
}
