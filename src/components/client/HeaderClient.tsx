'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Leaf,
  ShoppingCart,
  Youtube
} from 'lucide-react'

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
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden lg:block bg-gradient-to-r from-green-700 to-emerald-700 text-white text-sm transition-all duration-300 ${
          isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a 
              href="mailto:info@tcbtjaivikkisan.com" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@tcbtjaivikkisan.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@TarachandBelji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube चैनल</span>
            </a>
            <Link
              href="https://products.tcbtjaivikkisan.com"
              className="flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-1 rounded-full hover:bg-yellow-300 transition-colors font-semibold"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  TCBT
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-semibold -mt-1">
                  जैविक किसान
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  pathname={pathname}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-green-700" />
              ) : (
                <Menu className="w-6 h-6 text-green-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-green-100 bg-white overflow-hidden"
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <MobileNavItem
                    key={link.name}
                    link={link}
                    pathname={pathname}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-6 mt-6 border-t border-green-100 space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:info@tcbtjaivikkisan.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@tcbtjaivikkisan.com</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@TarachandBelji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>YouTube चैनल</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

// Desktop Navigation Item
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
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-gray-700 hover:text-green-700 font-semibold transition-colors rounded-lg hover:bg-green-50 flex items-center gap-1"
      >
        {link.name}
        <ShoppingCart className="w-4 h-4" />
      </a>
    )
  }

  if (hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown(link.name)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`px-4 py-2 font-semibold transition-colors rounded-lg hover:bg-green-50 flex items-center gap-1 ${
            isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-green-700'
          }`}
        >
          {link.name}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              activeDropdown === link.name ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-green-100 overflow-hidden"
            >
              {link.dropdown!.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
                >
                  {item.name}
                </Link>
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
      className={`px-4 py-2 font-semibold transition-colors rounded-lg hover:bg-green-50 ${
        isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-green-700'
      }`}
    >
      {link.name}
    </Link>
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
        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors font-semibold"
      >
        {link.name}
        <ShoppingCart className="w-5 h-5" />
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
          className={`w-full flex items-center justify-between px-4 py-3 font-semibold rounded-lg transition-colors ${
            isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
          }`}
        >
          {link.name}
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              activeDropdown === link.name ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-green-50/50 rounded-lg mt-1 ml-4"
            >
              {link.dropdown!.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:text-green-700 transition-colors font-medium"
                >
                  {item.name}
                </Link>
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
      className={`block px-4 py-3 font-semibold rounded-lg transition-colors ${
        isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
      }`}
    >
      {link.name}
    </Link>
  )
}
