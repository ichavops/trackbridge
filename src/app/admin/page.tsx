import type { Metadata } from 'next'
import Link from 'next/link'
import { getBookings } from '@/lib/calendly'
import type { Booking } from '@/lib/calendly'
import { logoutAction } from './logout/action'

export const metadata: Metadata = {
  title: 'Admin — TrackBridge',
  robots: { index: false, follow: false },
}
export const dynamic = 'force-dynamic'

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  })
}

function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short',
  })
}

function isPast(iso: string) {
  return new Date(iso) < new Date()
}

export default async function AdminPage() {
  let bookings: Booking[] = []
  let error: string | null = null

  try {
    bookings = await getBookings()
  } catch (e) {
    error = (e as Error).message
  }

  const upcoming = bookings.filter((b) => !isPast(b.start_time))
  const todayCount = bookings.filter((b) => {
    const d = new Date(b.start_time)
    const now = new Date()
    return d.toDateString() === now.toDateString()
  }).length

  return (
    <div className="min-h-screen bg-canvas">

      {/* Top bar */}
      <header className="bg-cosmos border-b border-white/[0.08] px-6 py-0 h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" aria-hidden="true" className="w-7 h-7 rounded-lg flex-shrink-0" />
          <span className="text-white font-semibold text-[14px] tracking-ui">Admin</span>
          <span className="text-white/20 text-[14px]">/</span>
          <span className="text-white/50 text-[14px]">Bookings</span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            ← Site
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-[26px] font-extrabold tracking-heading mb-1">Demo Bookings</h1>
          <p className="text-sm text-slate-ink">Upcoming demos scheduled via Calendly — refreshes on each load</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Upcoming', value: upcoming.length },
            { label: 'Today', value: todayCount },
            { label: 'Total fetched', value: bookings.length },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-card shadow-card p-5">
              <p className="text-[28px] font-extrabold tracking-heading leading-none mb-1.5">{value}</p>
              <p className="text-[11px] text-slate-ink uppercase tracking-[0.1em] font-semibold">{label}</p>
            </div>
          ))}
        </div>

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-red-700 mb-1">Calendly API error</p>
            <p className="text-xs text-red-600 font-mono break-all">{error}</p>
            {error.includes('CALENDLY_API_TOKEN') && (
              <p className="text-xs text-red-600 mt-2">
                Add <code className="bg-red-100 px-1 rounded">CALENDLY_API_TOKEN</code> to your environment variables and redeploy.
              </p>
            )}
          </div>
        )}

        {/* Empty state */}
        {!error && bookings.length === 0 && (
          <div className="bg-white rounded-card shadow-card p-14 text-center">
            <svg className="w-10 h-10 mx-auto mb-4 stroke-fog" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <p className="text-navy font-semibold mb-1">No upcoming bookings</p>
            <p className="text-slate-ink text-sm">Demos will appear here once someone books via Calendly.</p>
          </div>
        )}

        {/* Bookings table */}
        {bookings.length > 0 && (
          <div className="bg-white rounded-card shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-fog/40 bg-canvas/60">
                    <th className="text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ash whitespace-nowrap">Date & Time</th>
                    <th className="text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ash">Name</th>
                    <th className="text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ash">Email</th>
                    <th className="text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ash">Event</th>
                    <th className="text-left px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ash">Join Link</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => {
                    const invitee = booking.invitees[0]
                    const past = isPast(booking.start_time)
                    return (
                      <tr
                        key={booking.uuid}
                        className={`border-b border-fog/20 last:border-0 hover:bg-canvas/50 transition-colors ${past ? 'opacity-45' : ''}`}
                      >
                        <td className="px-5 py-4 whitespace-nowrap">
                          <p className="font-semibold text-navy text-[13px]">{fmtDate(booking.start_time)}</p>
                          <p className="text-xs text-slate-ink mt-0.5">{fmtTime(booking.start_time)}</p>
                          {past && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-fog/20 text-[10px] font-semibold text-ash uppercase tracking-wider">Past</span>
                          )}
                        </td>
                        <td className="px-5 py-4 font-medium text-navy whitespace-nowrap">
                          {invitee?.name ?? <span className="text-ash">—</span>}
                        </td>
                        <td className="px-5 py-4 text-slate-ink">
                          {invitee?.email ? (
                            <a href={`mailto:${invitee.email}`} className="hover:text-brand transition-colors">
                              {invitee.email}
                            </a>
                          ) : <span className="text-ash">—</span>}
                        </td>
                        <td className="px-5 py-4 text-slate-ink whitespace-nowrap">
                          {booking.name}
                        </td>
                        <td className="px-5 py-4">
                          {booking.location?.join_url ? (
                            <a
                              href={booking.location.join_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-brand text-[13px] font-medium hover:underline"
                            >
                              Join
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-ash text-xs">
                              {booking.location?.location ?? 'Not set'}
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer note */}
        <p className="text-xs text-ash text-center mt-8">
          Showing active Calendly bookings · Past bookings shown dimmed · Data refreshes on each page load
        </p>
      </main>
    </div>
  )
}
