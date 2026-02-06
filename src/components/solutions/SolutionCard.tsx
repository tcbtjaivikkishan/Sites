'use client';

import Image from 'next/image';
import { Solution } from '@/lib/data/solutions';

interface SolutionCardProps {
  solution: Solution;
  type: 'soil' | 'disease';
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-emerald-600 px-6 md:px-8 py-5 flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <i className={`${solution.icon} text-white text-2xl`} />
          </div>

          <div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              {solution.title}
            </h3>

            {solution.subtitle && (
              <p className="text-white/90 text-sm md:text-base">
                {solution.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4">
              अनुशंसित उत्पाद
            </h4>

            <div className="space-y-3">
              {solution.products.map((product, i) => (
                <div
                  key={i}
                  className="
                    bg-white
                    border border-stone-200
                    rounded-lg
                    px-4 py-3
                    flex items-center gap-3
                    hover:border-emerald-400
                    transition
                  "
                >
                  <i className="fas fa-leaf text-emerald-600" />
                  <span className="text-slate-800 font-medium">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-stone-200">
            <Image
              src={
                solution.image || ''
              }
              alt={solution.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
