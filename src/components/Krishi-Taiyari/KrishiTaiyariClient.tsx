"use client";

import React from "react";

interface SectionUIProps {
  title: string;
  children: React.ReactNode;
}

const SectionUI = ({ title, children }: SectionUIProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-3xl shadow-xl p-6 md:p-10 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6 border-b border-green-100 pb-3">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4">
        {children}
      </div>
    </div>
  );
};

export default SectionUI;
