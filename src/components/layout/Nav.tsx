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
  { href: '/contact', label: 'Contact' },
]

function LogoIcon() {
  return (
    <span className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        className="fixed top-0 inset-x-0 z-50 h-[68px] bg-slate-50/95 backdrop-blur-md border-b border-slate-200 flex items-center"
        aria-label="Main navigation"
      >
        <div className="max-w-site mx-auto px-6 w-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl text-slate-950 hover:opacity-85 transition-opacity"
          >
            <LogoIcon />
            TrackBridge
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-slate-950'
                    : 'text-slate-500 hover:text-slate-950 hover:bg-brand/[8%]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-brand text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book a Demo
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1 text-slate-950"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
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
          className="fixed top-[68px] inset-x-0 z-40 bg-white border-b border-slate-200 px-6 py-4 md:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2.5 border-b border-slate-100 text-slate-600 font-medium text-sm last:border-0"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 px-5 py-3 rounded-lg bg-brand text-white font-semibold text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </>
  )
}
