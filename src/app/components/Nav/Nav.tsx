'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Nav() {
  const session = useSession()

  return (
    <nav className="flex justify-between">
      <div className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/todos/add">Add</Link>
      </div>
      <div className="flex gap-2">
        {session.data ? (
          <button onClick={() => signOut()}>Logout</button>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </nav>
  )
}
