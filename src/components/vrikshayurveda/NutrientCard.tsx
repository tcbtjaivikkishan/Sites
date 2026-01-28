"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NutrientCard({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-2xl font-black text-green-800 flex justify-between items-center"
      >
        {item.name}
        <span>{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 space-y-4"
          >

            <div className="bg-green-50 border-l-4 border-green-600 rounded-xl p-5">
              <h3 className="font-bold mb-2">🟢 कमी के लक्षण</h3>
              <ul className="list-disc pl-6 space-y-1">
                {item.symptoms.map((s: string, i: number) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-5">
              <h3 className="font-bold mb-2">🟡 TCBT समाधान</h3>
              <ul className="list-disc pl-6 space-y-1">
                {item.solution.map((s: string, i: number) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}