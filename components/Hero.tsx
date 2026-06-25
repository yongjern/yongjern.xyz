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
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto flex flex-col items-center"
      >

        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-sm text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            歡迎使用主流社交媒體聯係! 7天内能回復就會回復! 
          </span>
        </motion.div>

        {/* Name — signature gradient on first name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem]
                     font-bold tracking-tight leading-none mb-5"
        >
          <span className="text-gradient">Yong</span>{" "}
          <span className="text-white/88">Jie Ern</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-light
                     tracking-widest uppercase text-white/38 mb-7"
        >
          Student &amp; Freelance
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-white/52 leading-relaxed text-base md:text-lg mb-10"
        >
          20 y.o Student, Now waiting at University Applies<br></br>目前個人對於自動化 AI, 生成式 AI 感興趣，但未針對這些技能來系統性培訓<br></br>
          針對以上興趣歡迎查看我的項目及經驗
          <br />
          <span className="text-white/30 text-sm mt-1 inline-block">
            大部分專案使用 AI 生成，擁有微微的 JavaScript 經驗。
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
            查看簡歷 (CV)
          </a>
          <a
            href="#contact"
            className="glass-btn-secondary px-7 py-3 rounded-xl text-sm font-medium text-white/55 hover:text-white/80"
          >
            聯係我
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
