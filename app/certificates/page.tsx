import type { Metadata } from "next";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import SkillsAndCertificates from "@/components/SkillsAndCertificates";

export const metadata: Metadata = {
  title: "Yong Jie Ern · Certificates",
  description: "Yong Jie Ern's licenses and certifications.",
  alternates: {
    canonical: "https://yongjern.xyz/certificates",
    languages: {
      "zh-TW": "https://yongjern.xyz/certificates",
      en: "https://yongjern.xyz/en/certificates",
    },
  },
};

export default function CertificatesPage() {
  return (
    <>
      <AuroraBackground />
      <Navbar locale="zh" />
      <main className="relative z-10">
        <SkillsAndCertificates locale="zh" certificatesOnly />
      </main>
    </>
  );
}