import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand: #7C3AED — defined as CSS-variable channel triple
        // Usage: bg-brand, bg-brand/[8%], border-brand/25, text-brand, etc.
        brand: 'rgb(var(--brand) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
