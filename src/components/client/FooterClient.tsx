'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Send } from 'lucide-react'

export default function FooterClient() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscribeStatus('loading')
    
    // Simulate API call - Replace with actual newsletter API
    setTimeout(() => {
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <>
      {/* Newsletter Section */}
      <div className="mt-8">
        <h4 className="text-sm font-bold mb-3 text-yellow-300">न्यूज़लेटर</h4>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="अपना ईमेल दर्ज करें"
              className="w-full px-4 py-2.5 pr-12 bg-white/10 backdrop-blur-sm border border-green-700 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
            <button
              type="submit"
              disabled={subscribeStatus === 'loading'}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-md flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition-all disabled:opacity-50"
            >
              {subscribeStatus === 'loading' ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
          
          <AnimatePresence>
            {subscribeStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs text-yellow-300"
              >
                ✓ सदस्यता सफल! धन्यवाद।
              </motion.p>
            )}
          </AnimatePresence>
        </form>
        <p className="text-xs text-green-300 mt-2">
          नवीनतम अपडेट और टिप्स प्राप्त करें
        </p>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
