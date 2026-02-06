'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sprout } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '@/store/slices/storiesSlice';
import type { RootState } from '@/store/index';

export default function StoryModal() {
  const dispatch = useDispatch();
  const { isOpen, selectedStory } = useSelector((state: RootState) => state.stories);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <AnimatePresence>
      {isOpen && selectedStory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedStory.title}
              </h2>

              <div className="flex items-start gap-2 mb-6 text-green-700 bg-green-50 p-4 rounded-lg">
                <Sprout className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="font-semibold">{selectedStory.farmer}</p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedStory.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}