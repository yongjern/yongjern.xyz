import type { Metadata } from "next";
import localFont from "next/font/local"; // 💡 改用 localFont
import "./globals.css";

// 💡 載入你放在 public/fonts 裡的 .ttf 字體檔案
const lxgwWenKai = localFont({
  src: "../public/fonts/LXGWWenKaiTC-Regular.ttf", // 變更為 .ttf 副檔名
  variable: "--font-lxgw", // 註冊為 CSS 變數
});

export const metadata: Metadata = {
  title: "yongjern.xyz · 歡迎光臨 Yong 的主頁",
  description: "Yong Jie Ern 的個人網頁. 在這裏你可以找到他的資訊，及聯係方式。",
  keywords: ["web developer", "Next.js", "React", "automation", "n8n", "Yongg"],
  authors: [{ name: "Yong Jie Ern", url: "https://yongjern.xyz" }],
  icons: {
    icon: "/media/logo.png", 
  },
  
  twitter: {
    card: "summary", // 🌟 關鍵：設定為 "summary" 就會變成右側小縮圖。如果是 "summary_large_image" 就會是滿版大圖。
    title: "Who are Yong Jie Ern?",
    description: "查看關於 Yong 的資料!",
    images: ["/media/logo.png"], // 縮圖直接吃你的圓形 Logo
  },
  
  openGraph: {
    title: "Who are Yong Jie Ern?",
    description: "查看關於 Yong 的資料!",
    images: [
      {
        url: "/media/logo.png",
        width: 512,
        height: 512,
        alt: "Yong's Logo",
      },
    ],
    url: "https://yongjern.xyz",
    siteName: "你收到了來自 yongjern.xyz 的鏈接邀請!",
    locale: "zh_TW",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // 💡 將字體變數掛在 html 上
    <html lang="en" className={`${lxgwWenKai.variable} scroll-smooth`}>
      <body className="antialiased bg-aurora-base text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
