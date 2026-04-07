"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    time: "6:00",
    period: "AM",
    icon: "☀️",
    title: "Atualização Automática",
    description:
      "João acorda e abre o app conectado no Wi-Fi da sede. O app atualiza preços do Yuan, Dólar, Clima e Bolsa automaticamente.",
    detail: "Dados sincronizados em segundos",
    color: "bg-amber-500",
    glowColor: "shadow-amber-500/30",
  },
  {
    time: "9:00",
    period: "AM",
    icon: "🔧",
    title: "Fast Input Offline",
    description:
      "No campo sem internet, João registra um gasto de R$ 5.000 com manutenção do trator, atrelado ao Talhão 2. O app salva offline.",
    detail: "Funciona 100% sem internet",
    color: "bg-agro-500",
    glowColor: "shadow-agro-500/30",
  },
  {
    time: "13:00",
    period: "PM",
    icon: "📡",
    title: "Sincronização Automática",
    description:
      "João volta para a sede. O app detecta a internet e sobe o gasto de R$ 5.000 para a nuvem automaticamente em segundo plano.",
    detail: "Sync transparente e seguro",
    color: "bg-blue-500",
    glowColor: "shadow-blue-500/30",
  },
  {
    time: "14:00",
    period: "PM",
    icon: "🧠",
    title: "Alerta da IA",
    description:
      '"Atenção João, seus custos de manutenção subiram. Como o mercado da China hoje abriu em baixa (Yuan), sugerimos vender 15% da sua soja armazenada agora para proteger seu caixa."',
    detail: "Ação recomendada com 1 clique",
    color: "bg-purple-500",
    glowColor: "shadow-purple-500/30",
  },
  {
    time: "15:00",
    period: "PM",
    icon: "✅",
    title: "Resultado",
    description:
      "João agiu na hora certa, não ficou no vermelho e não precisou pegar dinheiro no banco a 35% de juros. Sua terra está protegida.",
    detail: "Margem preservada!",
    color: "bg-gold-500",
    glowColor: "shadow-gold-500/30",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="jornada"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-agro-900 to-agro-950 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-agro-400 font-semibold">
            Um dia na vida do produtor
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            A Jornada de <span className="text-agro-400">João</span>
          </h2>
          <p className="text-agro-300/70 max-w-xl mx-auto text-lg">
            Produtor de soja, João usa o AgroSolution no dia a dia.
            <br />
            Veja como um dia típico funciona com o app.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 timeline-line sm:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              className={`relative flex items-start gap-6 mb-12 sm:mb-16 ${
                i % 2 === 0
                  ? "sm:flex-row"
                  : "sm:flex-row-reverse sm:text-right"
              }`}
            >
              {/* Time dot */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.25 }}
                  className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-xl shadow-lg ${step.glowColor}`}
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Content card */}
              <div
                className={`ml-20 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "sm:pr-4" : "sm:pl-4"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="p-5 rounded-2xl bg-agro-950/80 border border-agro-700/30 hover:border-agro-500/50 transition-colors"
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      i % 2 !== 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    <span className="text-2xl font-bold text-white font-mono">
                      {step.time}
                    </span>
                    <span className="text-xs text-agro-400 font-mono">
                      {step.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-agro-300/70 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 ${step.color}/20 text-xs font-semibold rounded-full text-white border border-white/10`}
                  >
                    {step.detail}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
