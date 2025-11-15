'use client'
export default function ContactForm(){
  return (
    <form className="space-y-4 bg-white p-6 rounded-lg shadow-sm max-w-xl">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" rows="5" placeholder="Your message"></textarea>
      </div>
      <div>
        <button className="px-5 py-2 rounded-md bg-saffron-600 text-white font-medium">Send Message</button>
      </div>
    </form>
  )
}
