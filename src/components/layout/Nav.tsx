'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how', label: 'How It Works' },
  { href: '/who', label: 'Who We Serve' },
  { href: '/why', label: 'Why TrackBridge' },
  { href: '/pricing', label: 'Pricing' },
]

function LogoIcon() {
  return (
    <span className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="white" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 17L8 12L12 16L16 10L21 14" />
        <path d="M19 6h2v2" />
      </svg>
    </span>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 h-[68px] bg-cosmos flex items-center"
        aria-label="Main navigation"
      >
        <div className="max-w-site mx-auto px-6 w-full flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-[17px] text-white tracking-ui"
          >
            <LogoIcon />
            TrackBridge
          </Link>

          {/* Desktop center links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-1.5 rounded-full text-[14px] font-medium tracking-ui transition-colors ${
                  pathname === href
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop right CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-[7px] rounded-full bg-brand text-white text-[14px] font-semibold tracking-ui shadow-cta hover:opacity-90 transition-opacity"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-1 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            <svg
              width="22" height="22" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed top-[68px] inset-x-0 z-40 bg-cosmos border-b border-white/10 px-6 py-5 md:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-3 border-b border-white/8 text-white/70 font-medium text-sm tracking-ui last:border-0"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-5">
            <Link
              href="/contact"
              className="block py-3 rounded-full text-center bg-brand text-white text-sm font-semibold shadow-cta"
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
