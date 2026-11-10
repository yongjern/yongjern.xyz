"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";

type Locale = "zh" | "en";

const skillCategories = [
  {
    label: { zh: "AI 與自動化工作流", en: "AI and automation workflows" },
    colour: "blue",
    skills: {
      zh: ["提示設計", "AI 輔助研究", "工作流原型", "工具評估", "驗證與除錯"],
      en: ["Prompt design", "AI-assisted research", "Workflow prototyping", "Tool evaluation", "Verification & debugging"],
    },
  },
  {
    label: { zh: "內容與生產力", en: "Content and productivity" },
    colour: "purple",
    skills: {
      zh: ["文件編排", "簡報設計", "表單設計", "影片剪輯", "視覺設計"],
      en: ["Document design", "Presentations", "Form design", "Video editing", "Visual design"],
    },
  },
  {
    label: { zh: "創意與人際技能", en: "Creative and people skills" },
    colour: "teal",
    skills: {
      zh: ["歌唱", "喜劇", "積極聆聽", "同儕支持"],
      en: ["Singing", "Comedy", "Active listening", "Peer support"],
    },
  },
  {
    label: { zh: "技術基礎", en: "Technical foundations" },
    colour: "indigo",
    skills: {
      zh: ["HTML", "CSS", "JavaScript", "Next.js", "Markdown"],
      en: ["HTML", "CSS", "JavaScript", "Next.js", "Markdown"],
    },
  },
];

export const certificates = [
  {
    title: "Pengenalan kepada Kecerdasan Buatan via Rakyat Digital portal",
    issuer: "Ministry of Digital Malaysia",
    issued: "Jul 2026",
    featured: true,
    certificateFile: undefined,
    credentialId: "U2FsdGVkX1s1L2a3S4h9zkT8IaraTs2gl8CL4gzqpjtJTfXJp1L2u3SDoe1Q2u3A4l",
    href: "https://portal.rakyatdigital.gov.my/#/badge?id=U2FsdGVkX1s1L2a3S4h9zkT8IaraTs2gl8CL4gzqpjtJTfXJp1L2u3SDoe1Q2u3A4l",
  },
  {
    title: "Pengenalan kepada Kecerdasan Buatan via Rakyat Digital portal",
    issuer: "Ministry of Digital Malaysia",
    issued: "Jul 2026",
    featured: true,
    certificateFile: undefined,
    credentialId: "U2FsdGVkX19Ajcu7SmvVqCmjVp1L2u3Ss1L2a3S4hpfBSpp1L2u3Sv39HwrTKx0e1Q2u3A4l",
    href: "https://portal.rakyatdigital.gov.my/#/badge?id=U2FsdGVkX19Ajcu7SmvVqCmjVp1L2u3Ss1L2a3S4hpfBSpp1L2u3Sv39HwrTKx0e1Q2u3A4l",
  },
  {
    title: "Gemini Certified Educator",
    issuer: "Google for Education",
    issued: "Oct 2025",
    expires: "Oct 2028",
    featured: true,
    certificateFile: undefined,
    credentialId: "164362978",
    href: "https://edu.google.accredible.com/d1199c6b-b9d6-40e9-bc53-3aca35701b24",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    issued: "Jul 2024",
    featured: false,
    certificateFile: undefined,
    credentialId: "7a8b06",
    href: "https://canva.com/designschool/certification-award/7a8b0685-4e8c-403b-8ad2-d5fef58763a8",
  },
  {
   title: "AI Ready Malaysia: Edisi Pelajar",
   issuer: "Pepper Labs & AVPN (Supported by Google.org & ADB)",
   issued: "2026-08-02",
  featured: true,
  certificateFile: undefined,
   credentialId: "avp6rord4y",
   href: "https://pepper-s-site-1c7b.thinkific.com/certificates/avp6rord4y"
  },
  {
  title: "AI For MY Future",
  issuer: "Microsoft & Pepper Labs",
  issued: "2026-08-02",
  featured: true,
  certificateFile: undefined,
  credentialId: "gbzahami2c",
  href: "https://pepper-s-site-1c7b.thinkific.com/certificates/gbzahami2c"
 },
];

