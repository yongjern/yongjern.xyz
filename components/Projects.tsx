"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Server, ExternalLink, Zap, Rss } from "lucide-react";

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    icon: ShoppingBag,
    eyebrow: "綫上商業 E-Commerce",
    title: "XPStore — 一站式綫上充值中心",
    description:
      "(2025-NOW) 一個專門為綫上玩家打造的軍火庫！有便宜的串流服務，游戲直充服務，及綫上代購服務等。在之前專門搭建網站，處理金流及訂單。目前正在進行轉型計劃。",
    tags: ["Wordpress (從0開始架設)", "WooCommerce (國際/國内金流處理)", "Discord社群架設", "轉型中"],
    tagColor: "blue",
    // ── Replace with your live XPStore URL ──────────────────────────────────
    href: "https://example.com",
    glowClass: "hover:shadow-glass-blue",
  },
  {
    icon: Server,
    eyebrow: "個人架設",
    title: "yongjern.xyz",
    description:
      "個人架設網站 yongjern.xyz, 及旗下各個網站。内容雖然不一定是我 100% 寫的，但一定都有被我調試過! (此描述不包含部落格)",
    tags: ["Vercel 架設網站", "Github 存儲", "擁有 WordPress 架設經驗", "個人網站", "網域購買"],
    tagColor: "teal",
    href: "https://yongjern.xyz",
    glowClass: "hover:shadow-glass-teal",
  },
  {
    icon: Rss,
    eyebrow: "部落格架設",
    title: "Yong's Markdown",
    description:
      "分享自己寫的文章，包括 AI 實戰，政治評論等等。歡迎在那邊查看我的意見",
    tags: ["意見發表", "Blog", "Next.js"],
    tagColor: "teal",
    href: "https://blog.yongjern.xyz",
    glowClass: "hover:shadow-glass-teal",
  },
];

// ─── Tag colour map ───────────────────────────────────────────────────────────
const tagColours: Record<string, string> = {
  blue:   "bg-blue-500/[0.12]   text-blue-300/75   border-blue-400/[0.18]",
  teal:   "bg-teal-500/[0.12]   text-teal-300/75   border-teal-400/[0.18]",
  purple: "bg-purple-500/[0.12] text-purple-300/75 border-purple-400/[0.18]",
};

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Projects() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-3">
            Projects &amp; Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
            Things I've built &amp; run
          </h2>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((p) => {
            const Icon = p.icon;
            const tagCls = tagColours[p.tagColor] ?? tagColours.blue;

            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16,1,0.3,1] } }}
                className={`glass-card rounded-2xl p-7 flex flex-col gap-5 group ${p.glowClass} transition-shadow duration-300`}
              >
                {/* Icon + eyebrow */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl glass-pill">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="p-2 rounded-lg text-white/25 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/30 mb-1.5">
                    {p.eyebrow}
                  </p>
                  <h3 className="text-xl font-semibold text-white/88 mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/48 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-0.5 rounded-full border ${tagCls}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech stack inline summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 glass-card rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="p-2.5 rounded-xl glass-pill shrink-0">
            <Zap size={18} className="text-white/55" />
          </div>
          <div>
            <p className="text-sm font-medium text-white/70 mb-1">
              Full-stack capability
            </p>
            <p className="text-xs text-white/38 leading-relaxed">
              React · Next.js · Astro · WordPress · WooCommerce · n8n automation · Linux server admin
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
