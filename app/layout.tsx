import type { Metadata } from "next";
import { LXGW_WenKai_TC } from "next/font/google";
import "./globals.css";

const LXGW_WENKAI_TC = LXGW_WENKAI_TC({
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "yongjern.xyz · 歡迎光臨 Yong　的主頁",
  description:
    "Yong Jie Ern 的個人網頁. 在這裏你可以找到他的資訊，及聯係方式。",
  keywords: ["web developer", "Next.js", "React", "automation", "n8n", "Yongg"],
  authors: [{ name: "Yong Jie Ern", url: "https://yongjern.xyz" }],
  openGraph: {
    title: "Who are Yong Jie Ern?",
    description: "查看關於 Yong 的資料!",
    url: "https://yongjern.xyz",
    siteName: "Yongg's Portfolio",
    locale: "zh_TW",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-aurora-base text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
