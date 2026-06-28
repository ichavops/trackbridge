// Silence TypeScript's complaint about CSS side-effect imports.
// Next.js handles these at the bundler level; TS doesn't need to resolve them.
declare module '*.css'

// Calendly widget injected by assets.calendly.com/assets/external/widget.js
interface CalendlyWidget {
  initPopupWidget(opts: {
    url: string
    prefill?: {
      firstName?: string
      lastName?: string
      email?: string
      customAnswers?: Record<string, string>
    }
  }): void
}
