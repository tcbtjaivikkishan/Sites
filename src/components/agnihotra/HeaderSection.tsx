"use client";

import { Flame, Leaf, Sprout } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-amber-50 via-green-50 to-emerald-50">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="grain" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Leaf className="w-32 h-32 text-green-600 transform -rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Sprout className="w-28 h-28 text-emerald-600 transform rotate-12" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        {/* Icon with Glow */}
        <div
          className={`inline-flex items-center justify-center mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-300/20 blur-2xl rounded-full scale-150" />
            <div className="relative bg-linear-to-br from-orange-400 to-amber-500 p-6 rounded-2xl shadow-xl">
              <Flame className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          className={`text-6xl md:text-8xl font-light tracking-tight text-gray-800 mb-6 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          अग्निहोत्र
        </h1>

        {/* Minimal Divider */}
        <div
          className={`w-16 h-0.5 bg-linear-to-r from-green-600 to-emerald-600 mx-auto mb-8 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          ऊर्जा प्राप्त करने का सरल एवं सहज मार्ग
        </p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
          <path
            d="M0,60 C300,90 600,30 900,60 L900,120 L0,120 Z"
            fill="#f0fdf4"
            opacity="0.5"
          />
          <path
            d="M0,80 C300,50 600,100 900,80 L900,120 L0,120 Z"
            fill="#dcfce7"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}