import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'

const securityHeaders = [
  // Clickjacking protection
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevent MIME sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Referrer info sent to same-origin only for cross-origin requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable legacy IE XSS auditor (it causes more harm than good in modern browsers)
  { key: 'X-XSS-Protection', value: '0' },
  // Force HTTPS for 2 years, include subdomains, submit to preload list
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Prevent cross-site info leaks via opener reference
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  // Deny browser features we never use
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'serial=()',
      'accelerometer=()',
      'gyroscope=()',
      'magnetometer=()',
    ].join(', '),
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // unsafe-eval only needed in dev for Next.js HMR — stripped in production
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      // Self-hosted images + logo/icon PNGs in /public; data: for next/image blur placeholders
      "img-src 'self' data: blob:",
      // next/font self-hosts fonts — no external font CDN needed
      "font-src 'self'",
      // All API calls are server-side (Resend, Calendly); no client-side fetch to external origins
      "connect-src 'self'",
      // Never allowed to be embedded in an iframe by anyone
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,

  headers: async () => [
    // Security headers on every response
    {
      source: '/(.*)',
      headers: securityHeaders,
    },
    // Long-lived immutable cache for hashed static assets (Next.js _next/static)
    // Vercel handles these automatically, but explicit doesn't hurt
    {
      source: '/_next/static/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    // Public folder: icons and images never change filename, so cache them aggressively.
    // If you replace a file, rename it or add a query string when referencing it.
    {
      source: '/icons/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/images/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
    },
    {
      source: '/logo.png',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }],
    },
  ],
}

export default nextConfig
