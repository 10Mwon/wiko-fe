// "use client";
import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import LocalJob from "@/components/page/home/LocalJob";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  // const t = useTranslations("home");
  const name = "Tom";
  const isAuth = await getServerSession(options);
  return (
    <main className="w-full " style={{ height: "calc(100vh - 100px)" }}>
      <Header isAuth={isAuth ? true : false} />
      <LocalJob />
      <AppBar />
    </main>
  );
}
