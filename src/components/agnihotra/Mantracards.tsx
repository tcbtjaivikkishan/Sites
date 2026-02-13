"use client";

import { Sun, Moon } from "lucide-react";
import { useState } from "react";

interface MantraCardProps {
  type: "sunrise" | "sunset";
  title: string;
  mantra: string;
  icon: React.ReactNode;
}

export default function MantraCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 my-16">
      <MantraCard
        type="sunrise"
        title="सूर्योदय का मंत्र -"
        mantra="सूर्याय स्वाहा सूर्याय इदम् न मम / प्रजापतये स्वाहा प्रजापतये इदम् न मम //"
        icon={<Sun className="text-gold" size={32} />}
      />
      <MantraCard
        type="sunset"
        title="सूर्यास्त का मंत्र -"
        mantra="अग्नये स्वाहा - अग्नये इदं न मम प्रजापतये स्वाहा - प्रजापतये इदं न मम"
        icon={<Moon className="text-primary" size={32} />}
      />
    </div>
  );
}

function MantraCard({ type, title, mantra, icon }: MantraCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const gradientClass =
    type === "sunrise"
      ? "from-orange-100 via-yellow-50 to-white"
      : "from-indigo-100 via-purple-50 to-white";

  const borderClass = type === "sunrise" ? "border-gold" : "border-primary";

  return (
    <div
      className={`relative group bg-linear-to-br ${gradientClass} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${borderClass} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-1 bg-linear-to-r ${
              type === "sunrise"
                ? "from-yellow-400 to-orange-500"
                : "from-indigo-400 to-purple-500"
            } transition-all duration-1000`}
            style={{
              top: `${20 + i * 20}%`,
              transform: isHovered
                ? `translateX(${(i % 2 === 0 ? 10 : -10) * (i + 1)}px)`
                : "translateX(0)",
              transitionDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with Animation */}
        <div
          className={`flex items-center gap-3 mb-6 transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          <div
            className={`p-3 rounded-full ${
              type === "sunrise" ? "bg-yellow-100" : "bg-indigo-100"
            } transition-transform duration-300 ${
              isHovered ? "rotate-12" : "rotate-0"
            }`}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-primary">{title}</h3>
        </div>

        {/* Mantra Text */}
        <div
          className={`text-lg leading-relaxed text-gray-800 font-medium transition-all duration-500 ${
            isHovered ? "tracking-wide" : "tracking-normal"
          }`}
        >
          <p className="selection:bg-gold selection:text-white">{mantra}</p>
        </div>

        {/* Decorative OM Symbol */}
        <div
          className={`absolute -right-8 -bottom-8 text-8xl font-bold transition-all duration-700 ${
            "text-primary/10"
          } ${isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"}`}
        >
          ॐ
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${
          type === "sunrise"
            ? "from-yellow-300/20 to-orange-300/20"
            : "from-indigo-300/20 to-purple-300/20"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />
    </div>
  );
}