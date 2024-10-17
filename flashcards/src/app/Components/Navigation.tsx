import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
        <h2>Flashcards System</h2>
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/cards'}>Cards</Link>
    </nav>
  )
}
