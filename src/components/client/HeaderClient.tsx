'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface NavLink {
  name: string
  href: string
  external?: boolean
  dropdown?: { name: string; href: string }[]
}

export default function HeaderClient({ navLinks }: { navLinks: NavLink[] }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Top Bar - Contact Info */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 text-white text-sm relative overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-10">
              <motion.div 
                className="flex items-center gap-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PhoneIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>+91 98765 43210</span>
                </motion.a>
                <motion.a 
                  href="mailto:info@tcbtjaivikkisan.com" 
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <EmailIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>info@tcbtjaivikkisan.com</span>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@TarachandBelji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>YouTube चैनल</span>
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://products.tcbtjaivikkisan.com"
                    className="flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-1.5 rounded-full hover:bg-yellow-300 transition-all font-semibold shadow-lg hover:shadow-xl"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span>Shop Now</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header with Glassmorphism */}
      <motion.header
        style={{ 
          opacity: headerOpacity,
        }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-green-100'
            : 'bg-white/70 backdrop-blur-xl'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Animation */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative"
              >
                {/* <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300">
                  <EcoIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div> */}
                {/* Pulse Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl md:text-2xl font-black bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  TCBT
                </motion.span>
                <span className="text-xs md:text-sm text-gray-600 font-semibold -mt-1">
                  जैविक किसान
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavItem
                    link={link}
                    pathname={pathname}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-green-50 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CloseIcon className="w-6 h-6 text-green-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon className="w-6 h-6 text-green-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu with Slide Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ top: isScrolled ? '64px' : '108px' }}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-screen w-80 bg-white shadow-2xl lg:hidden overflow-y-auto"
                style={{ top: isScrolled ? '64px' : '108px' }}
              >
                <div className="p-6 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <MobileNavItem
                        link={link}
                        pathname={pathname}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Mobile Contact Info */}
                  <motion.div 
                    className="pt-6 mt-6 border-t border-green-100 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors p-3 rounded-lg hover:bg-green-50"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a
                      href="mailto:info@tcbtjaivikkisan.com"
                      className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors p-3 rounded-lg hover:bg-green-50"
                    >
                      <EmailIcon className="w-5 h-5" />
                      <span>info@tcbtjaivikkisan.com</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@TarachandBelji"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-red-600 hover:text-red-700 transition-colors p-3 rounded-lg hover:bg-red-50"
                    >
                      <YouTubeIcon className="w-5 h-5" />
                      <span>YouTube चैनल</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Custom CSS for shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  )
}

// Desktop Navigation Item with Hover Effects
function NavItem({
  link,
  pathname,
  activeDropdown,
  setActiveDropdown,
}: {
  link: NavLink
  pathname: string
  activeDropdown: string | null
  setActiveDropdown: (name: string | null) => void
}) {
  const isActive = pathname === link.href
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (link.external) {
    return (
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-gray-700 hover:text-green-700 font-semibold transition-colors rounded-xl hover:bg-green-50 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {link.name}
        <ShoppingCartIcon className="w-4 h-4" />
      </motion.a>
    )
  }

  if (hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown(link.name)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <motion.button
          className={`px-4 py-2 font-semibold transition-all rounded-xl hover:bg-green-50 flex items-center gap-1 ${
            isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-green-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.name}
          <motion.div
            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExpandMoreIcon className="w-4 h-4" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-100 overflow-hidden"
            >
              {link.dropdown!.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all font-medium border-b border-green-50 last:border-0"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={link.href}
        className={`px-4 py-2 font-semibold transition-all rounded-xl hover:bg-green-50 block ${
          isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-green-700'
        }`}
      >
        {link.name}
      </Link>
    </motion.div>
  )
}

// Mobile Navigation Item
function MobileNavItem({
  link,
  pathname,
  activeDropdown,
  setActiveDropdown,
}: {
  link: NavLink
  pathname: string
  activeDropdown: string | null
  setActiveDropdown: (name: string | null) => void
}) {
  const isActive = pathname === link.href
  const hasDropdown = link.dropdown && link.dropdown.length > 0

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-all font-semibold"
      >
        {link.name}
        <ShoppingCartIcon className="w-5 h-5" />
      </a>
    )
  }

  if (hasDropdown) {
    return (
      <div>
        <button
          onClick={() =>
            setActiveDropdown(activeDropdown === link.name ? null : link.name)
          }
          className={`w-full flex items-center justify-between px-4 py-3 font-semibold rounded-xl transition-all ${
            isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
          }`}
        >
          {link.name}
          <motion.div
            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExpandMoreIcon className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-green-50/50 rounded-xl mt-2 ml-4"
            >
              {link.dropdown!.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2.5 text-gray-700 hover:text-green-700 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <Link
      href={link.href}
      className={`block px-4 py-3 font-semibold rounded-xl transition-all ${
        isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
      }`}
    >
      {link.name}
    </Link>
  )
}
