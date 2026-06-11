import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // TrackBridge brand violet — CSS variable channel triple for opacity modifier support
        brand: 'rgb(var(--brand) / <alpha-value>)',
        // Antimetal-style structural colors
        cosmos: '#001033',       // deep navy — hero bg, nav, footer
        navy: '#1b2540',         // midnight navy — primary text on light surfaces
        canvas: '#f8f9fc',       // ghost canvas — primary light page background
        'slate-ink': '#6b7184',  // secondary body text, muted labels
        ash: '#7c8293',          // tertiary text, hairline strokes
        fog: '#b1b5c0',          // minimum-visibility borders
        ice: '#e0f6ff',          // ghost button borders on dark surfaces
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        card: '20px',
        badge: '16px',
      },
      letterSpacing: {
        ui: '-0.016em',
        heading: '-0.025em',
        display: '-0.03em',
      },
      boxShadow: {
        // Elevated feature card — blue-tinted multi-layer, 1px ring replaces border
        card: 'rgba(0,39,80,0.03) 0px 56px 72px -16px, rgba(0,39,80,0.03) 0px 32px 32px -16px, rgba(0,39,80,0.04) 0px 6px 12px -3px, rgba(0,39,80,0.04) 0px 0px 0px 1px',
        // Floating badge / platform pill
        badge: 'rgba(0,39,80,0.08) 0px 6px 16px -3px, rgba(0,39,80,0.04) 0px 0px 0px 1px',
        // Filled CTA button
        cta: 'rgba(24,37,66,0.32) 0px 1px 3px 0px, rgba(24,37,66,0.12) 0px 0.5px 0.5px 0px, rgba(24,37,66,0.44) 0px 12px 24px -12px, rgba(219,247,255,0.06) 0px 8px 16px 0px inset, rgba(219,247,255,0.48) 0px 0.5px 0.5px 0px inset',
        // Secondary ghost button on dark hero
        'ghost-dark': 'rgba(255,255,255,0.08) 0px 0px 16px 8px inset, rgba(255,255,255,0.08) 0px 0px 8px 4px inset, rgba(255,255,255,0.08) 0px 0px 4px 2px inset, rgba(255,255,255,0.12) 0px 0px 2px 1px inset',
        // Secondary ghost button on light surface
        'ghost-light': 'rgba(255,255,255,0.72) 0px 1px 1px 0px inset, rgba(4,33,80,0.02) 0px 8px 16px 0px, rgba(4,33,80,0.03) 0px 4px 12px 0px, rgba(4,33,80,0.06) 0px 1px 2px 0px, rgba(4,33,80,0.04) 0px 0px 0px 1px',
        // Announcement pill / floating surface
        pill: 'rgba(255,255,255,0.88) 0px 1px 1px 0px inset, rgba(0,39,80,0.04) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
}

export default config
