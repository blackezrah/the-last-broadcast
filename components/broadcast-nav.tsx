"use client"

import Link from 'next/link'

export function BroadcastNav() {
  return (
    <nav
      className="broadcastReturnNav"
      aria-label="Broadcast navigation"
    >
      <Link href="/" className="broadcastReturnNavLink">
        ← ARCHIVE
      </Link>
    </nav>
  )
}
