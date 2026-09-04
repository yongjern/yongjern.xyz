import type { Metadata } from "next";
import AuroraBackground from "@/components/AuroraBackground";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import SkillsAndCertificates from "@/components/SkillsAndCertificates";

export const metadata: Metadata = {
  title: "Yong Jie Ern · Portfolio",
  description: "Yong Jie Ern's projects, skills, certifications, resume, and contact details.",
  alternates: {
    canonical: "https://yongjern.xyz/en",
    languages: {
      "en": "https://yongjern.xyz/en",
      "zh-TW": "https://yongjern.xyz",
    },
  },
  openGraph: {
    title: "Yong Jie Ern · Portfolio",
    description: "Explore Yong Jie Ern's projects, skills, certifications, and experience.",
    url: "https://yongjern.xyz/en",
    siteName: "Yong Jie Ern's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishHome() {
  return (
    <>
      <AuroraBackground />
      <Navbar locale="en" />

      <main lang="en" className="relative z-10">
        <Hero locale="en" />
        <Projects locale="en" />
        <SkillsAndCertificates locale="en" featuredOnly certificateLimit={5} />
        <Resume locale="en" />
        <Contact locale="en" />

        <footer className="py-10 text-center text-white/25 text-sm">
          <div className="section-divider mb-8 max-w-2xl mx-auto" />
          <p>
            © {new Date().getFullYear()} Yong Jie Ern. Built with Next.js &amp; Tailwind CSS.
          </p>
        </footer>
      </main>
    </>
  );
}