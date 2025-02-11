"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { useTranslations } from "next-intl";
import { useState } from "react";
import OverMonthSection from "./OverMonthSection";
import UnderMonthSection from "./UnderMonthSection";

export default function CareerDetail() {
  const { resumeData, setCareerDetail } = useResumeStore();
  const [overMonth, setOverMonth] = useState<boolean>(true);
  const t = useTranslations("createResume");
  return (
    <li className="pt-2 text-base flex flex-col gap-4">
      <h2 className="font-bold">{t("careerDetail")}</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between gap-2">
          <h3>{t("회사명")}</h3>
          <input
            type="text"
            className="w-[80%] p-2 border-[1px] border-wikoGray rounded-lg"
            value={resumeData.careerDetail?.company || ""}
            onChange={(e) => setCareerDetail("company", e.target.value)}
          />
        </li>

        <li className="flex items-start gap-6">
          <h4 className="whitespace-nowrap">{t("근무기간")}</h4>
          <div className="flex flex-col gap-2">
            <section>
              <div className="flex items-center gap-2 ">
                <input
                  type="radio"
                  name="duration"
                  value="overMonth"
                  checked={overMonth}
                  onChange={() => {
                    setOverMonth(true);
                  }}
                  className="w-5 h-5 accent-wikoBlue cursor-pointer"
                />
                <label>{t("over1")}</label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={resumeData.careerDetail?.isWorking}
                    onChange={(e) => {
                      setCareerDetail("isWorking", e.target.checked);
                    }}
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 border-[1px] border-gray-400 rounded-md flex items-center justify-center  peer-checked:border-wikoBlue">
                    {resumeData.careerDetail?.isWorking ? "✔" : ""}
                  </div>
                  <span className="text-sm ">{t("isWorking")}</span>
                </label>
              </div>
              {overMonth && <OverMonthSection />}
            </section>

            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="duration"
                value="underMonth"
                checked={!overMonth}
                onChange={() => {
                  setOverMonth(false);
                }}
                className="w-5 h-5 accent-wikoBlue cursor-pointer"
              />
              {t("under1")}
            </div>
            {!overMonth && <UnderMonthSection />}
          </div>
        </li>

        <li className="flex gap-4">
          <h3 className="whitespace-nowrap">{t("담당업무")}</h3>
          <textarea
            rows={5}
            className="w-full p-2 border-[1px] border-wikoGray rounded-lg"
            value={resumeData.careerDetail?.position || ""}
            onChange={(e) => setCareerDetail("position", e.target.value)}
          />
        </li>
      </ul>
    </li>
  );
}
