import { Metadata } from 'next';
import SolutionsGrid from '@/components/solutions/SolutionsGrid';
import { solutionsData } from '@/lib/data/solutions';

export const metadata: Metadata = {
  title: 'हमारे समाधान - TCBT Jaivik Kishan',
  description: 'खेती की जटिल बीमारियों और समस्याओं का प्राकृतिक एवं वैज्ञानिक समाधान',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-linear-to-br from-emerald-950 via-green-900 to-teal-950 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up leading-tight drop-shadow-lg">
            हमारे समाधान
          </h1>
        </div>
      </div>
      <SolutionsGrid categories={solutionsData} />
    </main>
  );
}