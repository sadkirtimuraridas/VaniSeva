'use client'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative bg-gradient-to-b from-saffron-50 to-white">
      <div className="container py-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-saffron-700 leading-tight">Serve, Share & Spread Compassion</h1>
          <p className="mt-4 text-lg text-gray-700">A modern saffron-themed template for devotional organisations — hero, services, gallery, donations, contact.</p>

          <div className="mt-8 flex gap-4">
            <a href="/donate" className="px-6 py-3 rounded-md bg-saffron-600 text-white font-medium shadow">Donate</a>
            <a href="/services" className="px-6 py-3 rounded-md border border-saffron-300 text-saffron-700">Our Seva</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img alt="temple" src="/temple-placeholder.jpg" className="w-full h-64 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
