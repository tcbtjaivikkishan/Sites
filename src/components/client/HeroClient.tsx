'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ShoppingCartIcon } from 'lucide-react'

// Lazy load Three.js scene
const Scene3D = dynamic(() => import('@/components/three/Scene3D'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20" />,
})

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const statsInView = useInView(statsRef, {
    amount: 0.4,
    once: true,
  })

  const { scrollY } = useScroll()
 
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])
  
  // Spring animations for smooth motion
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(useTransform(scrollY, [0, 500], [0, 100]), springConfig)

  // Background Image Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x: x - 0.5, y: y - 0.5 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById('stats')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Images with Slideshow & Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              }}
            >
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-pattern opacity-10" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Three.js 3D Scene Overlay with Parallax */}
        <motion.div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ y: y1 }}
        >
          <Scene3D />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content with Parallax */}
        <motion.div 
          className="relative z-10 h-full flex items-center"
          style={{ opacity, y: y2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="max-w-4xl">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <Badge 
                  variant="secondary" 
                  className="bg-green-500/20 backdrop-blur-md text-green-100 border-2 border-green-400/40 px-6 py-3 text-base shadow-2xl hover:scale-105 transition-transform cursor-pointer"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block mr-2"
                  >
                    🌱
                  </motion.span>
                  भारतीय परंपरा और आधुनिक विज्ञान का संगम
                </Badge>
              </motion.div>

              {/* Main Heading with Stagger Animation */}
              <div className="overflow-hidden mb-6 md:mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-white mb-0 text-4xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 8px 40px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <span className="inline-block">TCBT</span>{' '}
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% auto',
                    }}
                  >
                    पंचमहाभूत
                  </motion.span>{' '}
                  <span className="inline-block">कृषि</span>
                </motion.h1>
              </div>

              {/* Subtitle with Typewriter Effect */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/95 text-lg md:text-3xl lg:text-4xl mb-8 md:mb-12 leading-relaxed font-light"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                मूल प्राकृतिक खेती वृक्षायुर्वेद आधारित कृषि विज्ञान
              </motion.p>

              {/* Feature Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-3 mb-8 md:mb-10"
              >
                {['100% जैविक', 'रसायन मुक्त', '35% अधिक उत्पादन', '2 लाख+ किसान'].map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold shadow-lg"
                  >
                    ✓ {tag}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons with Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 md:gap-6"
              >
                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="group relative bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 hover:from-green-700 hover:via-emerald-600 hover:to-green-700 text-white px-8 md:px-12 py-6 md:py-8 text-base md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <Link href="https://products.tcbtjaivikkisan.com" className="relative z-10">
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-200%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        <ShoppingCartIcon className="w-5 h-5 md:w-6 md:h-6" />
                        Explore Our Products
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowForwardIcon className="w-5 h-5 md:w-6 md:h-6" />
                        </motion.div>
                      </span>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 md:px-12 py-6 md:py-8 text-base md:text-xl font-bold rounded-2xl shadow-xl"
                  >
                    <Link href="/contact">
                      <ContactMailIcon className="mr-3 w-5 h-5 md:w-6 md:h-6" />
                      संपर्क करें
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/10 px-6 md:px-8 py-6 md:py-8 text-base md:text-xl font-bold rounded-2xl"
                  >
                    <a href="https://www.youtube.com/@TarachandBelji" target="_blank" rel="noopener noreferrer">
                      <PlayCircleOutlineIcon className="mr-2 w-6 h-6 md:w-7 md:h-7" />
                      Watch Video
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 md:mt-12 flex flex-wrap items-center gap-6 text-white/80 text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-white" />
                    ))}
                  </div>
                  <span className="font-semibold">2 लाख+ खुश किसान</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-semibold">4.9/5 रेटिंग</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={scrollToNext}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-white/80 text-sm font-semibold">Scroll Down</span>
            <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-xl">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-4 bg-white rounded-full mt-2"
              />
            </div>
            <KeyboardArrowDownIcon className="text-white/80 w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Image Indicators with Animation */}
        <div className="absolute bottom-28 md:bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? 'bg-white w-12 shadow-lg shadow-white/50'
                  : 'bg-white/50 w-3 hover:bg-white/75'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Side Social Links */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4"
        >
          {[
            { icon: '📘', href: '#', label: 'Facebook' },
            { icon: '📸', href: '#', label: 'Instagram' },
            { icon: '🎥', href: 'https://www.youtube.com/@TarachandBelji', label: 'YouTube' },
            { icon: '💬', href: 'https://wa.me/919876543210', label: 'WhatsApp' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-2xl hover:bg-white/20 transition-all shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
          <div className="w-0.5 h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto mt-2" />
        </motion.div>
      </div>

      {/* Stats Section with Glassmorphism */}
      <section
        id="stats"
        ref={statsRef}
        className="relative py-12 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">Our Impact</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              हमारी सफलता की कहानी
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              2 लाख से अधिक किसानों के जीवन में सकारात्मक बदलाव
            </p>
          </motion.div>

          {/* Stats Grid */}
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

// Enhanced Animated Stat Card Component
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

  const isCardInView = useInView(cardRef, {
    once: true,
  })

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
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
      className="relative text-center bg-white/80 rounded-2xl p-6"
    >
      <div className="text-4xl font-black">
        {count.toLocaleString('en-IN')}
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-600 font-bold">{stat.label}</div>
    </motion.div>
  )
}

