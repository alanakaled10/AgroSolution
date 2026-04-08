"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-agro-950"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full bg-agro-400/8 blur-[90px]"
          style={{ top: "-10%", right: "-5%" }}
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full bg-agro-300/10 blur-[90px]"
          style={{ bottom: "5%", left: "-5%" }}
          animate={{ y: [0, -30, 0], x: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute w-[320px] h-[320px] rounded-full bg-agro-500/8 blur-[90px]"
          style={{ top: "40%", left: "50%" }}
          animate={{ y: [0, 35, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              O escudo financeiro do{" "}
              <span className="gradient-text">produtor rural moderno.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-agro-200/60 max-w-lg mb-8 leading-relaxed"
            >
              Plataforma preditiva que cruza dados financeiros, clima e mercado
              global para transformar complexidade em{" "}
              <strong className="text-white">decisões claras e seguras</strong>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { value: "4", label: "Pilares inteligentes" },
                { value: "100%", label: "Offline-first" },
                { value: "IA", label: "Prescritiva" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-agro-800/40 border border-agro-600/20"
                >
                  <span className="text-agro-300 font-bold text-sm">{stat.value}</span>
                  <span className="text-agro-200/40 text-xs">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#problema"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-agro-400 hover:bg-agro-300 text-agro-950 font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-agro-400/20"
              >
                Conheça a Solução
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-agro-600/40 text-agro-200 hover:bg-agro-800/40 font-semibold rounded-full transition-all hover:scale-105"
              >
                Deixe sua Opinião
              </a>
            </motion.div>
          </div>

          {/* Right side - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind dashboard */}
              <div className="absolute -inset-4 bg-agro-400/5 rounded-3xl blur-2xl" />

              {/* Dashboard card */}
              <div className="relative rounded-2xl border border-agro-600/30 bg-agro-900/80 backdrop-blur-sm p-5 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-agro-400/60" />
                    <div className="w-3 h-3 rounded-full bg-agro-600/40" />
                    <div className="w-3 h-3 rounded-full bg-agro-800/40" />
                  </div>
                  <span className="text-xs text-agro-200/30 font-mono">Dashboard de Sobrevivência</span>
                </div>

                {/* 3 main cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-agro-950/60 border border-agro-700/20">
                    <p className="text-[10px] text-agro-200/40 mb-1">Saldo em Caixa</p>
                    <p className="text-lg font-bold text-agro-300">R$ 284k</p>
                    <p className="text-[10px] text-agro-400">↑ 12% vs mês</p>
                  </div>
                  <div className="p-3 rounded-xl bg-agro-950/60 border border-agro-700/20">
                    <p className="text-[10px] text-agro-200/40 mb-1">Risco Climático</p>
                    <p className="text-lg font-bold text-agro-200">Baixo</p>
                    <div className="w-full h-1.5 bg-agro-800 rounded-full mt-1">
                      <div className="w-1/4 h-full bg-agro-400 rounded-full" />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-agro-950/60 border border-agro-700/20">
                    <p className="text-[10px] text-agro-200/40 mb-1">Soja (Chicago)</p>
                    <p className="text-lg font-bold text-agro-300">$11.52</p>
                    <p className="text-[10px] text-agro-200/40">↓ 2.3% semana</p>
                  </div>
                </div>

                {/* Chart area */}
                <div className="p-4 rounded-xl bg-agro-950/60 border border-agro-700/20 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-agro-200/50">Receita vs Custos — Safra 24/25</span>
                    <span className="text-[10px] text-agro-400 font-mono">Atualizado agora</span>
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-2 h-24">
                    {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-agro-600 to-agro-400 opacity-70"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.8 + i * 0.08 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-agro-200/30">Jan</span>
                    <span className="text-[9px] text-agro-200/30">Jun</span>
                    <span className="text-[9px] text-agro-200/30">Dez</span>
                  </div>
                </div>

                {/* Farm map preview */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-agro-950/60 border border-agro-700/20">
                    <p className="text-[10px] text-agro-200/40 mb-2">Mapa da Fazenda</p>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-6 rounded bg-agro-400/40 flex items-center justify-center text-[8px] text-agro-200/60">N</div>
                      <div className="h-6 rounded bg-agro-400/60 flex items-center justify-center text-[8px] text-agro-200/60">NE</div>
                      <div className="h-6 rounded bg-agro-400/30 flex items-center justify-center text-[8px] text-agro-200/60">L</div>
                      <div className="h-6 rounded bg-agro-300/40 flex items-center justify-center text-[8px] text-agro-200/60">S</div>
                      <div className="h-6 rounded bg-agro-600/60 flex items-center justify-center text-[8px] text-agro-200/60">SE</div>
                      <div className="h-6 rounded bg-agro-400/50 flex items-center justify-center text-[8px] text-agro-200/60">O</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-agro-950/60 border border-agro-700/20">
                    <p className="text-[10px] text-agro-200/40 mb-2">Alerta IA</p>
                    <div className="bg-agro-800/40 rounded-lg p-2 border border-agro-600/10">
                      <p className="text-[10px] text-agro-200/70 leading-relaxed">
                        &ldquo;Ureia caiu 5%. Chuva em 10 dias no Talhão Sul.&rdquo;
                      </p>
                      <div className="flex gap-1 mt-2">
                        <span className="px-2 py-0.5 bg-agro-400 text-agro-950 text-[8px] rounded font-bold">Comprar</span>
                        <span className="px-2 py-0.5 bg-agro-800/60 text-agro-200/50 text-[8px] rounded border border-agro-700/20">Simular</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-agro-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
