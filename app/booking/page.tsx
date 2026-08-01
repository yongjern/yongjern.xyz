import type { Metadata } from "next";
import AuroraBackground from "@/components/AuroraBackground";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = {
  title: "Yong's Appointment · 線上課程與遊戲陪玩",
  description: "預約 Yong Jie Ern 的一對一線上課程或遊戲陪玩服務。",
  alternates: {
    canonical: "https://yongjern.xyz/booking",
    languages: {
      "zh-TW": "https://yongjern.xyz/booking",
      en: "https://yongjern.xyz/en/booking",
    },
  },
};

export default function Booking() {
  return (
    <>
      <AuroraBackground />
      <BookingPage locale="zh" />
    </>
  );
}