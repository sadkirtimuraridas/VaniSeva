'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header(){
  const [open,setOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center text-white font-bold">V</div>
          <div className="font-semibold text-gray-800">Vaniseva</div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/about" className="hover:text-saffron-600">About</Link>
          <Link href="/services" className="hover:text-saffron-600">Services</Link>
          <Link href="/gallery" className="hover:text-saffron-600">Gallery</Link>
          <Link href="/contact" className="hover:text-saffron-600">Contact</Link>
          <Link href="/donate" className="px-4 py-2 rounded-md bg-saffron-500 text-white">Donate</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="px-3 py-2 border rounded-md">Menu</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <Link className="block py-2" href="/about">About</Link>
          <Link className="block py-2" href="/services">Services</Link>
          <Link className="block py-2" href="/gallery">Gallery</Link>
          <Link className="block py-2" href="/contact">Contact</Link>
          <Link className="block py-2 text-saffron-700 font-semibold" href="/donate">Donate</Link>
        </div>
      )}
    </header>
  )
}