const localCertificates = [
  { file: "generative-ai.pdf", title: "Generative AI", featured: true },
  { file: "agentic-ai-for-all.pdf", title: "Agentic AI for All", featured: true },
  { file: "ai-nation-2030.pdf", title: "AI Nation 2030", featured: true },
  { file: "ai-safety.pdf", title: "AI Safety", featured: true },
  { file: "ai-untuk-rakyat.pdf", title: "AI Untuk Rakyat", featured: true },
  { file: "cloud-untuk-rakyat.pdf", title: "Cloud Untuk Rakyat", featured: false },
  { file: "cybersecurity.pdf", title: "Cybersecurity", featured: false },
].map(({ file, title, featured }) => ({
  certificateFile: `/certificate/${file}`,
  title,
  issuer: "Certificate PDF",
  issued: "2026",
  expires: undefined,
  credentialId: file,
  href: `/certificate/${file}`,
  featured,
}));

const allCertificates = [...localCertificates, ...certificates];
// https://pepper-s-site-1c7b.thinkific.com/certificates/avp6rord4y
const pillColour: Record<string, string> = {
  blue: "bg-blue-500/[0.14] text-blue-200/90 border-blue-300/[0.26]",
  purple: "bg-purple-500/[0.14] text-purple-200/90 border-purple-300/[0.26]",
  teal: "bg-teal-500/[0.14] text-teal-200/90 border-teal-300/[0.26]",
  indigo: "bg-indigo-500/[0.14] text-indigo-200/90 border-indigo-300/[0.26]",
};

const dotColour: Record<string, string> = {
  blue: "bg-blue-400/60",
  purple: "bg-purple-400/60",
  teal: "bg-teal-400/60",
  indigo: "bg-indigo-400/60",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function SkillsAndCertificates({
  locale = "zh",
  certificatesOnly = false,
  featuredOnly = false,
  certificateLimit,
}: { locale?: Locale; certificatesOnly?: boolean; featuredOnly?: boolean; certificateLimit?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const copy = locale === "en"
    ? {
        eyebrow: "Skills and certificates",
        heading: "What I work with and what I have earned.",
        certificates: "Licenses & certifications",
        issued: "Issued",
        expires: "Expires",
        credential: "Credential ID",
        show: "Show credential",
        viewFile: "View certificate",
        viewAll: "View all certificates",
      }
    : {
        eyebrow: "技能與證書",
        heading: "我的實作能力，以及一路取得的認證。",
        certificates: "證書與認證",
        issued: "頒發於",
        expires: "有效期至",
        credential: "證書編號",
        show: "查看證書",
        viewFile: "查看證書文件",
        viewAll: "查看所有證書",
      };

  return (
    <section id={certificatesOnly ? "certificates" : "skills"} className="py-24 md:py-36 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {!certificatesOnly && <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/55 mb-3">{copy.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight">{copy.heading}</h2>
        </motion.div>}

        {!certificatesOnly && <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.label.en}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-shadow duration-300"
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${dotColour[category.colour]}`} />
                <p className="text-xs tracking-widest uppercase text-white/65 font-medium">
                  {category.label[locale]}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills[locale].map((skill) => (
                  <span key={skill} className={`text-xs px-3 py-1 rounded-full border ${pillColour[category.colour]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 mb-8 flex items-center gap-3"
        >
          <Award size={20} className="text-amber-300/70" />
          <h3 className="text-xl md:text-2xl font-semibold text-white/85">{copy.certificates}</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {allCertificates
            .filter((certificate) => !featuredOnly || certificate.featured)
            .slice(0, certificateLimit)
            .map((certificate) => (
            <motion.article
              key={certificate.credentialId}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-white/85 leading-snug">{certificate.title}</h4>
                  <p className="mt-1.5 text-sm text-white/65">{certificate.issuer}</p>
                </div>
                <div className="p-2.5 rounded-xl glass-pill shrink-0">
                  <Award size={18} className="text-amber-300/65" />
                </div>
              </div>

              <div className="text-xs text-white/60 leading-relaxed">
                <p>{copy.issued} {certificate.issued}{certificate.expires ? ` · ${copy.expires} ${certificate.expires}` : ""}</p>
                {!certificate.certificateFile && (
                  <p className="mt-2 break-all">{copy.credential}: {certificate.credentialId}</p>
                )}
              </div>

              {certificate.certificateFile && (
                <a
                  href={certificate.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <FileText size={14} />
                  {copy.viewFile}
                </a>
              )}

              <a
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 text-sm text-indigo-200/70 hover:text-indigo-100 transition-colors"
              >
                {copy.show}
                <ExternalLink size={14} />
              </a>
            </motion.article>
          ))}
        </motion.div>

        {featuredOnly && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <a
              href={locale === "en" ? "/en/certificates" : "/certificates"}
              className="glass-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white"
            >
              {copy.viewAll}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
