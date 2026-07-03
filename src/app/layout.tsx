import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://trackbridge.ai'),

  title: {
    default: 'TrackBridge — Ask. Know. Decide.',
    template: '%s | TrackBridge',
  },
  description:
    'TrackBridge is an AI intelligence layer for professional services firms. Instant plain-English answers from your live PSA data — no reports, no dashboards.',

  keywords: [
    'PSA AI', 'professional services AI', 'PSA intelligence',
    'NetSuite SuiteProjects AI', 'project management AI copilot',
    'professional services automation', 'PSA analytics',
    'delivery management AI', 'resource utilization AI',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    siteName: 'TrackBridge',
    type: 'website',
    locale: 'en_US',
    url: 'https://trackbridge.ai',
    title: 'TrackBridge — Ask. Know. Decide.',
    description:
      'TrackBridge is an AI intelligence layer for professional services firms. Instant plain-English answers from your live PSA data.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'TrackBridge — Ask. Know. Decide.' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TrackBridge — Ask. Know. Decide.',
    description:
      'AI intelligence layer for professional services firms. Instant answers from your live PSA data.',
    images: ['/opengraph-image'],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TrackBridge',
  url: 'https://trackbridge.ai',
  logo: 'https://trackbridge.ai/logo.png',
  description: 'AI intelligence layer for professional services firms. Instant plain-English answers from live PSA data.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://trackbridge.ai/contact',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-canvas text-navy font-sans">
        <Nav />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
