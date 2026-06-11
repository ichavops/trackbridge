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
  title: {
    default: 'TrackBridge — Ask. Know. Decide.',
    template: '%s | TrackBridge',
  },
  description:
    'TrackBridge is an AI intelligence layer for professional services firms. Instant plain-English answers from your live PSA data.',
  metadataBase: new URL('https://trackbridge.ai'),
  openGraph: {
    siteName: 'TrackBridge',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      {/* bg-canvas = #f8f9fc ghost canvas; text-navy = #1b2540 */}
      <body className="bg-canvas text-navy font-sans">
        <Nav />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
