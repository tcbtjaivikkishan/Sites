import { solutionsData } from '@/lib/data/fiveElements';
import { Metadata } from 'next';
import ElementsShowcase from '@/components/panchmahabhoot/ElementsShowcase';

export const metadata: Metadata = {
  title: 'पंच महाभूत - TCBT वृक्षायुर्वेद विज्ञान',
  description: 'प्राकृतिक खेती में पंच महाभूत का संतुलन - भूमि, गगन, वायु, अग्नि और जल तत्व',
};

export default function FiveElementsPage() {
  const category = solutionsData[0];
  const elements = category.solutions;

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#f5f1e8] via-white to-green-50">
        {/* Subtle agricultural pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative leaf elements */}
        <div className="absolute top-20 right-10 w-32 h-32 opacity-[0.03]">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C30 10 20 30 20 50C20 70 30 90 50 90C50 70 50 50 50 30C50 20 50 10 50 10Z" fill="#166534"/>
            <path d="M50 10C70 10 80 30 80 50C80 70 70 90 50 90C50 70 50 50 50 30C50 20 50 10 50 10Z" fill="#16a34a"/>
          </svg>
        </div>

        <div className="absolute bottom-20 left-10 w-40 h-40 opacity-[0.03]">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C30 10 20 30 20 50C20 70 30 90 50 90C50 70 50 50 50 30C50 20 50 10 50 10Z" fill="#166534"/>
            <path d="M50 10C70 10 80 30 80 50C80 70 70 90 50 90C50 70 50 50 50 30C50 20 50 10 50 10Z" fill="#16a34a"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-800 text-white text-sm font-medium shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              प्राकृतिक कृषि विज्ञान
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight tracking-tight">
              {category.categoryName}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto font-light">
              प्रकृति के पंच महाभूत का संतुलन - स्वस्थ फसलों का आधार
            </p>

            {/* Decorative divider */}
            <div className="mt-12 flex justify-center items-center gap-3">
              <div className="h-px w-12 bg-linear-to-r from-transparent via-green-600 to-transparent" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-700" />
                <div className="w-2 h-2 rounded-full bg-[#c4a574]" />
                <div className="w-2 h-2 rounded-full bg-stone-800" />
              </div>
              <div className="h-px w-12 bg-linear-to-r from-transparent via-green-600 to-transparent" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 sm:h-20 md:h-24 fill-stone-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </section>

      {/* Elements Showcase */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
        <ElementsShowcase elements={elements} />
      </section>
    </main>
  );
}