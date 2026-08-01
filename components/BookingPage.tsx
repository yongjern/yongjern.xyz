"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Clock3,
  ExternalLink,
  Gamepad2,
  Globe2,
  MessageCircleQuestion,
  Monitor,
} from "lucide-react";

type Locale = "zh" | "en";
type ServiceId = "class" | "game";

const services = {
  class: {
    url: "https://cal.com/yongjern/onlineclass",
    price: "RM30 / hour",
    icon: BookOpen,
  },
  game: {
    url: "https://cal.com/yongjern/gamer",
    price: "RM10 / hour",
    icon: Gamepad2,
  },
} as const;

const copy = {
  zh: {
    home: "返回主頁",
    language: "EN",
    eyebrow: "YONG'S APPOINTMENT",
    title: "一起安排合適的時間。",
    intro: "選擇線上課程或遊戲陪玩，查看我的空檔並直接完成預約。",
    online: "全程線上",
    timezone: "依你的時區顯示",
    choose: "選擇服務",
    classTitle: "線上課程",
    classDescription: "一對一線上學習時段。預約時告訴我你的科目、程度與希望達成的目標。",
    gameTitle: "遊戲陪玩",
    gameDescription: "Minecraft Java／Bedrock、CODM、三角洲行動（Android／Google Play）等，也可先詢問其他遊戲。",
    perHour: "每小時",
    selected: "目前選擇",
    calendarTitle: "選擇日期與時間",
    calendarDescription: "日曆會自動依照你的所在地顯示可預約時段。",
    openCal: "在 Cal.com 開啟",
    embedTitle: "Cal.com 預約日曆",
    noteTitle: "還沒確定要預約哪一種？",
    note: "可以先透過 Cal.com 的預約表單說明需求；其他遊戲或服務內容會在確認後安排。",
    footer: "© Yong Jie Ern · Personal appointment service",
  },
  en: {
    home: "Back to home",
    language: "中文",
    eyebrow: "YONG'S APPOINTMENT",
    title: "Let’s find a time that works.",
    intro: "Choose an online class or a game buddy session, then book directly from my live availability.",
    online: "Online only",
    timezone: "Shown in your timezone",
    choose: "Choose a service",
    classTitle: "Online Classes",
    classDescription: "A focused one-to-one learning session. Share your subject, current level, and goals when booking.",
    gameTitle: "Game Buddy",
    gameDescription: "Minecraft Java/Bedrock, CODM, Delta Force (Android/Google Play), and more games by request.",
    perHour: "per hour",
    selected: "Selected",
    calendarTitle: "Choose a date and time",
    calendarDescription: "Available times are automatically displayed in your local timezone.",
    openCal: "Open in Cal.com",
    embedTitle: "Cal.com booking calendar",
    noteTitle: "Not sure which session fits?",
    note: "Describe what you need in the Cal.com booking form. Other games or personalised services can be arranged after confirmation.",
    footer: "© Yong Jie Ern · Personal appointment service",
  },
} as const;

export default function BookingPage({ locale }: { locale: Locale }) {
  const [selectedService, setSelectedService] = useState<ServiceId>("class");
  const text = copy[locale];
  const selected = services[selectedService];
  const serviceCopy = {
    class: { title: text.classTitle, description: text.classDescription },
    game: { title: text.gameTitle, description: text.gameDescription },
  };
  const languageHref = locale === "zh" ? "/en/booking" : "/booking";
  const homeHref = locale === "zh" ? "/" : "/en";

  return (
    <main className="relative z-10 min-h-screen px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
            <Image src="/media/logo.png" alt="Yong Jie Ern" width={36} height={36} className="h-8 w-8 object-contain" priority />
          </span>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{text.home}</span>
        </Link>
        <Link href={languageHref} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white">
          {text.language}
        </Link>
      </nav>

      <header className="mx-auto max-w-6xl pb-12 pt-16 sm:pt-24">
        <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-teal-300/80">{text.eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">{text.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">{text.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
          <span className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-2"><Monitor className="h-4 w-4 text-teal-300" />{text.online}</span>
          <span className="glass-pill flex items-center gap-2 rounded-full px-3.5 py-2"><Globe2 className="h-4 w-4 text-amber-300" />{text.timezone}</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl" aria-labelledby="services-heading">
        <h2 id="services-heading" className="mb-5 text-sm font-medium text-white/45">{text.choose}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {(Object.keys(services) as ServiceId[]).map((serviceId) => {
            const service = services[serviceId];
            const Icon = service.icon;
            const isSelected = selectedService === serviceId;

            return (
              <button
                key={serviceId}
                type="button"
                onClick={() => setSelectedService(serviceId)}
                aria-pressed={isSelected}
                className={`group min-h-[220px] rounded-lg border p-6 text-left transition-all duration-300 sm:p-7 ${
                  isSelected
                    ? "border-teal-300/45 bg-teal-300/[0.09] shadow-[0_20px_60px_rgba(13,148,136,0.12)]"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${isSelected ? "bg-teal-300 text-slate-950" : "bg-white/10 text-white/70"}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {isSelected && <span className="text-xs font-medium text-teal-200">{text.selected}</span>}
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">{serviceCopy[serviceId].title}</h3>
                <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/50">{serviceCopy[serviceId].description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/75">
                  <Clock3 className="h-4 w-4 text-amber-300" aria-hidden="true" />
                  <strong className="font-semibold text-white">{service.price}</strong>
                  <span className="text-white/35">· {text.perHour}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl" aria-labelledby="calendar-heading">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 id="calendar-heading" className="text-2xl font-semibold text-white sm:text-3xl">{text.calendarTitle}</h2>
            <p className="mt-2 text-sm text-white/45">{text.calendarDescription}</p>
          </div>
          <a href={selected.url} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            {text.openCal}<ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl shadow-black/30">
          <iframe
            key={selected.url}
            src={`${selected.url}?embed=true&theme=light`}
            title={`${text.embedTitle}: ${serviceCopy[selectedService].title}`}
            className="h-[760px] w-full border-0"
            loading="lazy"
            allow="payment"
          />
        </div>
      </section>

      <aside className="mx-auto mt-8 flex max-w-6xl items-start gap-4 rounded-lg border border-amber-300/15 bg-amber-300/[0.05] p-5 sm:p-6">
        <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
        <div>
          <h2 className="font-medium text-white/90">{text.noteTitle}</h2>
          <p className="mt-1 text-sm leading-6 text-white/45">{text.note}</p>
        </div>
      </aside>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-8 text-center text-xs text-white/30">
        {text.footer}
      </footer>
    </main>
  );
}