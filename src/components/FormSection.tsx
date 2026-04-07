"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="formulario"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-agro-900 to-agro-950 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-agro-400 font-semibold">
            Sua opinião importa
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            O que você <span className="gradient-text">achou?</span>
          </h2>
          <p className="text-agro-300/70 max-w-xl mx-auto text-lg">
            Estamos na fase de validação dessa ideia. Sua opinião como
            profissional do setor é fundamental para construirmos a melhor
            solução possível.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl overflow-hidden border border-agro-700/30 bg-white/5 backdrop-blur-sm"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfFStkZ_xmQNn4aropsWachk0VhYpdPVb08WnyC8Ee21eMM7A/viewform?embedded=true"
            width="100%"
            height="900"
            className="w-full border-0"
            title="Formulário de Opinião - AgroSolution"
          >
            Carregando…
          </iframe>
        </motion.div>
      </div>
    </section>
  );
}
