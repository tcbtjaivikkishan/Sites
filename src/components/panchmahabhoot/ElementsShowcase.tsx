'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Solution, colorSchemes } from '@/lib/data/fiveElements';
import { X, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Mountain, Cloud, Wind, Flame, Droplet } from 'lucide-react';

interface ElementsShowcaseProps {
  elements: Solution[];
}

const iconMap: Record<
  'bhumi-tatva' | 'gagan-tatva' | 'vayu-tatva' | 'agnin-tatva' | 'jal-tatva',
  LucideIcon
> = {
  'bhumi-tatva': Mountain,
  'gagan-tatva': Cloud,
  'vayu-tatva': Wind,
  'agnin-tatva': Flame,
  'jal-tatva': Droplet,
};

export default function ElementsShowcase({ elements }: ElementsShowcaseProps) {
  const [selectedElement, setSelectedElement] = useState<Solution | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedElement(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {/* Header */}
      <div className="text-center my-16 sm:mb-20 relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10" />

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-700 mb-6"
        >
          तत्वों का विवरण
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
        >
          प्रत्येक तत्व की विशेषताएं और कृषि में उनका महत्व
        </motion.p>

        {/* Decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-full"
        />
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
      >
        {elements.map((element, index) => {
          const scheme = colorSchemes[element.colorScheme];
          const Icon = iconMap[element.id as keyof typeof iconMap];

          return (
            <motion.div
              key={element.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => setSelectedElement(element)}
            >
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-stone-100 hover:border-green-400 h-full">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-stone-50/50 pointer-events-none" />
                
                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${scheme.gradient} opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150`} />

                {/* Header with pattern */}
                <div className={`relative p-8 pb-6 bg-gradient-to-br ${scheme.gradient} overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="2" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                    </svg>
                  </div>

                  <div className="relative flex justify-between items-start">
                    <div
                      className={`flex items-center justify-center w-20 h-20 rounded-2xl ${scheme.bg} border-4 border-white/80 shadow-2xl backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      {Icon && (
                        <Icon className="w-10 h-10 text-stone-900 drop-shadow-lg" />
                      )}
                    </div>
                    
                    {/* Floating badge */}
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      <span className="text-xs font-semibold text-white">तत्व</span>
                    </div>
                  </div>

                  {/* Decorative wave */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-4 fill-white" viewBox="0 0 1200 40" preserveAspectRatio="none">
                      <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${scheme.text} mb-2 leading-tight`}>
                      {element.title}
                    </h3>
                    {element.subtitle && (
                      <p className="text-sm sm:text-base text-stone-600 font-medium leading-relaxed">
                        {element.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description card with gradient border */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${scheme.gradient} rounded-xl blur-sm opacity-20`} />
                    <div className="relative bg-gradient-to-br from-stone-50 to-white rounded-xl p-5 border-2 border-stone-100">
                      <div className={`absolute top-2 left-2 w-2 h-2 rounded-full ${scheme.dot} animate-pulse`} />
                      <p className="text-sm sm:text-base text-stone-700 line-clamp-3 leading-relaxed pl-4">
                        {element.products[0]}
                      </p>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-stone-100 group-hover:border-green-200 transition-colors">
                    <span className={`text-sm font-bold ${scheme.text} tracking-wide`}>
                      विस्तार से पढ़ें
                    </span>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${scheme.bg} transition-transform duration-300 group-hover:translate-x-1`}>
                      <ArrowRight className={`w-5 h-5 ${scheme.text}`} />
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-green-400/0 via-green-400/0 to-green-400/0 group-hover:from-green-400/5 group-hover:via-green-400/5 group-hover:to-green-400/0 transition-all duration-500 pointer-events-none rounded-3xl`} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedElement && (() => {
          const scheme = colorSchemes[selectedElement.colorScheme];
          const Icon = iconMap[selectedElement.id as keyof typeof iconMap];

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedElement(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border-4 border-green-100"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`relative p-10 bg-gradient-to-br ${scheme.gradient} overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="modal-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                          <circle cx="25" cy="25" r="3" fill="white" />
                          <circle cx="0" cy="0" r="2" fill="white" opacity="0.5" />
                          <circle cx="50" cy="50" r="2" fill="white" opacity="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#modal-pattern)" />
                    </svg>
                  </div>

                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedElement(null)}
                    className="absolute top-6 right-6 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all border-2 border-white/50 z-10"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>

                  <div className="relative flex items-center gap-8">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className={`w-28 h-28 rounded-3xl ${scheme.bg} border-4 border-white/80 flex items-center justify-center shadow-2xl backdrop-blur-sm`}
                    >
                      {Icon && (
                        <Icon className="w-14 h-14 text-stone-900 drop-shadow-lg" />
                      )}
                    </motion.div>

                    <div className="flex-1 text-white">
                      <motion.h2 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-lg"
                      >
                        {selectedElement.title}
                      </motion.h2>
                      {selectedElement.subtitle && (
                        <motion.p 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-lg sm:text-xl text-white/95 leading-relaxed"
                        >
                          {selectedElement.subtitle}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Wave divider */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-6 fill-stone-50" viewBox="0 0 1200 40" preserveAspectRatio="none">
                      <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" />
                    </svg>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 sm:p-10 overflow-y-auto max-h-[60vh] bg-gradient-to-b from-stone-50 to-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedElement.products.map((item, idx) => {
                      const isHeading = item.endsWith(':');

                      if (isHeading) {
                        return (
                          <div key={idx} className="relative mt-10 mb-6 first:mt-0">
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${scheme.gradient} rounded-full`} />
                            <h3 className={`text-2xl sm:text-3xl font-bold ${scheme.text} pl-6 leading-tight`}>
                              {item}
                            </h3>
                          </div>
                        );
                      }

                      return (
                        <motion.div 
                          key={idx} 
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + (idx * 0.05) }}
                          className="flex gap-4 mb-4 group"
                        >
                          <div className="flex-shrink-0 mt-2">
                            <div className={`w-3 h-3 rounded-full ${scheme.dot} shadow-lg transition-transform group-hover:scale-125`} />
                          </div>
                          <p className="text-base sm:text-lg text-stone-700 leading-relaxed flex-1">
                            {item}
                          </p>
                        </motion.div>
                      );
                    })}

                    {selectedElement.image && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10"
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-100">
                          <img
                            src={selectedElement.image}
                            alt={selectedElement.title}
                            className="w-full"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none`} />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </>
  );
}