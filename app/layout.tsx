import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google"; // 💡 改為引入 Google 官方的思源黑體
import "./globals.css";

// 💡 設定思源黑體
const notoRead = Noto_Sans_TC({
  weight: ["300", "400", "500", "700"], // 載入需要的字體粗細
  subsets: ["latin"],
  variable: "--font-noto", // 註冊為 CSS 變數
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
    // 💡 這裡改掛 notoRead.variable
    <html lang="zh-TW" className={`${notoRead.variable} scroll-smooth`}>
      <body className="antialiased bg-aurora-base text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
