'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
  bgColor: string
}

interface AnimatedStatsProps {
  stats: Stat[]
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <div ref={sectionRef}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base shadow-lg">
          Our Impact
        </Badge>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          हमारी सफलता की कहानी
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          2 लाख से अधिक किसानों के जीवन में सकारात्मक बदलाव
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} inView={isInView} />
        ))}
      </div>
    </div>
  )
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: Stat
  index: number
  inView: boolean
}) {
  const [count, setCount] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(cardRef, { once: true })

  useEffect(() => {
    if (!inView || !isCardInView) return

    let startTime: number | null = null
    const duration = 2000
    const startValue = 0
    const endValue = stat.value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(
        easeOutQuart * (endValue - startValue) + startValue
      )

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, isCardInView, stat.value])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isCardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative group"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300">
        {/* Icon */}
        <motion.div
          className={`${stat.bgColor} ${stat.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {stat.icon}
        </motion.div>

        {/* Counter */}
        <div className="text-center">
          <motion.div
            className="text-3xl md:text-5xl font-black text-gray-900 mb-2"
            initial={{ scale: 0 }}
            animate={isCardInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
          >
            {count.toLocaleString('en-IN')}
            {stat.suffix}
          </motion.div>
          <div className="text-sm md:text-base text-gray-600 font-semibold">
            {stat.label}
          </div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent rounded-2xl"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  )
}