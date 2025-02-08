import ResumeStep1 from "@/components/page/resume/ResumeStep1";
import ResumeStep2 from "@/components/page/resume/ResumeStep2";

export default async function Page({
  searchParams,
}: {
  searchParams: { step: string };
}) {
  const data = await searchParams.step;

  return (
    <div>
      {data === "1" && <ResumeStep1 />}
      {data === "2" && <ResumeStep2 />}
    </div>
  );
}
