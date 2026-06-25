"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Youtube, Github, Mail, ArrowUpRight } from "lucide-react";

// ─── Social links — update hrefs as needed ────────────────────────────────────
const socials = [
  {
    id: "youtube",
    label: "YONG",
    sublabel: "YouTube Channel",
    icon: Youtube,
    // ← Replace with your YouTube channel URL
    href: "https://www.youtube.com/@YONG",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,0,0,0.18)]",
    iconColour: "text-red-400/70",
  },
  {
    id: "website",
    label: "yongjern.xyz",
    sublabel: "Personal Domain",
    icon: Globe,
    href: "https://yongjern.xyz",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(99,102,241,0.18)]",
    iconColour: "text-indigo-300/70",
  },
  {
    id: "github",
    label: "yongjern",
    sublabel: "GitHub Profile",
    icon: Github,
    href: "https://github.com/yongjern",
    hoverGlow: "hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]",
    iconColour: "text-white/55",
  },
  {
    id: "email",
    label: "Email Me",
    sublabel: "Direct message",
    icon: Mail,
    // ← Replace with your email address
    href: "mailto:hello@yongjern.xyz",
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
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function Contact() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-3">
            Contact &amp; Socials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
            Let's connect
          </h2>
          <p className="mt-3 text-white/40 text-sm max-w-md">
            Whether it's a project idea, collaboration, or just a hello — I'm
            reachable through any of these.
          </p>
        </motion.div>

        {/* Social cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                    className="text-white/20 group-hover:text-white/45 transition-colors mt-0.5"
                  />
                </div>

                {/* Labels */}
                <div>
                  <p className="text-sm font-semibold text-white/75 mb-0.5 tracking-tight">
                    {s.label}
                  </p>
                  <p className="text-xs text-white/35">
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
