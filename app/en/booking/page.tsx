import type { Metadata } from "next";
import AuroraBackground from "@/components/AuroraBackground";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = {
  title: "Yong's Appointment · Online Classes & Game Buddy",
  description: "Book a one-to-one online class or game buddy session with Yong Jie Ern.",
  alternates: {
    canonical: "https://yongjern.xyz/en/booking",
    languages: {
      "zh-TW": "https://yongjern.xyz/booking",
      en: "https://yongjern.xyz/en/booking",
    },
  },
};

export default function EnglishBooking() {
  return (
    <>
      <AuroraBackground />
      <BookingPage locale="en" />
    </>
  );
}