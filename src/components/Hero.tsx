"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

const highlights = [
  "Gartenpflege & Grünschnitt",
  "Handwerk & kleine Reparaturen",
  "Reinigung & Winterdienst",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d2240]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs matching logo teal/navy */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#1a7a8a] rounded-full blur-[130px] opacity-25" />
      <div className="absolute -bottom-32 -left-16 w-[400px] h-[400px] bg-[#1a4a7a] rounded-full blur-[100px] opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#4dd9d9] rounded-full animate-pulse" />
              Ihr Hausmeisterservice in München
            </motion.div>

            {/* Logo in circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-8"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-2xl shadow-black/30 ring-4 ring-white/20">
                <Image
                  src="/logo-icon.png"
                  alt="Aliu Hausmeisterservice"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Ihr Hausmeisterservice{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dd9d9] to-[#60a5fa]">
                in München
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Professioneller Hausmeisterservice in München – von der
              Gartenpflege über Handwerk und Reinigung bis hin zum
              Winterdienst. Zuverlässig und fair.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2.5 mb-10"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-[#4dd9d9] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+4917635220086"
                className="inline-flex items-center gap-2 bg-white text-[#0d2240] font-semibold px-7 py-3.5 rounded-full hover:bg-slate-100 transition-colors text-sm"
              >
                <Phone size={15} />
                0176 35220086
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Leistungen ansehen
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right – info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-5 mb-6">
                  {[
                    { value: "5", label: "Leistungen", sub: "Aus einer Hand" },
                    { value: "24/7", label: "Erreichbar", sub: "Immer für Sie da" },
                    { value: "München", label: "Standort", sub: "Mainaustraße 77" },
                    { value: "Fair", label: "Preise", sub: "Transparente Kosten" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/[0.06] rounded-2xl p-5">
                      <div className="text-2xl font-bold text-white mb-0.5">{s.value}</div>
                      <div className="text-slate-300 text-xs font-semibold">{s.label}</div>
                      <div className="text-slate-500 text-xs">{s.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#1a4a7a] to-[#1a7a8a] rounded-2xl p-5">
                  <div className="text-white/70 text-xs mb-1">Kontakt aufnehmen</div>
                  <div className="text-white font-semibold text-sm mb-1">
                    aliuhausmeister@gmail.com
                  </div>
                  <div className="text-white font-semibold text-sm">
                    0176 35220086
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#1a7a8a] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                ✓ Ihr lokaler Hausmeister
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
