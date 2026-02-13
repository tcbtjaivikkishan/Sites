"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Sprout, Sun, Droplets, Wind } from "lucide-react";
import type { Section } from "@/lib/data/tcbtScienceData";

interface ScienceContentProps {
  data: Section[];
}

const elementIcons = [
  { icon: Leaf, color: "text-green-600" },
  { icon: Droplets, color: "text-blue-600" },
  { icon: Sun, color: "text-orange-600" },
  { icon: Wind, color: "text-sky-600" },
  { icon: Sprout, color: "text-emerald-600" },
];

export default function ScienceContent({ data }: ScienceContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative px-6 py-24 md:py-32 text-center max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
            {elementIcons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </motion.div>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-green-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
            TCBT Science
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 inline-block"
          >
            <p className="text-xl md:text-2xl text-green-800 font-semibold px-6 py-3 bg-green-100/60 rounded-full backdrop-blur-sm border border-green-200">
              पंचमहाभूत आधारित प्राकृतिक कृषि ज्ञान
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Traditional wisdom meets modern understanding in sustainable agriculture
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <section className="relative max-w-7xl mx-auto px-4 pb-32 space-y-8">
        {/* Vertical Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-green-400 to-green-300" />

        {data.map((section, idx) => {
          const Icon = elementIcons[idx % elementIcons.length].icon;
          const iconColor = elementIcons[idx % elementIcons.length].color;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative md:w-[calc(50%-2rem)] ${
                isEven ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className={`hidden md:block absolute top-8 ${
                  isEven ? "-right-[2.25rem]" : "-left-[2.25rem]"
                } w-8 h-8 bg-white border-4 border-green-500 rounded-full shadow-lg z-10`}
              >
                <Icon className={`w-4 h-4 ${iconColor} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden hover:border-green-300 transition-colors"
              >
                {/* Header Gradient */}
                <div className="h-2 bg-linear-to-r from-green-400 via-emerald-500 to-green-400" />

                <div className="p-8 md:p-10">
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-green-100 to-emerald-100 mb-4 group-hover:shadow-md transition-shadow`}
                  >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
                    {section.title}
                  </h2>

                  {/* Subtitle */}
                  {section.subtitle && (
                    <p className="text-lg text-green-600 font-semibold mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-green-500 rounded-full" />
                      {section.subtitle}
                    </p>
                  )}

                  {/* Content Paragraphs */}
                  {section.content && (
                    <div className="space-y-4 mb-6">
                      {section.content.map((para, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="leading-relaxed text-gray-700 text-lg"
                        >
                          {para}
                        </motion.p>
                      ))}
                    </div>
                  )}

                  {/* List Items */}
                  {section.list && (
                    <ul className="grid gap-3 md:grid-cols-2">
                      {section.list.map((item, i) => {
                        const text = typeof item === "string" ? item : item.text;
                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-3 rounded-xl bg-linear-to-br from-green-50 to-emerald-50 px-5 py-4 border border-green-100 hover:border-green-300 hover:shadow-md transition-all cursor-default group/item"
                          >
                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500 group-hover/item:scale-125 transition-transform" />
                            <span className="text-gray-700 leading-relaxed">
                              {text}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative text-center py-16 px-6 bg-gradient-to-b from-transparent to-green-100/50"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Leaf className="w-12 h-12 text-green-600" />
          </motion.div>
          
          <p className="text-2xl font-bold text-green-800 mb-3">
            ॐ तत्सत
          </p>
          
          <div className="space-y-2 text-green-700">
            <p className="text-lg font-semibold">ताराचंद बेलजी</p>
            <p className="text-base">प्राकृतिक खेती शोध संस्था, बालाघाट</p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-3 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
            ))}
          </div>
        </div>
      </motion.footer>
    </main>
  );
}