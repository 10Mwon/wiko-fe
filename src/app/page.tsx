import Header from "@/components/layout/Header";
import HomeBackground from "@/components/layout/HomeBackground";

export default function Home() {
  return (
    <main className="w-full h-screen bg-wikoBlue text-white">
      <Header />
      <h1 className="text-2xl font-semibold mx-3 mb-11">
        Tom,
        <br />
        새로운 도전을 응원해요!
      </h1>
      <HomeBackground />
    </main>
  );
}
