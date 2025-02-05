import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import HomeBackground from "@/components/layout/HomeBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full bg-wikoBlue">
      <Header />
      <h1 className="text-2xl font-semibold mx-3 mb-11 mt-14 text-white">
        Tom,
        <br />
        <Link href={"/signup/2"}>여기..</Link>
        새로운 도전을 응원해요!
      </h1>
      <HomeBackground />
      <AppBar />
    </main>
  );
}
