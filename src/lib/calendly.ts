const BASE = 'https://api.calendly.com'

function authHeader() {
  const token = process.env.CALENDLY_API_TOKEN
  if (!token) throw new Error('CALENDLY_API_TOKEN is not set in environment variables')
  return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
}

// User profile changes rarely — cache for 1 hour
async function calendlyGetCached(path: string) {
  const res = await fetch(`${BASE}${path}`, {
    headers: authHeader(),
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Calendly ${res.status}: ${body}`)
  }
  return res.json()
}

// Bookings and invitees are live data — always fresh
async function calendlyGetFresh(path: string) {
  const res = await fetch(`${BASE}${path}`, {
    headers: authHeader(),
    cache: 'no-store',
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Calendly ${res.status}: ${body}`)
  }
  return res.json()
}

function uuidFromUri(uri: string) {
  return uri.split('/').pop()!
}

export type Invitee = {
  name: string
  email: string
  status: string
  questions_and_answers: { question: string; answer: string }[]
}

export type Booking = {
  uuid: string
  name: string
  status: string
  start_time: string
  end_time: string
  location?: { type: string; join_url?: string; location?: string }
  invitees: Invitee[]
}

export async function getBookings(): Promise<Booking[]> {
  // User profile is stable — served from cache after first load
  const { resource: user } = await calendlyGetCached('/users/me')

  const params = new URLSearchParams({
    user: user.uri,
    status: 'active',
    count: '50',
    sort: 'start_time:asc',
  })

  // Events list is live — always fresh
  const { collection: events } = await calendlyGetFresh(`/scheduled_events?${params}`)

  // Fetch invitees for each event in parallel — live data
  const bookings = await Promise.all(
    (events as any[]).map(async (ev) => {
      const uuid = uuidFromUri(ev.uri as string)
      const { collection: invitees } = await calendlyGetFresh(
        `/scheduled_events/${uuid}/invitees`
      )
      return { ...ev, uuid, invitees } as Booking
    })
  )

  return bookings
}
