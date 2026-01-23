'use client';

import { useState, useRef, useEffect } from 'react';
import { Solution } from '@/lib/data/solutions';
import { AnimatePresence, motion } from 'framer-motion';

interface SolutionDropdownProps {
  solutions: Solution[];
  selectedSolution: Solution;
  onSelect: (solution: Solution) => void;
}

export default function SolutionDropdown({
  solutions,
  selectedSolution,
  onSelect,
}: SolutionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">

      {/* LABEL */}
      <p className="mb-2 text-sm font-semibold text-emerald-700">
        🔽 समाधान बदलें
      </p>

      {/* SELECT BOX */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full
          px-6 py-4
          bg-white
          border-2 border-dashed
          rounded-xl
          flex items-center justify-between
          transition
          ${
            isOpen
              ? 'border-emerald-600 bg-emerald-50'
              : 'border-emerald-300 hover:border-emerald-600'
          }
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
            <i className={`${selectedSolution.icon} text-xl`} />
          </div>

          <div className="text-left">
            <p className="text-xs text-slate-500">
              चुना हुआ समाधान
            </p>
            <p className="text-lg font-semibold text-slate-800">
              {selectedSolution.title}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-sm text-emerald-700 font-medium">
            बदलें
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center"
          >
            <i className="fas fa-chevron-down text-sm" />
          </motion.div>
        </div>
      </button>

      {/* HELPER TEXT */}
      <p className="mt-2 text-sm text-slate-500">
        👆 दूसरा समाधान देखने के लिए यहाँ क्लिक करें
      </p>

      {/* OPTIONS */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="
              absolute z-50 w-full mt-3
              bg-white
              border border-emerald-200
              rounded-xl
              shadow-lg
              overflow-hidden
            "
          >
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => {
                  onSelect(solution);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-6 py-4 flex items-center gap-4 text-left
                  transition
                  border-b last:border-b-0
                  ${
                    selectedSolution.id === solution.id
                      ? 'bg-emerald-50 font-semibold'
                      : 'hover:bg-stone-50'
                  }
                `}
              >
                <i className={`${solution.icon} text-emerald-600`} />
                <span className="text-slate-800">
                  {solution.title}
                </span>

                {selectedSolution.id === solution.id && (
                  <span className="ml-auto text-emerald-600 font-bold">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
