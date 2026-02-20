
const processSteps = [
  {
    id: 1,
    image: "/Charanbaddh-prakriya/img_1.png",
    title: "देशी गाय का महत्व",
    description: "देशी भारतीय गाय होना चाहिए और गोबर की ऊर्जा पॉजिटिव और पंचमहाभूत पूर्ण हो"
  },
  {
    id: 2,
    image: "/Charanbaddh-prakriya/img_2.png",
    title: "अग्निहोत्र भस्म",
    description: "अग्निहोत्र भस्म में पंचमहाभूतों की पाँचों ऊर्जाएं होनी चाहिए"
  },
  {
    id: 3,
    image: "/Charanbaddh-prakriya/img_3.png",
    title: "कृषि भूमि की ऊर्जा",
    description: "कृषि भूमि की ऊर्जा पॉजिटिव हो और पंचमहाभूत पूर्ण हो"
  },
  {
    id: 4,
    image: "/Charanbaddh-prakriya/img_4.png",
    title: "बीजों की ऊर्जा",
    description: "बीजों की ऊर्जा पॉजिटिव हो और पंचमहाभूत पूर्ण हो"
  },
  {
    id: 5,
    image: "/Charanbaddh-prakriya/img_5.png",
    title: "जल की शुद्धता",
    description: "जल की ऊर्जा पॉजिटिव हो और पंचमहाभूत पूर्ण हो"
  },
  {
    id: 6,
    image: "/Charanbaddh-prakriya/img_6.png",
    title: "भूमि का PH स्तर",
    description: "भूमि के PH 7.2, और कार्बन 1% से ऊपर हो"
  },
  {
    id: 7,
    image: "/Charanbaddh-prakriya/img_7.png",
    title: "बीज बोवाई",
    description: "बीजों को निश्चित नक्षत्र पर बोवाई करें (TCBT कृषि पंचाग के अनुसार) बीज शोधन और बीज संस्कार भी अपनाएँ"
  },
  {
    id: 8,
    image: "/Charanbaddh-prakriya/img_8.png",
    title: "अमावस्या प्रक्रिया",
    description: "हर अमावस्या के आसपास ऊर्जा जल एवं अणु जल फसलों में सिंचाई के साथ डालें और छाछ द्रव्य रसायन का स्प्रे करें"
  },
  {
    id: 9,
    image: "/Charanbaddh-prakriya/img_9.png",
    title: "पूर्णिमा प्रक्रिया",
    description: "हर पूर्णिमा के आसपास हाई सीएन रेशियो एवं जीवाणु जल फसलों में सिंचाई के साथ डालें, पंचगव्य का स्प्रे करें"
  }
];

export default function ChranbaddhPage() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-stone-50 via-amber-50/30 to-emerald-50/40 overflow-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
        
        {/* Ambient Orbs */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-20 -left-32 w-125 h-125 bg-amber-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-green-200/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Decorative Top Element */}
          <div className="flex justify-center mb-8 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 md:w-16 bg-linear-to-r from-transparent via-emerald-600/50 to-emerald-600" />
              <div className="text-emerald-700">
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L7 12h10L12 2z" />
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0.4" />
                </svg>
              </div>
              <div className="h-0.5 w-12 md:w-16 bg-linear-to-l from-transparent via-emerald-600/50 to-emerald-600" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="space-y-3">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slideUp">
              <span className="inline-block bg-linear-to-br from-emerald-800 via-green-700 to-emerald-900 bg-clip-text text-transparent">
                TCBT वृक्षायुर्वेद कृषि
              </span>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 animate-slideUp" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              चरणबद्ध प्रक्रिया
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed animate-slideUp px-4" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            प्रकृति के ऊर्जा विज्ञान एवं पंचमहाभूतों के व्यवस्था विज्ञान पर आधारित
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center pt-4 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <div className="w-24 h-1 bg-linear-to-r from-emerald-600/30 via-emerald-600 to-emerald-600/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="relative px-4 md:px-6 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-emerald-900/5 p-6 md:p-10 border border-emerald-100/50 animate-fadeIn hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500">
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed text-justify">
                ताराचंद बेलजी तकनीक वृक्षायुर्वेद कृषि प्रकृति के ऊर्जा विज्ञान एवं
                पंचमहाभूतों के व्यवस्था विज्ञान पर आधारित है। यह तकनीक <span className="font-semibold text-emerald-800">पंचमहाभूत
                (भूमि, गगन, वायु, अग्नि, नीर)</span> को शुद्ध, सजीव, संस्कारित करते हुए फसलों
                की स्वयं पोषी-स्वयं विकासी-स्वयं पूर्ण व्यवस्था को स्थापित करती है।
                उपलब्ध खाद्यान्न पंचतत्व की ऊर्जा से पूर्ण पौष्टिक और <span className="font-semibold text-emerald-800">षडरस (खट्टा-मीठा,
                नमक, कटू, तिक्त, कसाय)</span> युक्त स्वादिष्ट होता है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="relative px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-slideUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-emerald-800 via-green-700 to-emerald-900 bg-clip-text text-transparent">
                अग्निहोत्र प्रक्रिया
              </span>
            </h2>
            <p className="text-stone-600 text-lg md:text-xl">चरणबद्ध विधि</p>
            <div className="flex justify-center mt-6">
              <div className="w-20 h-1 bg-linear-to-r from-emerald-600/30 via-emerald-600 to-emerald-600/30 rounded-full" />
            </div>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-emerald-900/5 overflow-hidden border border-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-500 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 z-10 w-12 h-12 bg-linear-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.id}</span>
                </div>

                {/* Image Container */}
                <div className="relative h-56 md:h-64 bg-linear-to-br from-emerald-50 to-green-50 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-3 min-h-14 flex items-center">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Bottom Border */}
                <div className="h-1 bg-linear-to-r from-transparent via-emerald-600 to-transparent group-hover:via-green-600 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="relative px-4 md:px-6 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-emerald-800 via-green-700 to-emerald-900 rounded-3xl shadow-2xl shadow-emerald-900/20 p-8 md:p-12 text-center animate-fadeIn hover:shadow-3xl hover:shadow-emerald-900/30 transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              टीसीबीटी कृषि अभियान
            </h2>
            <div className="w-20 h-1 bg-white/40 rounded-full mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-emerald-50 font-semibold">
              रसायन मुक्त कृषि • बाजार मुक्त किसान
            </p>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <div className="relative py-12 md:py-16 text-center text-stone-500 text-sm">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-base md:text-lg">प्रकृति के साथ, प्रकृति के लिए</span>
            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </main>
  );
}