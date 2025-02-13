"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { useTranslations } from "next-intl";

export default function LanguageSkill({ data }: { data: string[] }) {
  const { resumeData, setLanguageSkill } = useResumeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguageSkill(event.target.value);
  };
  const t = useTranslations("createResume");
  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">{t("langSkill")}</h2>
      <ul className="grid grid-cols-2 gap-2 gap-y-3">
        {data.map((item, index) => (
          <li key={index}>
            <label className="flex items-center">
              <input
                type="radio"
                name="langSkill"
                value={item}
                checked={resumeData.languageSkill === item}
                onChange={handleChange}
                className="mr-2"
              />
              {t(item)}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
}
