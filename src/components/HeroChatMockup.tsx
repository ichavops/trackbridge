'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

// ── Q&A data (replace items with real content when ready) ──────────────
type Pair = {
  q: string
  headline: string
  items: { bold: string; detail: string }[]
  note: string
}

const PAIRS: Pair[] = [
  {
    q: 'Which projects are at risk of going over budget this month?',
    headline: '3 projects showing elevated budget risk:',
    items: [
      { bold: 'Apex Modernization', detail: ' — 87% consumed, 34% complete' },
      { bold: 'TriState Portal', detail: ' — burn rate 2.1× plan, escalating' },
      { bold: 'Clearview Phase 2', detail: ' — $18K over baseline, change order pending' },
    ],
    note: 'Want me to break down the root cause for any of these?',
  },
  {
    q: 'Who has the lowest utilization this week?',
    headline: '3 consultants below target utilization:',
    items: [
      { bold: 'Marcus Webb', detail: ' — 28% billable (3 projects, all light sprint)' },
      { bold: 'Priya Mehta', detail: ' — 31% billable (on bench since Nexus close)' },
      { bold: 'Daniel Torres', detail: ' — 35% billable (awaiting project kickoff)' },
    ],
    note: 'All three have open capacity. Want me to suggest project fits?',
  },
  {
    q: 'How does our Q2 revenue compare to plan?',
    headline: 'Q2 revenue at a glance:',
    items: [
      { bold: 'Booked revenue', detail: ' — $1.24M vs $1.18M plan (+5.1%)' },
      { bold: 'At-risk revenue', detail: ' — $87K across 2 scope disputes' },
      { bold: 'Pipeline conversion', detail: ' — 34% (down from 41% last quarter)' },
    ],
    note: 'Meridian & Crestview disputes are the primary close risk.',
  },
  {
    q: 'Which projects have open staffing gaps next month?',
    headline: '3 projects with unfilled roles in July:',
    items: [
      { bold: 'Horizon Rebuild', detail: ' — 2 senior dev slots (starts Jul 8)' },
      { bold: 'NovaTech Phase 3', detail: ' — BA role vacant, kickoff Jul 14' },
      { bold: 'Summit Analytics', detail: ' — PM needed, contract extended to Aug' },
    ],
    note: 'Horizon is highest priority — client confirmed go-live date.',
  },
  {
    q: 'Show me invoices overdue by 30+ days',
    headline: '$90.5K outstanding across 3 clients:',
    items: [
      { bold: 'Paragon Group', detail: ' — $42,800 (47 days, POC unresponsive)' },
      { bold: 'Vertex Systems', detail: ' — $28,500 (39 days, milestone dispute)' },
      { bold: 'CoreLogic Inc', detail: ' — $19,200 (33 days, new AP contact needed)' },
    ],
    note: 'Want me to draft collection follow-up emails for each?',
  },
]

// ── Typing dots ────────────────────────────────────────────────────────
const DOT_CLASSES = ['chat-dot-0', 'chat-dot-1', 'chat-dot-2'] as const

function TypingDots() {
  return (
    <div className="flex items-center gap-[3px] px-1 py-1">
      {DOT_CLASSES.map((cls) => (
        <span key={cls} className={`w-[5px] h-[5px] rounded-full bg-slate-400 inline-block ${cls}`} />
      ))}
    </div>
  )
}

// ── Fade-in wrapper (CSS transition, no Framer Motion) ─────────────────
function FadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 16)
    return () => clearTimeout(t)
  }, [])
  return (
    <div
      className={`transition-all duration-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${className}`}
    >
      {children}
    </div>
  )
}

// ── TB avatar ──────────────────────────────────────────────────────────
function TBAvatar() {
  return (
    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">
      TB
    </div>
  )
}

// ── Types ──────────────────────────────────────────────────────────────
type ShownMsg = { role: 'user' | 'ai'; pairIdx: number; id: number }

