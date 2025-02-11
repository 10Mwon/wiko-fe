"use client";
import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import JobMenuGrid from "@/components/page/home/JobMenuGrid";
import { LinkToChat } from "@/components/page/home/LinkToChat";
import TodayJobNotice from "@/components/page/home/TodayJobNotice";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const name = "Tom";
  return (
    <main className="w-full " style={{ height: "calc(100vh - 56px)" }}>
      <Header />
      <div className="px-6 mb-[68px]">
        <h1 className="text-2xl font-semibold mb-11 mt-14 text-black font-lexend">
          Tom,
          <br />
          {t("greeting")}
        </h1>
        <LinkToChat />
        <JobMenuGrid />
      </div>
      <TodayJobNotice />
      <AppBar />
    </main>
  );
}
