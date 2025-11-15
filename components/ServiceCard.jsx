'use client'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, desc, icon }){
  return (
    <motion.div whileHover={{ y: -6, scale:1.02 }} transition={{ type: 'spring', stiffness: 300 }} className="p-6 rounded-xl shadow-sm border border-saffron-50">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  )
}
