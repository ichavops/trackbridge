'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Server action (not a plain route handler) so Next.js enforces its built-in
// same-origin / Action-ID check, closing the cross-site logout-CSRF vector.
export async function logoutAction() {
  const cookieStore = await cookies()
  // Must match the path the cookie was set with (/admin) to actually clear it.
  cookieStore.delete({ name: 'admin-session', path: '/admin' })
  redirect('/admin/login')
}
