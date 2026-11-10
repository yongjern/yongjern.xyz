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
        { label: "Skills", href: "#skills" },
        { label: "Certificates", href: "/en/certificates" },
        { label: "Resume", href: "#resume" },
        { label: "Contact", href: "#contact" },
        { label: "Book A Time", href: "/booking" },
      ]
    : [
        { label: "專案", href: "#projects" },
        { label: "技能", href: "#skills" },
        { label: "證書", href: "/certificates" },
        { label: "履歷", href: "#resume" },
        { label: "聯絡方式", href: "#contact" },
        { label: "預約時段", href: "/booking" },
      ];
  const languageHref = locale === "en" ? "/" : "/en";
  const languageLabel = locale === "en" ? "中文" : "EN";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const navLabel = locale === "en" ? "Primary navigation" : "主要導覽";
  const menuLabel = menuOpen
    ? locale === "en" ? "Close menu" : "關閉選單"
    : locale === "en" ? "Open menu" : "開啟選單";

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
          <a
            href="#"
            aria-label={locale === "en" ? "Back to top" : "返回頁首"}
            className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-white/5 border border-white/10 p-0.5"
          >
            <Image
              src="/media/logo.png"
              alt="Yong Jie Ern"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <nav aria-label={navLabel} className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-3.5 py-1.5 rounded-lg text-sm text-white/75
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
            type="button"
            className="md:hidden p-2 rounded-lg text-white/55 hover:text-white hover:bg-white/[0.06] transition-all"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : "mb-1.5"}`} />
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "opacity-0" : "mb-1.5"}`} />
            <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "-translate-y-[1px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label={navLabel}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1     }}
            exit  ={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mx-4 mt-1 rounded-2xl bg-[#0b1020]/95 backdrop-blur-2xl border border-white/15 shadow-2xl px-3 py-3 flex flex-col gap-0.5"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm text-white/75 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href={languageHref}
              onClick={() => setMenuOpen(false)}
              className="mt-1.5 px-3 py-2 rounded-xl border border-white/15 text-sm text-white/75 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {languageLabel}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
