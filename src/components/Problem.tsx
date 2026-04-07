"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "📉",
    title: "Queda nos Preços",
    description:
      "Soja e arroba do boi caíram mais de 25% com excesso de oferta global e embargos comerciais.",
    stat: "-25%",
    statLabel: "queda nos preços",
  },
  {
    icon: "🏦",
    title: "Juros Asfixiantes",
    description:
      "Selic a ~15%. Financiamentos de máquinas chegam a custar 35% ao ano, engolindo a margem da fazenda.",
    stat: "35%",
    statLabel: "juros ao ano",
  },
  {
    icon: "🏚️",
    title: "Risco de Perder a Terra",
    description:
      "Com a alta inadimplência, bancos passaram a exigir a própria terra do produtor como garantia.",
    stat: "⚠️",
    statLabel: "terra em risco",
  },
  {
    icon: "💱",
    title: "Caos Cambial",
    description:
      "A transição das vendas para a China do Dólar para o Yuan tirou a previsibilidade financeira do produtor.",
    stat: "¥↔$",
    statLabel: "câmbio instável",
  },
  {
    icon: "🌡️",
    title: "Clima Extremo",
    description:
      "Secas históricas e instabilidades constantes destruindo safras inteiras sem aviso prévio.",
    stat: "🔥",
    statLabel: "secas recordes",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problema"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-agro-950 to-red-950/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-red-400 font-semibold">
            O Cenário Atual
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            A <span className="text-red-400">Tempestade Perfeita</span> no Agro
          </h2>
          <p className="text-agro-300/70 max-w-2xl mx-auto text-lg">
            O mercado vive uma crise aguda desde 2024. O produtor rural enfrenta
            múltiplas ameaças simultâneas à sua sobrevivência financeira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-agro-950/60 border border-red-800/30 hover:border-red-500/50 transition-colors cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 group-hover:scale-125 transition-transform">
                  {problem.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-agro-300/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-800/20 flex items-center gap-2">
                <span className="text-2xl font-bold text-red-400">
                  {problem.stat}
                </span>
                <span className="text-xs text-red-300/60 uppercase tracking-wide">
                  {problem.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl sm:text-2xl text-agro-200 font-light">
            E se existisse uma ferramenta que transformasse esse caos
            <br />
            em <strong className="text-agro-400">decisões claras e seguras</strong>?
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6"
          >
            <svg
              className="w-6 h-6 text-agro-400 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
