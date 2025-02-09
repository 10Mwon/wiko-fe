"use client";

import { useResumeStore } from "@/store/zustand/resumeStore";

export default function SelfIntroduce() {
  const { resumeData, setIntroduction } = useResumeStore(); // ✅ Zustand에서 상태 가져오기

  return (
    <li>
      <h2 className="font-semibold text-base mb-4">자기소개</h2>
      <textarea
        rows={10}
        cols={6}
        placeholder="자기소개 내용을 입력해주세요."
        className="rounded-xl text-base p-2 w-full bg-wikoGray"
        name="introduce"
        id="introduce"
        value={resumeData.introduction || ""}
        onChange={(e) => setIntroduction(e.target.value)}></textarea>
    </li>
  );
}
