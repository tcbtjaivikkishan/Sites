import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import { Sprout, MessageCircle, Sparkles } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              AI-संचालित कृषि सहायक
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            जैविक खेती का
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600 mt-2">
              भरोसेमंद साथी
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            अपनी फसलों, मिट्टी और जैविक खेती से जुड़े सभी सवालों के जवाब
            पाएं। हमारा AI सहायक आपकी मदद के लिए हमेशा तैयार है।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Sprout className="w-6 h-6" />}
            title="फसल सलाह"
            description="बुवाई से कटाई तक विशेषज्ञ मार्गदर्शन"
          />
          <FeatureCard
            icon={<MessageCircle className="w-6 h-6" />}
            title="तुरंत उत्तर"
            description="24/7 आपके सवालों का समाधान"
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="जैविक तरीके"
            description="प्रमाणित जैविक कृषि विधियाँ"
          />
        </div>

        {/* Main Chat Interface - Desktop */}
        <div className="hidden lg:block">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <ChatbotWidget isFullPage={true} />
          </div>
        </div>

        {/* Mobile/Tablet - Floating Widget */}
        <div className="lg:hidden">
          <ChatbotWidget isFullPage={false} />
        </div>

        {/* CTA Section for mobile/tablet when widget is minimized */}
        <div className="lg:hidden mt-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              अभी पूछें
            </h3>
            <p className="text-gray-600 text-sm">
              नीचे दाएं कोने में चैट बटन पर क्लिक करें
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}