'use client';

import { SolutionCategory } from '@/lib/data/solutions';
import CategorySection from './CategorySection';

interface SolutionsGridProps {
  categories: SolutionCategory[];
}

export default function SolutionsGrid({ categories }: SolutionsGridProps) {
  return (
    <section
      id="solutions"
      className="py-14 md:py-24 bg-stone-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-20 md:space-y-28">
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              category={category}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
