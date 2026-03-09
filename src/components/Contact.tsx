"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-[#4dd9d9] mb-4"
        >
          Kontakt
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white mb-4 leading-tight"
        >
          Einfach anrufen oder{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4dd9d9] to-[#60a5fa]">
            eine E-Mail schreiben
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base mb-14 max-w-lg mx-auto"
        >
          Wir sind für Sie erreichbar – schnell, unkompliziert und persönlich.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="tel:+4917635220086"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#0d2240] font-bold px-8 py-4 rounded-2xl hover:bg-slate-100 transition-colors text-base shadow-lg"
          >
            <Phone size={20} />
            0176 35220086
          </a>
          <a
            href="mailto:aliuhausmeister@gmail.com"
            className="inline-flex items-center justify-center gap-3 bg-white/[0.06] border border-white/15 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-base"
          >
            <Mail size={20} />
            aliuhausmeister@gmail.com
          </a>
        </motion.div>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-white/[0.08] pt-10"
        >
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <MapPin size={16} className="text-[#4dd9d9] flex-shrink-0" />
            Mainaustraße 77, 81243 München
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <Clock size={16} className="text-[#4dd9d9] flex-shrink-0" />
            Mo–Sa 7:00–18:00 Uhr
          </div>
        </motion.div>

      </div>
    </section>
  );
}
