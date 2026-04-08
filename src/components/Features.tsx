"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    id: 1,
    icon: "⚡",
    title: "Gestão Financeira Simplificada",
    subtitle: "Fast Input",
    color: "from-agro-600 to-agro-800",
    borderColor: "border-agro-500/30 hover:border-agro-400/60",
    features: [
      "Registro ultrarrápido de entradas e saídas",
      "Rateio automático por talhão ou safra",
      "Sabe exatamente qual pedaço de terra dá lucro e qual dá prejuízo",
    ],
    demo: (
      <div className="bg-agro-950/80 rounded-xl p-4 border border-agro-700/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-agro-400 animate-pulse" />
          <span className="text-xs text-agro-400 font-mono">Fast Input</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-agro-300">🌱 Talhão Norte</span>
            <span className="text-agro-400 font-bold">+R$ 45.200</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-agro-300">🏗️ Talhão Sul</span>
            <span className="text-agro-200/60 font-bold">-R$ 12.800</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-agro-300">🌾 Talhão Leste</span>
            <span className="text-agro-400 font-bold">+R$ 28.500</span>
          </div>
          <div className="h-px bg-agro-700/30 my-2" />
          <div className="flex justify-between text-sm font-bold">
            <span className="text-white">Saldo Total</span>
            <span className="text-agro-300">+R$ 60.900</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: "📊",
    title: "Inteligência Macroeconômica",
    subtitle: "Radar de Mercado",
    color: "from-agro-600 to-agro-800",
    borderColor: "border-agro-500/30 hover:border-agro-400/60",
    features: [
      "Cotações da bolsa em tempo real (Real, Dólar e Yuan)",
      "Calculadora de risco de endividamento com IA",
      "Simulações inteligentes: comprar ou alugar?",
    ],
    demo: (
      <div className="bg-agro-950/80 rounded-xl p-4 border border-agro-700/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-agro-300 animate-pulse" />
          <span className="text-xs text-agro-300 font-mono">Radar Live</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-agro-200">Soja (Chicago)</span>
            <span className="text-agro-300">↓ US$ 11.52/bu</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-agro-200">Dólar</span>
            <span className="text-agro-200">↑ R$ 5.83</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-agro-200">Yuan</span>
            <span className="text-agro-300">→ R$ 0.81</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-agro-200">Selic</span>
            <span className="text-agro-300">14.75% a.a.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: "🧠",
    title: "IA Prescritiva",
    subtitle: "O Grande Diferencial",
    color: "from-agro-600 to-agro-800",
    borderColor: "border-agro-500/30 hover:border-agro-400/60",
    features: [
      "Alertas com botões de ação prontos",
      "Recomendações de estratégia defensiva",
      "Cruzamento automático de clima + mercado + custos",
    ],
    demo: (
      <div className="bg-agro-950/80 rounded-xl p-4 border border-agro-700/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-agro-300 animate-pulse" />
          <span className="text-xs text-agro-300 font-mono">Alerta IA</span>
        </div>
        <div className="bg-agro-800/50 rounded-lg p-3 border border-agro-600/20">
          <p className="text-sm text-agro-100 leading-relaxed">
            &ldquo;A ureia caiu 5% e há previsão de chuva em 10 dias no Talhão
            Sul. <strong className="text-agro-200">Sugestão: Compre agora e aplique semana que vem.</strong>&rdquo;
          </p>
          <div className="flex gap-2 mt-3">
            <button className="px-3 py-1.5 bg-agro-400 text-agro-950 text-xs rounded-lg font-semibold">
              ✅ Aceitar
            </button>
            <button className="px-3 py-1.5 bg-agro-800/50 text-agro-200 text-xs rounded-lg border border-agro-600/30">
              Simular
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    icon: "📋",
    title: "Dossiê de Crédito",
    subtitle: "Score de Confiança",
    color: "from-agro-600 to-agro-800",
    borderColor: "border-agro-500/30 hover:border-agro-400/60",
    features: [
      "Relatório gerado com 1 clique",
      "Histórico climático e financeiro blindado em PDF",
      "Negocie taxas menores no banco sem arriscar a terra",
    ],
    demo: (
      <div className="bg-agro-950/80 rounded-xl p-4 border border-agro-700/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-agro-300 animate-pulse" />
          <span className="text-xs text-agro-300 font-mono">Dossiê</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-agro-300">✓</span>
            <span className="text-agro-200">Score: 87/100</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-agro-300">✓</span>
            <span className="text-agro-200">3 safras sem prejuízo</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-agro-300">✓</span>
            <span className="text-agro-200">Índice climático estável</span>
          </div>
          <button className="w-full mt-2 px-3 py-2 bg-agro-400 text-agro-950 text-xs rounded-lg font-bold">
            📄 Exportar PDF Blindado
          </button>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="solucao"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-agro-950 via-agro-950 to-agro-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-agro-400 font-semibold">
            A Solução
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            O que o <span className="gradient-text">AgroSolution</span> faz?
          </h2>
          <p className="text-agro-300/70 max-w-2xl mx-auto text-lg">
            Quatro pilares que transformam complexidade em ação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setActiveCard(pillar.id)}
              onHoverEnd={() => setActiveCard(null)}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${pillar.color}/10 border ${pillar.borderColor} transition-all cursor-default`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{pillar.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <span className="text-xs text-agro-400 font-mono">
                    {pillar.subtitle}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {pillar.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-agro-200/80"
                  >
                    <span className="text-agro-400 mt-0.5 flex-shrink-0">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Interactive demo card */}
              <motion.div
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: activeCard === pillar.id ? 1 : 0.6,
                  scale: activeCard === pillar.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {pillar.demo}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
