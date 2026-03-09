"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Zuverlässigkeit und Pünktlichkeit",
  "Transparente Preisgestaltung",
  "Individuelle Betreuung",
  "Umweltbewusstes Handeln",
  "Ausgebildetes Fachpersonal",
  "Kurzfristige Einsatzbereitschaft",
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[#0f172a] rounded-3xl p-8 relative overflow-hidden">
              {/* Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#1e3a5f] rounded-full blur-[60px] opacity-60" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2d6a4f] rounded-full blur-[60px] opacity-40" />

              <div className="relative z-10">
                <div className="text-slate-400 text-xs uppercase tracking-widest mb-6">
                  Unser Versprechen
                </div>
                <blockquote className="text-white text-xl font-medium leading-relaxed mb-8">
                  „Wir behandeln jedes Gebäude so, als wäre es unser eigenes."
                </blockquote>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a4a7a] to-[#1a7a8a] flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      Aliu Hausmeisterservice
                    </div>
                    <div className="text-slate-400 text-xs">
                      München – Mainaustraße 77, 81243
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-5 bg-[#1a7a8a] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-2xl font-bold">München</div>
              <div className="text-cyan-200 text-xs">81243 – Ihr lokaler Profi</div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1a7a8a] mb-4">
              Über uns
            </span>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
              Über{" "}
              <span className="text-[#1a4a7a]">10 Jahre Erfahrung</span>{" "}
              im Hausmeisterservice
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              Aliu Hausmeisterservice ist Ihr lokaler Ansprechpartner für alle
              Arbeiten rund um Ihre Immobilie in München und Umgebung. Mit mehr
              als 10 Jahren Erfahrung erledigen wir zuverlässig und schnell, was anfällt.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Von der Gartenpflege über handwerkliche Arbeiten und Reinigung bis
              hin zur Entrümpelung und dem Winterdienst – alles aus einer Hand,
              zu fairen Preisen.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2
                    size={16}
                    className="text-[#1a7a8a] mt-0.5 flex-shrink-0"
                  />
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
