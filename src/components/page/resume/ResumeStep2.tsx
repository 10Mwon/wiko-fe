"use client";
import { postResume } from "@/actions/resume/resume";
import { ResumeData } from "@/store/dummy";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { ResumeDataType } from "@/types/resumeType";
import { useTranslations } from "next-intl";
import Career from "./Career";
import Education from "./Education";
import LanguageSkill from "./LanguageSkill";
import SelfIntroduce from "./SelfIntroduce";
import Skills from "./Skills";
import Strength from "./Strength";

export default function ResumeStep2() {
  const data: ResumeDataType = ResumeData;
  const t = useTranslations("createResume");
  const { resumeData } = useResumeStore();
  const handleSubmit = () => {
    const completeResumeData = {
      ...resumeData,
      resumeImage:
        resumeData.resumeImage ||
        "https://rootimpact7.s3.ap-northeast-2.amazonaws.com/profileImg/defaultImage.png",
      education: resumeData.education || "비공개",
      languageSkill: resumeData.languageSkill || "초급",
      careerType: resumeData.careerType || "비공개",
      joinedAtMonth: resumeData.joinedAtMonth || "1",
      careerDetail: resumeData.careerDetail || {},
      strength: resumeData.strength || [],
      jobSkill: resumeData.jobSkill || [],
      introduction: resumeData.introduction || "자기소개",
    };
    postResume(completeResumeData);
  };
  return (
    <div className="text-sm pt-6 flex flex-col  px-4">
      <ul className="flex flex-col gap-[1.44rem]">
        <Education data={data.education} />
        <hr />
        <LanguageSkill data={data.langSkill} />
        <hr />
        <Career data={data.career} />
        <hr />
        <Strength data={data.strength} />
        <hr />
        <Skills data={data.skills} />
        <hr />
        <SelfIntroduce />
        <button
          onClick={handleSubmit}
          className="w-4/5 mb-12 text-lg rounded-2xl p-3 mx-auto font-extrabold text-white bg-wikoBlue"
        >
          {t("save")}
        </button>
      </ul>
    </div>
  );
}
