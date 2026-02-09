"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users } from 'lucide-react';

const testimonials = [
  {
    image: '/farmers/balasaheb.webp',
    title: "8 माह में प्रति एकड़ 23 टन अदरक उत्पादन",
    text:
      "TCBT की जैविक तकनीक से मेरी अदरक की फसल में अद्भुत वृद्धि हुई।",
    author:
      "श्री बाला साहेब माने, सतारा, महाराष्ट्र",
  },
  {
    image: '/farmers/optimized_nikhil rajka_200x184.webp',
    title: "1.25 एकड़ से 3 लाख रुपये वार्षिक आय",
    text:
      "अब मैं गर्व से जैविक किसान हूँ। मिट्टी की गुणवत्ता भी सुधरी है।",
    author: "श्री निखिल राजक, मध्यप्रदेश",
  },
  {
    image: '/farmers/krisana_sharma_ji.webp',
    title: "5 एकड़ में 7 लाख रुपये की उपज",
    text:
      "TCBT के मार्गदर्शन से लागत कम और उत्पादन अधिक हुआ।",
    author: "श्री कृष्ण शर्मा, हरियाणा",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (direction: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (direction === 'next') {
      setIndex((i) => (i + 1) % testimonials.length);
    } else {
      setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      navigate('next');
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const current = testimonials[index];

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-lime-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users size={16} />
            <span>1000+ संतुष्ट किसान</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
              हमारे किसान
            </span>
            <br />
            <span className="text-gray-800">क्या कहते हैं</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            सफल किसानों की सच्ची कहानियां और उनकी उपलब्धियां
          </p>
        </div>

        {/* Main Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100 transform transition-all duration-500 hover:shadow-green-200 hover:shadow-3xl">
            {/* Top decorative bar */}
            <div className="h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400"></div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image section */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative">
                    <img
                      src={current.image}
                      alt={current.author}
                      className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-xl ring-4 ring-green-100 transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full p-3 shadow-lg">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1 text-center md:text-left">

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {current.title}
                  </h3>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <span className="text-6xl text-green-200 absolute -top-4 -left-2 font-serif">"</span>
                    <p className="text-lg text-gray-700 italic leading-relaxed pl-6">
                      {current.text}
                    </p>
                    <span className="text-6xl text-green-200 absolute -bottom-8 right-0 font-serif">"</span>
                  </div>
                  {/* Author info */}
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">— {current.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => navigate('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white hover:bg-green-50 text-green-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-green-100"
            disabled={isAnimating}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => navigate('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white hover:bg-green-50 text-green-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-green-100"
            disabled={isAnimating}
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setIndex(i);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                i === index 
                  ? "w-12 h-4 bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg" 
                  : "w-4 h-4 bg-green-200 hover:bg-green-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}