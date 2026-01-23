'use client';

import { useState } from 'react';
import { SolutionCategory } from '@/lib/data/solutions';
import SolutionDropdown from './SolutionDropdown';
import SolutionCard from './SolutionCard';

interface CategorySectionProps {
  category: SolutionCategory;
  categoryIndex: number;
}

export default function CategorySection({
  category,
  categoryIndex,
}: CategorySectionProps) {
  const [selectedSolution, setSelectedSolution] = useState(
    category.solutions[0]
  );

  const isSoilManagement = category.categoryName === 'मृदा प्रबंधन';

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700">
          {category.categoryName}
        </h2>

        <div className="mx-auto mt-3 h-1 w-24 bg-amber-500 rounded-full" />

        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          {isSoilManagement
            ? 'मृदा स्वास्थ्य और उर्वरता के लिए प्राकृतिक समाधान'
            : 'फसल रोगों का वैज्ञानिक और प्राकृतिक उपचार'}
        </p>
      </div>

      {/* Dropdown */}
      <SolutionDropdown
        solutions={category.solutions}
        selectedSolution={selectedSolution}
        onSelect={setSelectedSolution}
      />

      {/* Card */}
      <SolutionCard
        solution={selectedSolution}
        type={isSoilManagement ? 'soil' : 'disease'}
      />
    </div>
  );
}
