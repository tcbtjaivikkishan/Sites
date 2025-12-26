'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Feature {
  title: string
  description: string
  detail: string
  icon: string
}

export default function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 h-full shadow-md hover:shadow-2xl transition-all border border-green-100 group-hover:border-green-300">
        <div className="text-5xl mb-4">{feature.icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
        <p className="text-gray-600 mb-3">{feature.description}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">{feature.detail}</p>
        <Link 
          href={`/features/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
