"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Framer Motion stagger helper
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.10 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const copy = locale === "en"
    ? {
        status: "Open to messages on major social platforms. I usually reply within seven days.",
        bio: "I explore AI automation and generative AI by building practical digital products.",
        note: "I use AI to accelerate development while personally handling requirements, integration, testing, and debugging.",
        resume: "View resume",
        contact: "Contact me",
      }
    : {
        status: "歡迎透過社群平台聯絡，我通常會在七天內回覆。",
        bio: "我透過實際產品探索 AI 自動化與生成式 AI。",
        note: "我使用 AI 加速開發，並親自負責需求拆解、整合、測試與除錯。",
        resume: "查看履歷",
        contact: "聯絡我",
      };

  return (
    <section className="relative min-h-[92svh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto flex flex-col items-center"
      >

        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-sm text-white/75 mb-7 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {copy.status}
          </span>
        </motion.div>

        {/* Name — signature gradient on first name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem]
                     font-bold tracking-tight leading-[1.08] mb-5"
        >
          <span className="text-gradient inline-block pb-[0.08em] -mb-[0.08em]">Yong</span>{" "}
          <span className="text-white/88">Jie Ern</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-light
                     tracking-widest uppercase text-white/65 mb-7"
        >
          Student &amp; Freelancer
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-white/75 leading-relaxed text-base md:text-lg mb-9 md:mb-10"
        >
          {copy.bio}
          <br />
          <span className="text-white/60 text-sm mt-2 inline-block">
            {copy.note}
          </span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#resume"
            className="glass-btn-primary px-7 py-3 rounded-xl text-sm font-medium text-white/90"
          >
            {copy.resume}
          </a>
          <a
            href="#contact"
            className="glass-btn-secondary px-7 py-3 rounded-xl text-sm font-medium text-white/75 hover:text-white"
          >
            {copy.contact}
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
