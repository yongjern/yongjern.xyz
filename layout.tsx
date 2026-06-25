import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yong Jie Ern — Web Developer & Digital Entrepreneur",
  description:
    "Personal portfolio of Yong Jie Ern. Passionate about automation, server management, and building digital platforms with real commercial value.",
  keywords: ["web developer", "Next.js", "React", "automation", "n8n", "XPStore"],
  authors: [{ name: "Yong Jie Ern", url: "https://yongjern.xyz" }],
  openGraph: {
    title: "Yong Jie Ern — Web Developer & Digital Entrepreneur",
    description: "Building automation-first digital platforms.",
    url: "https://yongjern.xyz",
    siteName: "Yong Jie Ern",
    locale: "en_US",
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
