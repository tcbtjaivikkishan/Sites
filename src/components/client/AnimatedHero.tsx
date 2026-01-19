'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import YouTubeIcon from '@mui/icons-material/YouTube'

const ThreeJsBackground = dynamic(
  () => import('@/components/client/ThreeJsBackground'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/10" />
    ),
  }
)

interface Props {
  images: string[]
}

export default function AnimatedHero({ images }: Props) {
  const [current, setCurrent] = useState(0)

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // slideshow
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length)
    }, 5000)

    return () => clearInterval(id)
  }, [images.length])

  const scrollToNext = () => {
    document.getElementById('next-section')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative h-[600px] lg:h-screen overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[current]})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 3D background */}
      <div className="hidden lg:block absolute inset-0 opacity-30 pointer-events-none">
        <ThreeJsBackground />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6"
        >
          स्वागत है
          <br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            TCBT जैविक किसान
          </span>
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToNext}
            className="bg-green-600 hover:bg-green-700 rounded-full px-8 py-6 text-lg font-bold"
          >
            अभी शुरू करें
            <ArrowForwardIcon className="ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/40 rounded-full px-8 py-6 text-lg"
            asChild
          >
            <a
              href="https://www.youtube.com/@TarachandBelji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="mr-2" />
              YouTube देखें
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
