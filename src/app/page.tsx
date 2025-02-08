import AppBar from "@/components/layout/AppBar";
import Header from "@/components/layout/Header";
import JobMenuGrid from "@/components/page/home/JobMenuGrid";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <h1 className="text-2xl font-semibold mx-3 mb-11 mt-14 text-black font-lexend">
        Tom,
        <br />
        새로운 도전을 응원해요!
      </h1>
      <a href="/mypage">마이페이지 이동</a>
      {/* <HomeBackground /> */}
      <JobMenuGrid />
      <AppBar />
    </main>
  );
}
