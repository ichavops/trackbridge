import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How TrackBridge collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[760px] mx-auto px-6">

        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Legal</span>
        <h1 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-3 tracking-heading">Privacy Policy</h1>
        <p className="text-[14px] text-slate-ink mb-12">Effective date: June 10, 2026 · TrackBridge LLC · Richmond, Texas</p>

        <div className="prose-custom">

          <h2>1. Who We Are</h2>
          <p>TrackBridge LLC (&ldquo;TrackBridge,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website at trackbridge.ai (the &ldquo;Site&rdquo;). This Privacy Policy explains what personal information we collect, how we use it, and your rights regarding that information.</p>
          <p>Questions? Contact us at: <a href="mailto:privacy@trackbridge.ai">privacy@trackbridge.ai</a></p>

          <h2>2. Information We Collect</h2>
          <p>We collect personal information only when you voluntarily provide it — specifically through our contact and waitlist form. The information you may submit includes:</p>
          <ul>
            <li>First and last name</li>
            <li>Work email address</li>
            <li>Company name</li>
            <li>PSA platform in use (e.g., NetSuite SuiteProjects Pro, Kantata)</li>
            <li>Approximate team or firm size</li>
            <li>Any message or description of your operational challenge (optional)</li>
          </ul>
          <p>We do not collect payment information, government identifiers, or sensitive personal data.</p>
          <p>We also collect standard technical data automatically, including IP address, browser type, referring URL, and pages visited, via server logs or analytics tools. This data is not linked to your identity.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information you submit to:</p>
          <ul>
            <li>Respond to your inquiry or demo request</li>
            <li>Add you to our early access waitlist and contact you when TrackBridge is available</li>
            <li>Understand the types of firms and PSA platforms we should prioritize</li>
            <li>Send you product updates and announcements, if you opted in</li>
          </ul>
          <p>We do not use your information for automated decision-making or profiling.</p>

          <h2>4. How We Share Your Information</h2>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>
          <p>We share your information only with the following service provider, strictly to deliver our service:</p>
          <ul>
            <li><strong>Resend</strong> (resend.com) — our transactional email provider, used to route contact form submissions to our team. Resend processes your data as a processor on our behalf and under our instructions. See <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer">Resend&apos;s Privacy Policy</a>.</li>
          </ul>
          <p>We may disclose information if required by law, court order, or to protect the rights and safety of TrackBridge and its users.</p>

          <h2>5. Data Retention</h2>
          <p>We retain contact form submissions for as long as necessary to manage our waitlist and respond to your inquiry — typically no longer than 2 years from last interaction. You may request deletion at any time (see Section 7).</p>

          <h2>6. Cookies and Tracking</h2>
          <p>This Site does not use advertising cookies or cross-site tracking. We may use minimal session or performance cookies necessary for the Site to function. We do not use Google Analytics, Meta Pixel, or similar third-party tracking scripts.</p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li><strong>Access</strong> the personal information we hold about you</li>
            <li><strong>Correct</strong> inaccurate information</li>
            <li><strong>Delete</strong> your information (&ldquo;right to be forgotten&rdquo;)</li>
            <li><strong>Opt out</strong> of any marketing communications</li>
            <li><strong>Data portability</strong> — receive your data in a structured format</li>
          </ul>
          <p>To exercise any of these rights, email <a href="mailto:privacy@trackbridge.ai">privacy@trackbridge.ai</a>. We will respond within 30 days.</p>
          <p>If you are a resident of the European Economic Area (EEA) or United Kingdom, our legal basis for processing your information is your consent (provided when you submit the contact form) and our legitimate interest in responding to business inquiries.</p>
          <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). We do not sell personal information. To submit a CCPA request, use the contact above.</p>

          <h2>8. Data Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your information. Contact form submissions are encrypted in transit. We do not store raw form data in our own database — submissions are routed immediately via Resend to our team&apos;s email.</p>
          <p>No method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>

          <h2>9. Third-Party Links</h2>
          <p>Our Site may contain links to third-party websites (e.g., PSA vendor sites). We are not responsible for the privacy practices of those sites. Please review their privacy policies independently.</p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>Our Site is not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, contact us immediately and we will delete it.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will revise the &ldquo;Effective date&rdquo; at the top of this page when we do. Continued use of the Site after changes constitutes acceptance of the updated policy.</p>

          <h2>12. Contact</h2>
          <p>TrackBridge LLC<br />Richmond, Texas, United States<br />Email: <a href="mailto:privacy@trackbridge.ai">privacy@trackbridge.ai</a></p>

        </div>
      </div>
    </section>
  )
}
