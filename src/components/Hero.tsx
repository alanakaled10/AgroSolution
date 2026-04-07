"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-agro-950 via-agro-900 to-navy-950 grain-overlay"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-agro-500/10"
            style={{
              width: `${80 + i * 60}px`,
              height: `${80 + i * 60}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-6xl sm:text-8xl">🌽</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Agro<span className="gradient-text">Solution</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl lg:text-3xl text-agro-200 font-light mb-6 text-balance"
        >
          O escudo financeiro e o assistente de bolso
          <br />
          <span className="text-gold-400 font-semibold">
            do produtor rural moderno.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-agro-300/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Uma plataforma <strong className="text-agro-200">preditiva e prescritiva</strong> que
          cruza dados financeiros da fazenda, variações climáticas e o cenário
          macroeconômico global — para dizer ao produtor não apenas{" "}
          <em>o que aconteceu</em>, mas{" "}
          <strong className="text-white">o que ele deve fazer agora</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#problema"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-agro-500 hover:bg-agro-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-agro-500/30"
          >
            Conheça a Solução
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-agro-400/50 text-agro-300 hover:bg-agro-400/10 font-semibold rounded-full transition-all hover:scale-105"
          >
            Deixe sua Opinião
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-agro-400/60"
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
    </section>
  );
}
