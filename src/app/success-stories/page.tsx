import { successStoriesData } from '@/lib/data/Success_Stories';
import { Sprout, TrendingUp, Award } from 'lucide-react';
import StoryCard from '@/components/success-stories/StoryCard';
import StoryModal from '@/components/success-stories/StoryModal';
import AnimatedSection from '@/components/success-stories/AnimatedSection';

export const metadata = {
  title: 'सफलता की कहानियाँ | TCBT JAIVIK KISHAN',
  description: 'TCBT प्राकृतिक खेती से किसानों की सफलता की प्रेरणादायक कहानियाँ। देखें कैसे हजारों किसानों ने अपनी आय बढ़ाई और जैविक खेती में सफलता पाई।',
  keywords: 'TCBT, जैविक खेती, प्राकृतिक खेती, किसान सफलता, कृषि, भारतीय किसान',
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section - Server Rendered */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection delay={0}>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <Sprout className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                सफलता की कहानियाँ
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                TCBT प्राकृतिक खेती से किसानों की जीवन बदलने वाली उपलब्धियाँ
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories Grid - Server Rendered Structure */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Server Rendered */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            क्या आप भी सफलता की कहानी बनना चाहते हैं?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            TCBT प्राकृतिक खेती तकनीक के साथ अपनी खेती को बदलें
          </p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2">
            <span>अभी शुरुआत करें</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Modal Container - Client Component */}
      <StoryModal />
    </div>
  );
}