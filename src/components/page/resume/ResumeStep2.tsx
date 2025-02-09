import { ResumeData } from "@/store/dummy";
import { ResumeDataType } from "@/types/resumeType";
import Career from "./Career";
import Education from "./Education";
import LanguageSkill from "./LanguageSkill";

export default function ResumeStep2() {
  const data: ResumeDataType = ResumeData;

  return (
    <div className="text-sm pt-12 flex flex-col  px-4">
      <ul className="flex flex-col gap-4">
        <Education data={data.education} />
        <hr />
        <LanguageSkill data={data.langSkill} />
        <hr />
        <Career data={data.career} />
      </ul>
    </div>
  );
}