// ── Main component ─────────────────────────────────────────────────────
export default function HeroChatMockup() {
  const [shown, setShown] = useState<ShownMsg[]>([])
  const [typing, setTyping] = useState<'user' | 'ai' | null>(null)
  const msgId = useRef(0)

  // Animation loop — cycles through all Q&A pairs then resets
  useEffect(() => {
    let cancelled = false
    const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    const run = async () => {
      await delay(700) // brief pause before first message on mount

      while (!cancelled) {
        for (let i = 0; i < PAIRS.length; i++) {
          if (cancelled) return

          // User types
          setTyping('user')
          await delay(800)
          if (cancelled) return

          // User message appears
          setTyping(null)
          setShown((prev) => [...prev, { role: 'user', pairIdx: i, id: msgId.current++ }])
          await delay(400)
          if (cancelled) return

          // AI types
          setTyping('ai')
          await delay(1300)
          if (cancelled) return

          // AI response appears
          setTyping(null)
          setShown((prev) => [...prev, { role: 'ai', pairIdx: i, id: msgId.current++ }])
          await delay(2400) // reading time
          if (cancelled) return
        }

        // Pause at end of loop, then reset
        await delay(1800)
        if (cancelled) return
        setShown([])
        setTyping(null)
        await delay(900)
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-14">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-transparent to-pink-900/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-brand/10 blur-[80px] pointer-events-none" aria-hidden="true" />

      {/* Chat window */}
      <div className="relative z-10 w-full max-w-[370px] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">

        {/* Title bar */}
        <div className="bg-[#13072b] px-4 py-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="text-white/50 text-[12px] font-medium tracking-ui mx-auto">TrackBridge AI</span>
        </div>

        {/* Message thread — fixed height, flex-end so new messages push old ones up and out */}
        <div className="bg-[#f6f5fb] px-4 py-4 flex flex-col justify-end gap-3 h-[216px] overflow-hidden">
          {shown.map((msg) => {
            const p = PAIRS[msg.pairIdx]

            if (msg.role === 'user') {
              return (
                <FadeIn key={msg.id} className="flex justify-end">
                  <div className="bg-brand text-white text-[12.5px] leading-[1.5] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[87%] shadow-sm">
                    {p.q}
                  </div>
                </FadeIn>
              )
            }

            return (
              <FadeIn key={msg.id} className="flex gap-2.5 items-start">
                <TBAvatar />
                <div className="bg-white text-[12px] leading-[1.6] px-3.5 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%]">
                  <p className="font-semibold text-navy mb-2">{p.headline}</p>
                  <div className="space-y-1.5 mb-2">
                    {p.items.map((item, i) => (
                      <p key={i}>
                        <span className="font-semibold text-navy">{item.bold}</span>
                        <span className="text-slate-500">{item.detail}</span>
                      </p>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400">{p.note}</p>
                </div>
              </FadeIn>
            )
          })}

          {/* Typing indicators */}
          {typing === 'user' && (
            <FadeIn className="flex justify-end">
              <div className="bg-brand/80 px-3 py-2 rounded-2xl rounded-tr-sm shadow-sm">
                <TypingDots />
              </div>
            </FadeIn>
          )}
          {typing === 'ai' && (
            <FadeIn className="flex gap-2.5 items-start">
              <TBAvatar />
              <div className="bg-white px-3.5 py-2.5 rounded-2xl rounded-tl-sm shadow-sm">
                <TypingDots />
              </div>
            </FadeIn>
          )}
        </div>

        {/* Input bar */}
        <div className="bg-white border-t border-gray-100 px-3 py-2.5 flex items-center gap-2">
          <span className="flex-1 text-[11.5px] text-slate-300 select-none">
            Ask about utilization, budget, projects…
          </span>
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating badge — response time */}
      <div className="absolute bottom-8 right-8 hidden sm:block bg-white/8 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2.5 shadow-sm z-10 text-right">
        <p className="text-white/40 text-[10px] uppercase tracking-[0.1em] mb-0.5">Avg response</p>
        <p className="text-white font-extrabold text-[20px] leading-none">&lt;&nbsp;3s</p>
      </div>
    </div>
  )
}
