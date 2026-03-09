"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  Flame,
  Building2,
  Flower2,
  Scissors,
  Snowflake,
  Leaf,
  Wrench,
  Trash2,
  TreeDeciduous,
  CheckCircle2,
} from "lucide-react";

const mainServices = [
  {
    icon: Sparkles,
    title: "Außenanlage reinigen",
    description:
      "Reinigen der Außenanlage von Schmutz, Papier und anderen Abfällen – für einen gepflegten ersten Eindruck.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Beleuchtungskontrolle",
    description:
      "Kontrolle der Beleuchtung im Haus – defekte Leuchtmittel werden umgehend ausgetauscht.",
    color: "from-yellow-500/20 to-amber-400/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Flame,
    title: "Heizungsanlage",
    description:
      "Regelmäßige Kontrolle der Heizungsanlage im Haus – für einen sicheren und effizienten Betrieb.",
    color: "from-orange-500/20 to-red-400/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Building2,
    title: "Treppenhaus & Gemeinschaftsflächen",
    description:
      "Reinigung der Treppenhäuser und aller der Allgemeinheit zugänglichen Bereiche Ihrer Immobilie.",
    color: "from-slate-500/20 to-slate-400/20",
    iconColor: "text-slate-300",
  },
];

const seasonalServices = [
  {
    season: "Frühjahr",
    icon: Flower2,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    task: "Reinigen der Tiefgarage",
  },
  {
    season: "Sommer",
    icon: Scissors,
    color: "text-green-400",
    bg: "bg-green-400/10",
    task: "Rasenmähen, Heckenschnitt",
  },
  {
    season: "Herbst",
    icon: Leaf,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    task: "Entsorgung von Laub",
  },
  {
    season: "Winter",
    icon: Snowflake,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    task: "Schneeräumen",
  },
];

const specialServices = [
  "Sperrmüllentsorgung aus den Anwesen",
  "Baumschnitt",
  "Diverse Reparaturarbeiten in den Außenanlagen",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* ── Header ── */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#4dd9d9] mb-4"
          >
            Unsere Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Alles aus einer Hand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-base"
          >
            Von der täglichen Reinigung bis zum saisonalen Winterdienst –
            wir kümmern uns um alles rund um Ihre Immobilie.
          </motion.p>
        </div>

        {/* ── Unser Service für Sie ── */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white font-semibold text-lg mb-6 flex items-center gap-3"
          >
            <span className="w-1 h-6 bg-[#4dd9d9] rounded-full inline-block" />
            Unser Service für Sie
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mainServices.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}
                >
                  <s.icon size={18} className={s.iconColor} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{s.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Saisonaler Service ── */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white font-semibold text-lg mb-6 flex items-center gap-3"
          >
            <span className="w-1 h-6 bg-green-400 rounded-full inline-block" />
            Saisonaler Service
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seasonalServices.map((s, i) => (
              <motion.div
                key={s.season}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                  <s.icon size={18} className={s.color} />
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${s.color}`}>
                  {s.season}
                </div>
                <p className="text-white text-sm font-medium">{s.task}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Sonderarbeiten ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8"
        >
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-orange-400 rounded-full inline-block" />
            Sonderarbeiten
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {specialServices.map((item, i) => {
              const icons = [Trash2, TreeDeciduous, Wrench];
              const Icon = icons[i];
              return (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-orange-400" />
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <CheckCircle2 size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-snug">{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
