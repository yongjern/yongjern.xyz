import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        // Low-saturation aurora palette
        "aurora-base":  "#070a14",
        "aurora-navy":  "#111630",
        "aurora-indigo":"#1a2060",
        "aurora-violet":"#2a1545",
        "aurora-teal":  "#0d2436",
      },
      animation: {
        "aurora-1": "aurora1 28s ease-in-out infinite alternate",
        "aurora-2": "aurora2 34s ease-in-out infinite alternate",
        "aurora-3": "aurora3 40s ease-in-out infinite alternate",
        "aurora-4": "aurora4 24s ease-in-out infinite alternate",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-y": "bounceY 2s ease-in-out infinite",
      },
      keyframes: {
        aurora1: {
          "0%":   { transform: "translate(0%, 0%) scale(1)" },
          "33%":  { transform: "translate(4%, 7%) scale(1.08)" },
          "66%":  { transform: "translate(-2%, 3%) scale(0.96)" },
          "100%": { transform: "translate(3%, -4%) scale(1.04)" },
        },
        aurora2: {
          "0%":   { transform: "translate(0%, 0%) scale(1)" },
          "33%":  { transform: "translate(-6%, -4%) scale(1.1)" },
          "66%":  { transform: "translate(4%, 6%) scale(0.93)" },
          "100%": { transform: "translate(-3%, 2%) scale(1.05)" },
        },
        aurora3: {
          "0%":   { transform: "translate(0%, 0%) scale(1)" },
          "33%":  { transform: "translate(5%, -6%) scale(1.06)" },
          "66%":  { transform: "translate(-4%, 4%) scale(0.97)" },
          "100%": { transform: "translate(2%, 5%) scale(1.02)" },
        },
        aurora4: {
          "0%":   { transform: "translate(0%, 0%) scale(1)" },
          "50%":  { transform: "translate(-5%, 3%) scale(1.07)" },
          "100%": { transform: "translate(4%, -4%) scale(0.95)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(8px)" },
        },
      },
      backdropBlur: {
        "4xl": "80px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
        "glass-lg": "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
        "glass-blue": "0 8px 32px rgba(99,102,241,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
        "glass-purple": "0 8px 32px rgba(168,85,247,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
        "glass-teal": "0 8px 32px rgba(20,184,166,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
