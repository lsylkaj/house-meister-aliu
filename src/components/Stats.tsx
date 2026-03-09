"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Jahre Erfahrung", sub: "Ihr verlässlicher Partner" },
  { value: "München", label: "Unser Standort", sub: "Mainaustraße 77, 81243" },
  { value: "100 %", label: "Kundenfokus", sub: "Zuverlässig & fair" },
  { value: "24/7", label: "Erreichbar", sub: "Immer für Sie da" },
];

export default function Stats() {
  return (
    <section className="bg-[#1a4a7a] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {s.value}
              </div>
              <div className="text-blue-200 font-semibold text-sm mb-1">
                {s.label}
              </div>
              <div className="text-blue-300/60 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
