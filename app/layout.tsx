import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const siteFont = localFont({
  src: "../public/fonts/TaipeiSansTCBeta-Regular.ttf",
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yongjern.xyz"),
  title: "yongjern.xyz · 歡迎光臨 Yong 的主頁",
  description: "Yong Jie Ern 的個人網站，收錄 AI、自動化與網頁專案、技能、證書及聯絡方式。",
  keywords: ["Yong Jie Ern", "web developer", "Next.js", "React", "AI automation", "portfolio"],
  authors: [{ name: "Yong Jie Ern", url: "https://yongjern.xyz" }],
  alternates: {
    canonical: "https://yongjern.xyz",
    languages: {
      "zh-TW": "https://yongjern.xyz",
      en: "https://yongjern.xyz/en",
    },
  },
  icons: {
    icon: "/media/logo.png",
    shortcut: "/media/logo.png",
    apple: "/media/logo.png",
  },
  openGraph: {
    title: "Who is Yong Jie Ern?",
    description: "認識 Yong Jie Ern 的專案、技能與經驗。",
    url: "https://yongjern.xyz",
    siteName: "Yong Jie Ern's Portfolio",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/media/logopic.png",
        width: 1024,
        height: 1024,
        alt: "Yong Jie Ern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yong Jie Ern · Portfolio",
    description: "認識 Yong Jie Ern 的專案、技能與經驗。",
    images: ["/media/logopic.png"],
  },
  robots: { index: true, follow: true },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yong Jie Ern",
  url: "https://yongjern.xyz",
  image: "https://yongjern.xyz/media/logopic.png",
  sameAs: [
    "https://github.com/yongjern",
    "https://www.youtube.com/@jernyong",
  ],
  knowsAbout: ["AI automation", "Next.js", "React", "WordPress"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW" className={`${siteFont.variable} scroll-smooth`}>
      <body className="antialiased bg-aurora-base text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
