"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Youtube, Github, Mail, ArrowUpRight } from "lucide-react";

// ─── Social links — update hrefs as needed ────────────────────────────────────
const socialsZh = [
  {
    id: "youtube",
    label: "Yong.",
    sublabel: "分享歌曲翻唱的 YouTube 頻道。",
    icon: Youtube,
    href: "https://www.youtube.com/@jernyong",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,0,0,0.18)]",
    iconColour: "text-red-400/70",
  },
  {
    id: "github",
    label: "@yongjern",
    sublabel: "查看我的程式碼、原型與開發實驗。",
    icon: Github,
    href: "https://github.com/yongjern",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]",
    iconColour: "text-white/55",
  },
  {
    id: "email",
    label: "Email 聯絡",
    sublabel: "適合正式詢問與合作邀請，通常會在七個工作日內回覆。",
    icon: Mail,
    href: "mailto:jieernyong1207@gmail.com",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(20,184,166,0.18)]",
    iconColour: "text-teal-300/70",
  },
];

const socialsEn = [
  {
    id: "youtube",
    label: "Yong.",
    sublabel: "My YouTube channel for song covers.",
    icon: Youtube,
    href: "https://www.youtube.com/@jernyong",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,0,0,0.18)]",
    iconColour: "text-red-400/70",
  },
  {
    id: "github",
    label: "@yongjern",
    sublabel: "Code, prototypes, and things I am testing.",
    icon: Github,
    href: "https://github.com/yongjern",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]",
    iconColour: "text-white/55",
  },
  {
    id: "email",
    label: "Email",
    sublabel: "For formal enquiries and collaborations. I usually reply within seven working days.",
    icon: Mail,
    href: "mailto:jieernyong1207@gmail.com",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(20,184,166,0.18)]",
    iconColour: "text-teal-300/70",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Contact({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const socials = locale === "en" ? socialsEn : socialsZh;
  const copy = locale === "en"
    ? {
        eyebrow: "Contact and social platforms",
        heading: "Here is where you can reach me.",
        description: "Feel free to send a message. If I do not reply, I probably have not seen it yet.",
      }
    : {
        eyebrow: "聯絡方式與社群平台",
        heading: "你可以透過這些平台聯絡我。",
        description: "歡迎傳送訊息；如果我尚未回覆，可能只是還沒有看到。",
      };

  return (
    <section id="contact" className="py-24 md:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/55 mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
            {copy.heading}
          </h2>
          <p className="mt-3 text-white/65 text-sm max-w-md">
           {copy.description}
          </p>
        </motion.div>

        {/* Social cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.id}
                variants={itemVariants}
                href={s.href}
                target={s.id !== "email" ? "_blank" : undefined}
                rel={s.id !== "email" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.16,1,0.3,1] } }}
                className={`
                  glass-card rounded-2xl p-6 flex flex-col gap-4
                  group cursor-pointer transition-shadow duration-300
                  ${s.hoverGlow}
                `}
              >
                {/* Icon + external link indicator */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl glass-pill">
                    <Icon size={20} className={s.iconColour} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-white/50 group-hover:text-white/85 transition-colors mt-0.5"
                  />
                </div>

                {/* Labels */}
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-0.5 tracking-tight">
                    {s.label}
                  </p>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {s.sublabel}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
