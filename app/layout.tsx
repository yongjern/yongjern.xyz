import type { Metadata } from "next";
import { LXGW_WenKai_TC } from "next/font/google"; // 1. 保持原創的 font 命名
import "./globals.css";

// 2. 修正變數名稱，並加入中文字體必備的 preload: false
const lxgwWenKai = LXGW_WenKai_TC({
  display: "swap",
  weight: ["300", "400", "700"],
  preload: false, // 關鍵：中文字體必須關閉預載
});

export const metadata: Metadata = {
  title: "yongjern.xyz · 歡迎光臨 Yong 的主頁",
  description: "Yong Jie Ern 的個人網頁. 在這裏你可以找到他的資訊，及聯係方式。",
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
    // 3. 將原本未定義的 inter.variable 改為 lxgwWenKai.className
    <html lang="en" className={`${lxgwWenKai.className} scroll-smooth`}>
      <body className="antialiased bg-aurora-base text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
