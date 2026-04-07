"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-agro-950 border-t border-agro-800/30 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌽</span>
            <span className="text-lg font-bold text-white">
              Agro<span className="text-agro-400">Solution</span>
            </span>
          </div>
          <p className="text-sm text-agro-400/60 text-center">
            Protegendo o futuro do produtor rural com tecnologia e inteligência.
          </p>
          <p className="text-xs text-agro-500/40">
            &copy; {new Date().getFullYear()} AgroSolution
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
