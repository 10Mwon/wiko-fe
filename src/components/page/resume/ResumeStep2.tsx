"use client";
import { ResumeData } from "@/store/dummy";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { ResumeDataType } from "@/types/resumeType";
import Career from "./Career";
import Education from "./Education";
import LanguageSkill from "./LanguageSkill";
import SelfIntroduce from "./SelfIntroduce";
import Skills from "./Skills";
import Strength from "./Strength";

export default function ResumeStep2() {
  const data: ResumeDataType = ResumeData;
  const { resumeData } = useResumeStore();
  return (
    <div className="text-sm pt-12 flex flex-col  px-4">
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
          onClick={() => console.log(resumeData)}
          className="w-4/5 mb-12 text-lg rounded-2xl p-3 mx-auto font-extrabold text-white bg-wikoBlue">
          저 장 
        </button>
      </ul>
    </div>
  );
}
