import type { Metadata } from "next";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import SkillsAndCertificates from "@/components/SkillsAndCertificates";

export const metadata: Metadata = {
  title: "Yong Jie Ern · Certificates",
  description: "Yong Jie Ern's licenses and certifications.",
  alternates: {
    canonical: "https://yongjern.xyz/en/certificates",
    languages: {
      en: "https://yongjern.xyz/en/certificates",
      "zh-TW": "https://yongjern.xyz/certificates",
    },
  },
};

export default function EnglishCertificatesPage() {
  return (
    <>
      <AuroraBackground />
      <Navbar locale="en" />
      <main lang="en" className="relative z-10">
        <SkillsAndCertificates locale="en" certificatesOnly />
      </main>
    </>
  );
}