import HeroSection from "@/components/agnihotra/HeaderSection";
import ScrollReveal from "@/components/agnihotra/Scrollreveal";
import AgnihotraSteps from "@/components/agnihotra/AgnihotraSteps";
import MantraCards from "@/components/agnihotra/Mantracards";

export default function AgnihotraPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-green-50 to-yellow-50">
      {/* HERO SECTION */}
      <HeroSection />
      
      {/* Decorative Wave Divider */}
      <div className="w-full h-16 bg-gradient-to-b from-transparent to-green-50/30">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path d="M0,64 C300,96 600,32 900,64 C1050,80 1200,64 1200,64 L1200,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.3"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="50%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#10b981"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* अग्निहोत्र क्या है - Enhanced with Agriculture Theme */}
        <ScrollReveal direction="up">
          <div className="relative">
            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-linear-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden">
              {/* Top Accent Bar */}
              <div className="h-2 bg-linear-to-r from-green-500 via-amber-500 to-orange-500"></div>
              
              {/* Decorative Pattern Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <pattern id="agriPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="#10b981"/>
                    <path d="M20,10 L20,30 M10,20 L30,20" stroke="#f59e0b" strokeWidth="1"/>
                  </pattern>
                  <rect width="200" height="200" fill="url(#agriPattern)"/>
                </svg>
              </div>
              
              <div className="relative p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                    <span className="text-3xl transform -rotate-12">🔥</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-green-700 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                    अग्निहोत्र क्या है
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-medium">
                    ठीक सूर्योदय- सूर्यास्त के समय गाय के गोबर के कण्डों से जले हुए लाल
                    अलाव में दो चुटकी चावल और घी से मिश्रित दाे आहुति देने की प्रक्रिया
                    का नाम अग्निहोत्र है। आहुति एक निश्चित आकार के मिट्टी या तांबे के
                    पात्र में देशी गाय के गोबर के बने कण्डों की अग्नि में निश्चित
                    मंत्रों के उच्चारण के साथ आहुति दिया जाता है।
                  </p>
                </div>
                
                {/* Decorative Bottom Element */}
                <div className="mt-8 flex justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* IMAGE GALLERY - Enhanced Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-green-400/10 via-amber-400/10 to-orange-400/10 rounded-3xl blur-3xl"></div>
          <ScrollReveal direction="zoom">
            <div className="relative bg-linear-to-br from-white to-green-50/50 rounded-3xl shadow-2xl border-2 border-green-200 p-6 sm:p-8">
              <AgnihotraSteps />
            </div>
          </ScrollReveal>
        </div>

        {/* BLOCK 2 - Enhanced Agriculture Card */}
        <ScrollReveal direction="left">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl border-2 border-amber-300 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="h-1.5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-500"></div>
              
              {/* Field Pattern Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 30px, #10b981 30px, #10b981 31px),
                                   repeating-linear-gradient(0deg, transparent, transparent 30px, #10b981 30px, #10b981 31px)`
                }}></div>
              </div>
              
              <div className="relative p-8 sm:p-12">
                <div className="items-start gap-4 mb-6">
                  <div className="">
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800">
                      सबसे पहले किसान भाई RAH FPO मोबाइल एप डाउनलोड करके ऑनलाइन अग्निहोत्र
                      किट आर्डर करें। अग्निहोत्र किट में आवश्यक सभी सामग्री कंडे, घी,
                      चावत् कपूर, माचीस, पुस्तकें और अग्नहोत्र पात्र प्राप्त होगा। पात्र
                      में दो समय अग्निहोत्र करने के लिए कंडे होंगे, आगे निरंतर अग्निहोत्र
                      करने के लिए अतिरिक्त कंडों के बैग की आर्डर कर ले या अपने घर पर
                      भारतीय स्वस्थ्य गाय के गोबर के कंडे बनाने की प्रक्रिया शुरू कर दें।
                      अग्निहोत्र का निश्चित समय प्राप्त करने के लिए अपने मोबाइल में माधव
                      आश्रम अग्निहहोत्र एप डाउनलोड कर लें और गुगन लोकेशन ऑन करके अपने खेत
                      या घर का (जहाँ अग्निहोत्र करना है) लोकेशन सेट करे लें। एप की सेटिंन
                      में जाकर स्क्रीन डिस्पले कॉनडाउन ऑन कर लें, सूर्योदय, सूर्यास्त में
                      अग्निहोत्र समय के 15 मिनट पूर्व कंडों को आयताकार तोड़कर आड़ा तिरछा
                      जमाना है। एक टुकड़ा चौकोर तोड़कर अग्निहोत्र पात्र की पेंदी में जमा
                      दें। बाकि कंडों को निम्न तरीके से जमा लें।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* BLOCK 3 - Enhanced Process Card */}
        <ScrollReveal direction="right">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl shadow-xl border-2 border-green-200 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="h-1.5 bg-linear-to-r from-green-500 via-emerald-500 to-green-500"></div>
              
              <div className="p-8 sm:p-12 space-y-6">
                <div className=" items-start gap-4">
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-800 flex-1">
                    अग्निहोत्र का निश्चित समय प्राप्त करने के लिए अपने मोबाइल में माधव
                    आश्रम अग्निहहोत्र एप डाउनलोड कर लें और गुगन लोके शन ऑन करके अपने खेत
                    या घर का (जहाँ अग्निहोत्र करना है) लोके शन सेट करे लें। एप की सेटिंग
                    में जाकर स्क्रीन डिस्पले काॅ नडाउन आॅन कर लें, सूर्योदय, सूर्यास्त
                    में अग्निहोत्र समय के 15 मिनट पूर्व कं डों को आयताकार तोड़कर आड़ा-
                    तिरछा जमाना है।
                  </p>
                </div>

                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                  <div className=" items-start gap-4">
                    <p className="text-lg leading-relaxed text-gray-800 flex-1">
                      एक टुकड़ा चौकोर तोड़कर अग्निहोत्र पात्र की पेंदी में जमा दें। बाकि कं
                      डों को निम्न तरीके से जमा लें। अब घी की बाती या कपूर या गुगल के
                      टुकड़े को जलाकर नीचे पेंदी में डाल दें ऊपर कं डे का एक टुकड़ा रखकर ढक
                      दें ताकि लाल अलाव बनने तक कं डे जल जाएं ।
                    </p>
                  </div>
                </div>

                <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-500">
                  <div className=" items-start gap-4">
                    <p className="text-lg leading-relaxed text-gray-800 flex-1">
                      3 मिनट पहले दो चुटकी चावल और एक बूंद घी बाएं हथेली में रकखर और
                      मिलाकर दो भाग बना लें। ऊपर का कं डे का ढक्कन हटाकर आचमनी से
                      अग्निहोत्र का मुख चौड़ा कर लें अब जसे ै ही अग्निहोत्र का समय होता है
                      वसे ह ै ी सूर्योदय में सूर्योदय का मंत्र और सूर्यास्त में सूर्यास्त
                      का मंत्र बोलते हुए ये दोनों आहुति अग्निहोत्र पात्र में डालना है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* MANTRAS - Interactive Cards */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-orange-400/10 via-amber-400/10 to-green-400/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <MantraCards />
          </div>
        </div>

        {/* Meditation Card - Enhanced */}
        <ScrollReveal direction="up">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-indigo-500 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
            <div className="relative bg-linear-to-br from-purple-50 via-white to-indigo-50 rounded-3xl shadow-xl border-2 border-purple-200 overflow-hidden">
              <div className="h-1.5 bg-linear-to-r from-purple-500 via-indigo-500 to-purple-500"></div>
              
              <div className="p-8 sm:p-12">
                <div className="flex items-start gap-4">
                    <h3 className="text-2xl font-bold bg-linear-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent mb-4">
                      ध्यान और भस्म संरक्षण
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-800">
                      आहुति देने के बाद कमर सीधी रखते हुऐ अग्नि पर ध्यान के न्द्रित करें
                      जब तक आहुति जल रही है, तब तक शांत चित्त बठें रहें। अग्निहोत्र पात्र
                      को अगले 12 घंटे तक के ै लिए वहीं यथावत रहने दें, हिलाएं नहीं। अगले
                      अग्निहोत्र के पूर्व भस्म को किसी काँच या मटके के पात्र में रख लें।
                      प्राप्त भस्म से ऊर्जा जल बनाकर स्वयं सुबह शाम एक-एक गिलास पीएं और
                      200 लीटर ऊर्जा जल को खेत की भूमि मंे सिंचाई जल के साथ डालें। ऊर्जा
                      जल बनाने की प्रक्रिया निम्न है।
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Ingredients Table Card - Enhanced */}
        <ScrollReveal direction="zoom">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden">
              <div className="h-2 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
              
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">💧</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                    सामग्री स्प्रे के लिए सिंचाई के साथ
                  </h3>
                </div>
                
                <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-lg">
                      <thead>
                        <tr className="border-b-2 border-blue-300">
                          <th className="font-bold text-blue-900 pb-4 pr-4">अग्निहोत्र भस्म</th>
                          <th className="font-bold text-blue-900 pb-4 pr-4">100 ग्राम</th>
                          <th className="font-bold text-blue-900 pb-4">100 ग्राम</th>
                        </tr>
                        <tr className="border-b-2 border-blue-300">
                          <th className="font-bold text-blue-900 py-4 pr-4">फिटकरी (Alum)</th>
                          <th className="font-bold text-blue-900 py-4 pr-4">20 ग्राम</th>
                          <th className="font-bold text-blue-900 py-4">100 ग्राम</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-800 mt-2">
                      फिटकरी को पीस लो और इसमें भस्म मिलाकर 200 लीटर पानी में डाल दों
                      ऊर्जा जल तैयार हो जाएगा।
                    </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Madhav Ashram Section - Enhanced */}
        <ScrollReveal direction="up">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-amber-300 via-orange-400 to-amber-300 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden">
              {/* Decorative Top Pattern */}
              <div className="h-3 bg-linear-to-r from-amber-500 via-orange-500 to-amber-500"></div>
              
              {/* Ornamental Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 20px 20px, #f59e0b 2px, transparent 0),
                                   radial-gradient(circle at 60px 60px, #10b981 2px, transparent 0)`,
                  backgroundSize: '80px 80px'
                }}></div>
              </div>
              
              <div className="relative p-8 sm:p-16">
                {/* Header with Om Symbol */}
                <div className="flex flex-col items-center mb-10">
                  <div className="w-24 h-24 bg-linear-to-br from-amber-400 via-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-5xl text-white font-bold">ॐ</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-5xl font-bold text-center mb-3">
                    <span className="bg-linear-to-r from-orange-700 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                      अग्निहोत्र का प्रस्फुटन केन्द्र
                    </span>
                  </h2>
                  
                  <div className="w-32 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent rounded-full mb-4"></div>
                  
                  <h3 className="text-2xl sm:text-3xl font-semibold text-orange-800 text-center">
                    माधव आश्रम, बैरागढ़ भोपाल
                  </h3>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border-2 border-amber-200">
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-800">
                      ठीक सूर्योदय, सूर्यास्त में किया जाने वाला अग्निहोत्र भारत की
                      प्राचीन विद्या है, वेदो, उपनिषदों में इसका वर्णन है। कालंतर में
                      यह विद्या लुप्त हो गई थी। परम सतगुरु गजानंद जी (श्रीजी) के आदेश
                      से महानुभाव श्री माधव स्वामी पोद्दार जी ने 22 फरवरी 1963 को
                      भोपाल बैरागढ़ की भूमि में अग्निहोत्र का पुनः प्रस्फुटन किया। और
                      इस यज्ञ को जन-जन तक पहुँचाने के लिए प्रचार कार्य प्रारंभ किया।
                      बाद में महानुभाव माधव जी की परम् शिष्या परम पूज्या नलिनी जी ने
                      माधव आश्रम भोपाल का निर्माण कर इस कार्य को विश्वव्यापी बना दिया।
                      अग्निहोत्र करने वाले प्रत्येक बंधु को माधव स्वामी एक परिचय, सुख
                      की खोज, धर्मपाठ जरूर पढ़ना चाहिए। माधव आश्रम का यू-ट्यूब चैनल,
                      माधव आश्रम ट्रस्ट ऑफिशियल अग्निहोत्र भोपाल चैनल सबस्क्राईब कर
                      इससे आने वाली जानकारी को निरंतर प्राप्त करते रहना चाहिए।
                    </p>
                  </div>

                  {/* Info Tags */}
                  <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    <div className="bg-linear-to-r from-amber-400 to-orange-500 rounded-2xl px-8 py-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <span className="font-bold text-white text-lg">
                        माधव आश्रम ट्रस्ट ऑफिशियल
                      </span>
                    </div>
                    <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl px-8 py-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <span className="font-bold text-white text-lg">
                        22 फरवरी 1963
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Bottom Pattern */}
              <div className="h-3 bg-linear-to-r from-amber-500 via-orange-500 to-amber-500"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits Section Grid - Enhanced */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Agriculture Revolution */}
          <ScrollReveal direction="left">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-linear-to-br from-green-400 to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-200 transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="h-2 bg-linear-to-r from-green-500 via-emerald-500 to-green-600"></div>
                
                {/* Farm Pattern Background */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="2"/>
                    <path d="M50,10 L50,90 M10,50 L90,50" stroke="#f59e0b" strokeWidth="2"/>
                  </svg>
                </div>
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl">🌱</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                      अग्निहोत्र कृषि क्रांत
                    </h2>
                  </div>

                  <div className="space-y-5 text-gray-800 leading-relaxed">
                    <p className="text-base sm:text-lg">
                      अग्निहोत्र भस्म से तैयार ऊर्जा जल मिट्टी की नकारात्मक ऊर्जा को
                      समाप्त करता है। इसके प्रयोग से हानिकारक फंगस, वायरस और जीवाणु
                      नष्ट होते हैं और भूमि पुनः सकारात्मक हो जाती है। बीजोपचार में
                      अग्निहोत्र भस्म का उपयोग करने से बीजों का अंकुरण प्रतिशत बढ़
                      जाता है, फसलों की जड़ें अधिक मजबूत और स्वस्थ बनती हैं। यदि फसल
                      में फंगस, वायरस या जीवाणु जनित बीमारी हो, तो 20% ऊर्जा जल का
                      स्प्रे करने पर बीमारी धीरे-धीरे समाप्त होने लगती है। खेती के
                      दौरान जब शुरू से ही सिंचाई के पानी में अग्निहोत्र भस्म मिलाया
                      जाए और फसलों पर नियमित रूप से 20% ऊर्जा जल का छिड़काव किया जाए,
                      तो 90% तक फंगस, वायरस और कीटजनित रोग फसलों पर आते ही नहीं हैं।
                      यह कई किसानों का वास्तविक अनुभव है। ताराचंद बेलजी तकनीक – TCBT
                      पंचमहाभूत कृषि में अग्निहोत्र ऊर्जा विज्ञान का व्यापक प्रयोग
                      किया जाता है। अब तक हमने 38 प्रकार की फसलों में रासायनिक खेती से
                      भी अधिक उपज प्राप्त की है। आप TCBT पाठशाला (YouTube Channel) के
                      "38 फसलों में रिकॉर्ड उत्पादन" प्लेलिस्ट में जाकर इन सभी फसलों
                      को देख सकते हैं— जहाँ बिना यूरिया के फसलें अत्यंत हरी-भरी, बिना
                      DAP के पौधों की ऊँचाई डेढ़ से दो गुना, और पत्ते 2 से 3 गुना बड़े
                      दिखाई देते हैं। यही कारण है कि हमें प्रत्येक फसल में अधिकतम
                      उत्पादन प्राप्त हो रहा है।
                    </p>
                  </div>

                  {/* Stats Cards */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border-2 border-green-200 transform hover:scale-105 transition-transform duration-300">
                      <div className="text-4xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">90%</div>
                      <div className="text-sm font-semibold text-gray-700 mt-2">रोग नियंत्रण</div>
                    </div>
                    <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center border-2 border-amber-200 transform hover:scale-105 transition-transform duration-300">
                      <div className="text-4xl font-bold bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">38+</div>
                      <div className="text-sm font-semibold text-gray-700 mt-2">फसलें</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Human Health */}
          <ScrollReveal direction="right">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200 transform group-hover:scale-[1.02] transition-transform duration-300">
                <div className="h-2 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600"></div>
                
                {/* Health Pattern Background */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,20 L50,80 M20,50 L80,50" stroke="#f59e0b" strokeWidth="4"/>
                    <circle cx="50" cy="50" r="15" fill="#10b981"/>
                  </svg>
                </div>
                
                <div className="relative p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl">💚</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                      अग्निहोत्र से मानव स्वास्थ
                    </h2>
                  </div>

                  <div className="space-y-5 text-gray-800 leading-relaxed">
                    <p className="text-base sm:text-lg">
                      अग्निहोत्र भस्म से तैयार ऊर्जा जल मिट्टी की नकारात्मक ऊर्जा,
                      फंगस, वायरस और हानिकारक जीवाणुओं को समाप्त कर भूमि को पुनः
                      स्वस्थ बनाता है। अग्निहोत्र भस्म से बीजोपचार करने पर अंकुरण
                      प्रतिशत बढ़ जाता है और फसलों की जड़ें अधिक मजबूत होती हैं। यदि
                      फसल में कोई फंगस, वायरस या जीवाणु जनित बीमारी हो तो 20% ऊर्जा जल
                      का छिड़काव करने पर बीमारी कम होने लगती है। खेती की शुरुआत से ही
                      सिंचाई के पानी में अग्निहोत्र भस्म मिलाकर और नियमित रूप से 20%
                      ऊर्जा जल का स्प्रे करने पर 90% तक रोग और कीट फसलों पर आते ही
                      नहीं हैं, जो अनेक किसानों का प्रमाणित अनुभव है। ताराचंद बेलजी
                      तकनीक (TCBT पंचमहाभूत कृषि) में अग्निहोत्र ऊर्जा विज्ञान का गहन
                      प्रयोग किया जाता है और अब तक 38 प्रकार की फसलों में रासायनिक
                      खेती से भी अधिक उपज प्राप्त की गई है, जिसे TCBT पाठशाला यूट्यूब
                      चैनल की "रिकॉर्ड उत्पादन" प्लेलिस्ट में देखा जा सकता है, जहाँ
                      बिना यूरिया और DAP के भी पौधे अत्यंत हरे-भरे, ऊँचे और बड़े
                      पत्तों वाले दिखाई देते हैं।
                    </p>
                  </div>

                  {/* Health Tip Card */}
                  <div className="mt-8 bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-500 shadow-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">💧</span>
                      <div>
                        <p className="font-bold text-amber-900 mb-1 text-lg">स्वास्थ्य सुझाव</p>
                        <p className="text-base text-gray-800">
                          प्रतिदिन सुबह-शाम एक-एक गिलास ऊर्जा जल पीएं
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center items-center gap-3 py-8">
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Card - Kept for compatibility but enhanced styles used above */
function Card({
  children,
  variant = "white",
}: {
  children: React.ReactNode;
  variant?: "white" | "cream";
}) {
  return (
    <div
      className={`rounded-3xl p-10 shadow-card-strong transition hover:-translate-y-2 duration-300 ${
        variant === "cream" ? "bg-cream border border-gold" : "bg-white"
      }`}
    >
      {children}
    </div>
  );
}