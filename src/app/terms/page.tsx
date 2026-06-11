import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the TrackBridge website and services.',
}

export default function TermsPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[760px] mx-auto px-6">

        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-3 block">Legal</span>
        <h1 className="text-[clamp(28px,4vw,40px)] font-extrabold mb-3 tracking-heading">Terms of Service</h1>
        <p className="text-[14px] text-slate-ink mb-12">Effective date: June 10, 2026 · TrackBridge LLC · Richmond, Texas</p>

        <div className="prose-custom">

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the TrackBridge website at trackbridge.ai (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not use the Site.</p>
          <p>These Terms apply to all visitors, including those who submit information through our contact or waitlist form.</p>

          <h2>2. Description of Services</h2>
          <p>TrackBridge LLC (&ldquo;TrackBridge,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) is developing an AI-powered intelligence layer for professional services firms that use PSA (Professional Services Automation) platforms. The Site is a pre-launch marketing website used to:</p>
          <ul>
            <li>Provide information about TrackBridge and its planned product</li>
            <li>Collect early access and waitlist inquiries</li>
            <li>Schedule product demonstrations</li>
          </ul>
          <p>The TrackBridge software product is not yet generally available. References to features and capabilities on this Site describe our intended roadmap and are subject to change.</p>

          <h2>3. Eligibility</h2>
          <p>You must be at least 18 years old and have the authority to bind your organization (if submitting on behalf of a company) to use this Site and submit information through it.</p>

          <h2>4. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You agree not to:</p>
          <ul>
            <li>Scrape, crawl, or automatically collect data from the Site without written permission</li>
            <li>Attempt to probe, scan, or test the vulnerability of the Site or any related systems</li>
            <li>Submit false, misleading, or fraudulent information through our contact form</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation</li>
            <li>Use the Site in any way that could damage, disable, or overburden our infrastructure</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>All content on this Site — including text, graphics, logos, icons, and code — is the property of TrackBridge LLC or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws.</p>
          <p>You may view and print pages from this Site for personal, non-commercial reference only. You may not reproduce, distribute, modify, or create derivative works of any Site content without our express written permission.</p>
          <p>&ldquo;TrackBridge&rdquo; and the TrackBridge logo are trademarks of TrackBridge LLC. Third-party product names and logos (e.g., Slack, Microsoft Teams, NetSuite) remain the property of their respective owners and are used for identification purposes only.</p>

          <h2>6. Submissions and Communications</h2>
          <p>When you submit information through our contact or waitlist form, you grant TrackBridge a non-exclusive, royalty-free license to use that information to respond to your inquiry and manage your waitlist position. You represent that the information you submit is accurate.</p>
          <p>Submitting a form does not create a contract, guarantee of service, or commitment of any kind from TrackBridge.</p>

          <h2>7. Disclaimers</h2>
          <p>THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          <p>TRACKBRIDGE DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
          <p>PRODUCT FEATURES, TIMELINES, AND PRICING DESCRIBED ON THIS SITE ARE FORWARD-LOOKING AND SUBJECT TO CHANGE WITHOUT NOTICE.</p>

          <h2>8. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TRACKBRIDGE LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THIS SITE OR ITS CONTENT — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p>IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED ONE HUNDRED U.S. DOLLARS ($100).</p>

          <h2>9. Third-Party Links and Services</h2>
          <p>The Site may contain links to third-party websites. These links are provided for convenience only. TrackBridge has no control over, and assumes no responsibility for, the content, privacy policies, or practices of third-party sites. We encourage you to review the terms and privacy policies of any site you visit.</p>

          <h2>10. Governing Law and Dispute Resolution</h2>
          <p>These Terms are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any dispute arising from these Terms or your use of the Site shall be resolved exclusively in the state or federal courts located in Fort Bend County, Texas. You consent to personal jurisdiction in those courts.</p>

          <h2>11. Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes take effect when posted to the Site with a revised &ldquo;Effective date.&rdquo; Your continued use of the Site after any changes constitutes acceptance of the revised Terms.</p>

          <h2>12. Contact</h2>
          <p>TrackBridge LLC<br />Richmond, Texas, United States<br />Email: <a href="mailto:legal@trackbridge.ai">legal@trackbridge.ai</a></p>

        </div>
      </div>
    </section>
  )
}
