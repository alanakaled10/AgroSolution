"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const diffs = [
  {
    icon: "🧠",
    title: "Consultor de Bolso, não Planilha",
    description:
      "Enquanto concorrentes entregam sistemas de registro, o AgroSolution entrega um consultor financeiro inteligente direto no celular.",
  },
  {
    icon: "📴",
    title: "Funciona Sem Internet",
    description:
      "Arquitetura Offline-First: registre tudo no campo e sincronize automaticamente quando voltar ao Wi-Fi da sede.",
  },
  {
    icon: "🛡️",
    title: "Proteção, não Lucro Máximo",
    description:
      "Nosso foco é garantir que o produtor não quebre e não perca sua terra para o banco. Sobrevivência primeiro.",
  },
  {
    icon: "🎯",
    title: "Ações Simples, não Gráficos",
    description:
      "Em vez de dashboards complexos, o app entrega decisões binárias: faça isso agora, ou espere. Simples assim.",
  },
  {
    icon: "🌐",
    title: "Visão Global no Celular",
    description:
      "Cruza Selic, embargos, câmbio, clima e preços de commodities em tempo real para decisões locais.",
  },
  {
    icon: "📄",
    title: "Dossiê para o Banco",
    description:
      "Gere um PDF blindado em 1 clique mostrando que sua fazenda é bem gerida. Negocie melhores taxas sem arriscar a terra.",
  },
];

const techStack = [
  { label: "React Native", desc: "Mobile", icon: "📱" },
  { label: "Node.js / Python", desc: "Backend + IA", icon: "⚙️" },
  { label: "PostgreSQL", desc: "Banco na nuvem", icon: "🗄️" },
  { label: "Offline-First", desc: "WatermelonDB", icon: "📴" },
  { label: "APIs B3 / INMET", desc: "Dados reais", icon: "🌐" },
];

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-agro-950 to-agro-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-agro-400 font-semibold">
            Por que investir nessa ideia?
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Diferenciais <span className="gradient-text">Competitivos</span>
          </h2>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-agro-950/60 border border-agro-700/30 hover:border-agro-500/50 transition-all cursor-default group"
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                {d.icon}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-sm text-agro-300/70 leading-relaxed">
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Arquitetura Tecnológica
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.label}
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-agro-800/40 border border-agro-600/30 hover:border-agro-400/50 transition-colors"
              >
                <span className="text-xl">{tech.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {tech.label}
                  </p>
                  <p className="text-xs text-agro-400">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Big quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl text-agro-200 font-light italic leading-relaxed">
            &ldquo;Mais importante do que tentar deixar o produtor bilionário,{" "}
            <strong className="text-agro-400 not-italic">
              o AgroSolution garante que ele não quebre e não perca sua terra
              para o banco.
            </strong>
            &rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
