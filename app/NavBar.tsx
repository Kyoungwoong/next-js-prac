import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <Link className="mr-5" href="/">
            Next.js
        </Link>
        <Link href="/users">Users</Link>
        <Link href="/api/auth/signin">Login</Link>
    </div>
  )
}

export default NavBar
