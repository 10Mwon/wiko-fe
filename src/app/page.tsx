import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import JobMenuGrid from "@/components/page/home/JobMenuGrid";
import Community from "@/components/page/home/JobNotice";
import { LinkToChat } from "@/components/page/home/LinkToChat";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <div className="px-6 mb-[68px]">
        <h1 className="text-2xl font-semibold mb-11 mt-14 text-black font-lexend">
          Tom,
          <br />
          새로운 도전을 응원해요!
        </h1>
        <LinkToChat />
        <JobMenuGrid />
      </div>
      <Community />
      <AppBar />
    </main>
  );
}
