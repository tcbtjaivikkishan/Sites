'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/slices/storiesSlice';
import type { Variants } from 'framer-motion';

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  farmer: string;
  image: string;
}

interface StoryCardProps {
  story: SuccessStory;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // instead of 'easeOut'
        delay: index * 0.1,
      },
    },
  };


  const handleReadMore = () => {
    dispatch(openModal(story));
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-green-100">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-green-50">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {story.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-4 flex-1">
            {story.description}
          </p>

          <div className="mt-auto">
            <div className="flex items-start gap-2 mb-4 text-sm text-green-700 bg-green-50 p-3 rounded-lg">
              <Sprout className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="font-medium">{story.farmer}</p>
            </div>

            <button
              onClick={handleReadMore}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
            >
              <span>पूरी कहानी पढ़ें</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}