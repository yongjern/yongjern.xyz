"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Server, ExternalLink, Zap } from "lucide-react";

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    icon: ShoppingBag,
    eyebrow: "E-Commerce Platform",
    title: "XPStore",
    description:
      "A self-operated digital goods storefront delivering game credits, premium subscriptions, and exclusive digital services. Handles end-to-end fulfilment through automated n8n workflows.",
    tags: ["Next.js", "WooCommerce", "n8n", "Payment API", "Automation"],
    tagColor: "blue",
    // ── Replace with your live XPStore URL ──────────────────────────────────
    href: "https://xpstore.example.com",
    glowClass: "hover:shadow-glass-blue",
  },
  {
    icon: Server,
    eyebrow: "Personal Infrastructure",
    title: "yongjern.xyz",
    description:
      "Personal domain hosting multiple active projects, a developer blog, and experimental builds. Managed with CI/CD pipelines, Nginx reverse proxy, and n8n-powered deployment hooks.",
    tags: ["Linux VPS", "Nginx", "WordPress", "Astro", "Domain Mgmt"],
    tagColor: "teal",
    href: "https://yongjern.xyz",
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
