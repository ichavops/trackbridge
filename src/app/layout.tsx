import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { headers } from 'next/headers'
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
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    siteName: 'TrackBridge',
    type: 'website',
    images: ['/logo.png'],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hdrs = await headers()
  const pathname = hdrs.get('x-pathname') ?? ''
  const isAdmin = pathname.startsWith('/admin')

  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="bg-canvas text-navy font-sans">
        {!isAdmin && <Nav />}
        <main className={!isAdmin ? 'pt-[68px]' : ''}>{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  )
}
