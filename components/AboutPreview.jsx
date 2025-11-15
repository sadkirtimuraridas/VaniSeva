import Link from 'next/link'
export default function AboutPreview(){
  return (
    <section className="mt-16 flex flex-col lg:flex-row gap-8 items-center">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-saffron-700 mb-3">Our Mission</h3>
        <p className="text-gray-700">Dedicated to serving the community through devotional activities, education, and prasadam distribution.</p>
        <div className="mt-4">
          <Link href="/about" className="text-saffron-700 font-semibold">Read more →</Link>
        </div>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
        <img src="/mission-placeholder.jpg" alt="mission" className="w-full h-56 object-cover" />
      </div>
    </section>
  )
}
