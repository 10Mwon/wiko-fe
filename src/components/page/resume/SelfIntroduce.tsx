"use client";

import { useResumeStore } from "@/store/zustand/resumeStore";
import { useTranslations } from "next-intl";

export default function SelfIntroduce() {
  const { resumeData, setIntroduction } = useResumeStore(); // ✅ Zustand에서 상태 가져오기
  const t = useTranslations("createResume");
  return (
    <li>
      <h2 className="font-semibold text-base mb-4">{t("selfIntroduction")}</h2>
      <textarea
        rows={10}
        cols={6}
        placeholder={t("selfIntroductionPlaceholder")}
        className="rounded-xl text-lg p-2 w-full bg-wikoGray"
        name="introduce"
        id="introduce"
        value={resumeData.introduction || ""}
        onChange={(e) => setIntroduction(e.target.value)}
      ></textarea>
    </li>
  );
}
