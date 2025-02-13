import ResumeStep1 from "@/components/page/resume/ResumeStep1";
import ResumeStep2 from "@/components/page/resume/ResumeStep2";
import BackButton from "@/components/ui/button/BackButton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  const params = await searchParams; // searchParams 자체를 await로 해결
  const step = params.step ?? "1"; // 기본값 설정

  return (
    <main>
      <header>
        <BackButton className="mt-6 ml-4" />
      </header>
      {step === "1" && <ResumeStep1 />}
      {step === "2" && <ResumeStep2 />}
    </main>
  );
}
