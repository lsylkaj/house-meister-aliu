"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Berger",
    role: "Hausverwaltung Berger & Partner",
    text: "Hausmaister GmbH betreut unsere Liegenschaften seit über 5 Jahren. Zuverlässig, pünktlich und stets professionell. Absolut empfehlenswert!",
    rating: 5,
  },
  {
    name: "Sandra Müller",
    role: "Eigentümergemeinschaft München",
    text: "Die Grünpflege und Reinigung unserer Anlage ist seitdem auf einem ganz neuen Niveau. Die Kommunikation läuft reibungslos und transparent.",
    rating: 5,
  },
  {
    name: "Klaus Hoffmann",
    role: "Gewerbeimmobilien GmbH",
    text: "Besonders beeindruckt bin ich von der schnellen Reaktionszeit bei Störungen. Das Team ist immer erreichbar und löst Probleme unbürokratisch.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="referenzen" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1a7a8a] mb-4"
          >
            Kundenstimmen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-[#0f172a]"
          >
            Das sagen unsere Kunden
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="w-9 h-9 rounded-full bg-[#1a4a7a]/10 flex items-center justify-center text-[#1a4a7a] font-bold text-xs">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-[#0f172a] font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
