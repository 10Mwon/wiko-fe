// "use client";
import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import HomeBanner from "@/components/page/home/HomeBanner";
import LocalJob from "@/components/page/home/LocalJob";
import TodayJobNotice from "@/components/page/home/TodayJobNotice";
import ChatBotButton from "@/components/ui/button/ChatBotButton";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const name = "Tom";
  const isAuth = await getServerSession(options);
  return (
    <main className="w-full h-screen mb-20">
      <Header isAuth={isAuth ? true : false} />
      <LocalJob />
      <HomeBanner />
      <TodayJobNotice />
      <AppBar />
      <ChatBotButton />
    </main>
  );
}
