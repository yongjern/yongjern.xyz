"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Locale = "zh" | "en";

export default function Navbar({ locale = "zh" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = locale === "en"
    ? [
        { label: "Projects", href: "#projects" },
        { label: "Skills & certificates", href: "#skills" },
        { label: "Resume", href: "#resume" },
        { label: "Contact", href: "#contact" },
      ]
    : [
        { label: "项目", href: "#projects" },
        { label: "技能与证书", href: "#skills" },
        { label: "简历", href: "#resume" },
        { label: "联系方式", href: "#contact" },
      ];
  const languageHref = locale === "en" ? "/" : "/en";
  const languageLabel = locale === "en" ? "中文" : "EN";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`
          transition-all duration-500 ease-out
          ${scrolled
            ? "mx-4 mt-3 md:mx-8 rounded-2xl glass-card"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-white/5 border border-white/10 p-0.5">
            <Image
              src="/media/logo.png"
              alt="Yong Jie Ern"
              width={80}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-3.5 py-1.5 rounded-lg text-sm text-white/55
                  hover:text-white/90 hover:bg-white/[0.06]
                  transition-all duration-200
                "
              >
                {link.label}
              </a>
            ))}
            <a
              href={languageHref}
              className="ml-2 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-medium text-white/65 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {languageLabel}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/55 hover:text-white hover:bg-white/[0.06] transition-all"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
            <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
            <span className="block w-5 h-px bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1     }}
            exit  ={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mx-4 mt-1 rounded-2xl glass-card px-4 py-4 flex flex-col gap-1"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm text-white/65 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href={languageHref}
              className="mt-2 px-3 py-2.5 rounded-xl border border-white/10 text-sm text-white/65 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {languageLabel}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
