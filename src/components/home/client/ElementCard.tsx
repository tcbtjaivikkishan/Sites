'use client'

import { motion } from 'framer-motion'

interface Element {
  icon: string
  title: string
  description: string
  color: string
}

export default function ElementCard({ element, index }: { element: Element; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      <div className={`bg-linear-to-br ${element.color} rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all`}>
        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
          {element.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          {element.title}
        </h3>
        <p className="text-white/90 leading-relaxed">
          {element.description}
        </p>
      </div>
    </motion.div>
  )
}
