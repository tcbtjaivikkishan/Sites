'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
}

interface HeroClientProps {
  images: string[]
  stats: Stat[]
}

export default function HeroClient({ images, stats }: HeroClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  // Background Image Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById('stats')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* Background Images with Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-pattern opacity-20" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white mb-4 md:mb-8 text-3xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl"
              >
                TCBT{' '}
                <span className="text-green-400"> पंचमहाभूत</span> कृषि
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/95 text-base md:text-3xl mb-6 md:mb-10 leading-relaxed font-light drop-shadow-lg"
              >
                मूल प्राकृतिक खेती वृक्षायुर्वेद आधारित कृषि विज्ञान
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 md:gap-6"
              >
                <Link
                  href="https://products.tcbtjaivikkisan.com"
                  className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 md:px-10 md:py-5 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 font-bold text-sm md:text-lg"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 py-3 md:px-10 md:py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-bold text-sm md:text-lg"
                >
                  संपर्क करें
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 md:w-8 md:h-12 border-2 md:border-3 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-xl"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 md:w-2 md:h-4 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-24 md:bottom-28 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white w-6 md:w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section
        id="stats"
        ref={statsRef}
        className="bg-gradient-to-br from-green-50 to-emerald-50 py-8 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                index={index}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Animated Stat Card Component
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

  useEffect(() => {
    if (!inView) return

    let startTime: number
    const duration = 2000
    const startValue = 0
    const endValue = stat.value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group text-center bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className={`${stat.color} mb-2 md:mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
        {stat.icon}
      </div>
      <div className="text-2xl md:text-4xl font-black text-gray-800 mb-1 md:mb-2">
        {count.toLocaleString()}
        {stat.suffix || ''}
      </div>
      <div className="text-xs md:text-base text-gray-600 font-semibold">
        {stat.label}
      </div>
    </motion.div>
  )
}
