"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gauge, Server, ExternalLink, Zap, Rss, Wifi } from "lucide-react";

// ─── Project data ────────────────────────────────────────────────────────────
const projectsZh = [
  {
    icon: Wifi,
    eyebrow: "校園網路工具",
    title: "UMKWiFi",
    description:
      "協助 UMK 學生在支援的校園 Wi-Fi 登入頁面自動填寫帳號資料並送出，簡化每次連線流程。",
    role: "開發 Manifest V3 瀏覽器擴充功能、測試多個校園據點，並發布至 Microsoft Edge Add-ons。",
    tags: ["Browser Extension", "Manifest V3", "Microsoft Edge", "隱私優先"],
    tagColor: "purple",
    href: "https://wifi.umk4u.tech",
    glowClass: "hover:shadow-glass-purple",
  },
  {
    icon: Gauge,
    eyebrow: "一站式大學網站",
    title: "MyUMK — 整合課表、巴士時刻與常用連結的學生 Dashboard",
    description:
      "為 UMK 學生集中課表、巴士時刻與常用連結，減少在多個系統之間切換。",
    role: "從零架設與整合網站，並設定 WordPress、WooCommerce 與 Discord 社群。",
    tags: ["WordPress", "WooCommerce", "Discord", "持續開發"],
    tagColor: "blue",
    // ── Replace with your live XPStore URL ──────────────────────────────────
    href: "https://myumk.yongjern.xyz",
    glowClass: "hover:shadow-glass-blue",
  },
  {
    icon: Server,
    eyebrow: "個人架設",
    title: "yongjern.xyz",
    description:
      "集中展示我的專案、技能、證書與聯絡方式，並作為其他個人產品的入口。",
    role: "負責需求規劃、AI 輔助開發、整合、測試、除錯、部署與日常維護。",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "GitHub", "網域管理"],
    tagColor: "teal",
    href: "https://yongjern.xyz",
    glowClass: "hover:shadow-glass-teal",
  },
  {
    icon: Rss,
    eyebrow: "部落格架設",
    title: "Yong's Markdown",
    description:
      "記錄 AI 實作、觀點評論與學習筆記，將實驗過程整理成可閱讀的文章。",
    role: "負責內容策劃、撰寫、網站建置與持續維護。",
    tags: ["內容寫作", "Blog", "Next.js"],
    tagColor: "teal",
    href: "https://blog.yongjern.xyz",
    glowClass: "hover:shadow-glass-teal",
  },
];

const projectsEn = [
  {
    icon: Wifi,
    eyebrow: "Campus connectivity tool",
    title: "UMKWiFi",
    description:
      "A browser extension that automatically fills and submits supported UMK campus Wi-Fi login portals, making repeat connections simpler for students.",
    role: "Developed the Manifest V3 extension, tested it across multiple campus locations, and published it on Microsoft Edge Add-ons.",
    tags: ["Browser Extension", "Manifest V3", "Microsoft Edge", "Privacy-first"],
    tagColor: "purple",
    href: "https://wifi.umk4u.tech",
    glowClass: "hover:shadow-glass-purple",
  },
  {
    icon: Gauge,
    eyebrow: "University Dashboard",
    title: "MYUMK",
    description:
      "A single dashboard for UMK students to access timetables, bus schedules, and frequently used links.",
    role: "Built and integrated the site, including WordPress, WooCommerce, and the Discord community.",
    tags: ["WordPress", "WooCommerce", "Discord", "In development"],
    tagColor: "blue",
    href: "https://myumk.yongjern.xyz",
    glowClass: "hover:shadow-glass-blue",
  },
  {
    icon: Server,
    eyebrow: "Personal infrastructure",
    title: "yongjern.xyz",
    description:
      "A central portfolio for my projects, skills, certifications, contact details, and other digital products.",
    role: "I handle planning, AI-assisted development, integration, testing, debugging, deployment, and maintenance.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "GitHub", "Domain management"],
    tagColor: "teal",
    href: "https://yongjern.xyz",
    glowClass: "hover:shadow-glass-teal",
  },
  {
    icon: Rss,
    eyebrow: "Blog",
    title: "Yong's Markdown",
    description:
      "A place for my writing on hands-on AI experiments, political commentary, and other ideas.",
    role: "I plan and write the content while building and maintaining the publishing experience.",
    tags: ["Writing", "Blog", "Next.js"],
    tagColor: "teal",
    href: "https://blog.yongjern.xyz",
    glowClass: "hover:shadow-glass-teal",
  },
];

// ─── Tag colour map ───────────────────────────────────────────────────────────
const tagColours: Record<string, string> = {
  blue:   "bg-blue-500/[0.14]   text-blue-200/90   border-blue-300/[0.28]",
  teal:   "bg-teal-500/[0.14]   text-teal-200/90   border-teal-300/[0.28]",
  purple: "bg-purple-500/[0.14] text-purple-200/90 border-purple-300/[0.28]",
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
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Projects({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const projects = locale === "en" ? projectsEn : projectsZh;
  const copy = locale === "en"
    ? {
        eyebrow: "Selected tech projects",
        heading: "Things I have built and worked on.",
        summary: "Technologies I have used in real projects:",
        role: "My role:",
        visit: "Visit project",
      }
    : {
        eyebrow: "開發及參與專案",
        heading: "這些是我打造和參與過的專案。",
        summary: "我曾在實際專案中使用這些技術：",
        role: "我的工作：",
        visit: "查看專案",
      };

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
          <p className="text-xs tracking-[0.2em] uppercase text-white/55 mb-3">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
            {copy.heading}
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
              <motion.a
                key={p.title}
                variants={cardVariants}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${copy.visit}: ${p.title}`}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16,1,0.3,1] } }}
                className={`glass-card rounded-2xl p-7 flex flex-col gap-5 group ${p.glowClass} transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300`}
              >
                {/* Icon + eyebrow */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl glass-pill">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <span className="p-2 rounded-lg text-white/55 group-hover:text-white/90 group-hover:bg-white/[0.06] transition-all">
                    <ExternalLink size={16} />
                  </span>
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/55 mb-1.5">
                    {p.eyebrow}
                  </p>
                  <h3 className="text-xl font-semibold text-white/88 mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    <span className="font-medium text-white/85">{copy.role}</span>{" "}
                    {p.role}
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
                <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-200/90 group-hover:text-white transition-colors">
                  {copy.visit}
                  <ExternalLink size={14} />
                </span>
              </motion.a>
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
              {copy.summary}
            </p>
            <p className="text-xs text-white/65 leading-relaxed">
              React · Next.js · Astro · Browser Extensions · WordPress · WooCommerce
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
