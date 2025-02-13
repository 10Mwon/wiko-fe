// "use client";
import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  // const t = useTranslations("home");
  const name = "Tom";
  const isAuth = await getServerSession(options);
  return (
    <main className="w-full " style={{ height: "calc(100vh - 56px)" }}>
      <Header isAuth={isAuth ? true : false} />
      {/* <div className="px-6 mb-[68px]">
        <h1 className="text-2xl font-semibold mb-11 mt-14 text-black font-lexend">
          Tom,
          <br />
          {t("greeting")}
        </h1>
        <LinkToChat />
        <JobMenuGrid />
      </div>
      <TodayJobNotice /> */}
      <AppBar />
    </main>
  );
}
