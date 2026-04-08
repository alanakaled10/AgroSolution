import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          50: "#e6fff0",
          100: "#b3ffd6",
          200: "#18FF6D",
          300: "#04E824",
          400: "#138A36",
          500: "#138A36",
          600: "#285238",
          700: "#285238",
          800: "#34403A",
          900: "#2a3530",
          950: "#1a2420",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
