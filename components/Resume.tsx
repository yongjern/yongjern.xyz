"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, ArrowUpRight } from "lucide-react";

// ────────────────────────────────────────────────────────────────────────────
// ⬇  CV / Resume link — replace this constant with your preferred URL.
//
//    Option A (GitHub raw PDF — direct download):
//      https://raw.githubusercontent.com/yongjern/yongjern/main/CV%20YJE.pdf
//
//    Option B (GitHub blob page — shows preview first):
//      https://github.com/yongjern/yongjern/blob/main/CV%20YJE.pdf
//
//    Option C: host the PDF on your own domain, e.g.
//      https://yongjern.xyz/CV_YJE.pdf
// ────────────────────────────────────────────────────────────────────────────
const CV_URL =
  "https://raw.githubusercontent.com/yongjern/yongjern/main/CV%20YJE.pdf";
// ← REPLACE ABOVE URL when you have a permanent hosted link

export default function Resume() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 md:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-3">
            Résumé / CV
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">
            My full background
          </h2>
        </motion.div>

        {/* Hero CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row
                          items-start md:items-center justify-between gap-8">

            {/* Left: icon + copy */}
            <div className="flex items-start gap-5">
              <div className="p-3.5 rounded-2xl glass-pill shrink-0">
                <FileText size={24} className="text-white/55" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/88 mb-2 tracking-tight">
                 我的簡歷 (或者算是更詳細的自我介紹)
                </h3>
                <p className="text-sm text-white/45 leading-relaxed max-w-sm">
                  學習經驗，取得什麽成就，都在這個文件裏！<br></br> 點任何的按鈕都會讓你下載我的 CV, 我會在看如何搞定綫上預覽的部分!
                </p>
              </div>
            </div>

            {/* Right: buttons */}
            <div className="flex flex-wrap gap-3 shrink-0">

              {/* Primary — download */}
              <motion.a
                href={CV_URL}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glass-btn-primary inline-flex items-center gap-2
                           px-6 py-3 rounded-xl text-sm font-medium text-white/90"
              >
                <Download size={15} />
                下載我的簡歷 (.pdf)
              </motion.a>

              {/* Secondary — view in new tab */}
              <motion.a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glass-btn-secondary inline-flex items-center gap-2
                           px-6 py-3 rounded-xl text-sm font-medium text-white/50
                           hover:text-white/75"
              >
                查看完整的簡歷
                <ArrowUpRight size={14} />
              </motion.a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
