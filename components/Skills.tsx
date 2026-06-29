"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Skill categories ─────────────────────────────────────────────────────────
const categories = [
  {
    label: "我會熟練使用以下AI :",
    colour: "blue",
    skills: ["Gemini (Flash/Pro)", "Claude Opus", "Meta AI (Video Generation)", "Manus AI", "Github Copilot (Coding)", "ChatGPT"],
  },
  {
    label: "我會使用下列辦公軟件 :",
    colour: "purple",
    skills: ["Word", "Powerpoint", "Office", "Google Forms", "剪映 (影片剪輯)", "Canva (圖文設計)"],
  },
  {
    label: "我有以下的娛樂技能 (如果你需要可以表演LA) :",
    colour: "teal",
    skills: ["Singing 唱歌", "Dad Jokes/Comedy 逗人開心的角色", "Non-profesional Counselor 傾聽者/建議者"],
  },
  {
    label: "我對這些文件有基礎知識 :",
    colour: "indigo",
    skills: ["HTML", "JavaScript", "CSS", "Markdown", "Minecraft Server 相關config"],
  },
];

// ─── Colour tokens per category ───────────────────────────────────────────────
const pillColour: Record<string, string> = {
  blue:   "bg-blue-500/[0.10]   text-blue-300/70   border-blue-400/[0.16]",
  purple: "bg-purple-500/[0.10] text-purple-300/70 border-purple-400/[0.16]",
  teal:   "bg-teal-500/[0.10]   text-teal-300/70   border-teal-400/[0.16]",
  indigo: "bg-indigo-500/[0.10] text-indigo-300/70 border-indigo-400/[0.16]",
};

const dotColour: Record<string, string> = {
  blue:   "bg-blue-400/60",
  purple: "bg-purple-400/60",
  teal:   "bg-teal-400/60",
  indigo: "bg-indigo-400/60",
};

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-3">
            技能
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
            要看我的技能點加在什麽上面嗎? 這裏給你看 :
          </h2>
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16,1,0.3,1] } }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-shadow duration-300"
            >
              {/* Category label */}
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${dotColour[cat.colour]}`} />
                <p className="text-xs tracking-widest uppercase text-white/40 font-medium">
                  {cat.label}
                </p>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={`text-xs px-3 py-1 rounded-full border ${pillColour[cat.colour]} transition-colors duration-200`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
