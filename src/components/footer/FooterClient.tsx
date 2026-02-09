'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const FooterClient = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl hover:shadow-2xl flex items-center gap-2 font-semibold text-sm transition-all"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FooterClient;