import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-saffron-700">Vaniseva</div>
          <p className="text-sm text-gray-600 mt-2">Serving the community with devotion and love.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick links</div>
          <div className="flex flex-col gap-1 text-gray-600">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-gray-600 text-sm">email@vaniseva.org<br/>+91 98765 43210</div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Vaniseva. All rights reserved.</div>
    </footer>
  )
}
