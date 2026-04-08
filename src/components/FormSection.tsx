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
          className="max-w-lg mx-auto text-center p-10 rounded-2xl border border-agro-700/30 bg-agro-950/60 backdrop-blur-sm"
        >
          <span className="text-5xl block mb-6">📝</span>
          <p className="text-agro-200 mb-8 leading-relaxed">
            Leva menos de 2 minutos. Suas respostas nos ajudam a construir a
            melhor ferramenta possível para o produtor rural.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFStkZ_xmQNn4aropsWachk0VhYpdPVb08WnyC8Ee21eMM7A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-agro-400 hover:bg-agro-300 text-agro-950 font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-agro-400/30 text-lg"
          >
            Responder Formulário
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
