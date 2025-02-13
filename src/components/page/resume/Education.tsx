"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { useTranslations } from "next-intl";

export default function Education({ data }: { data: string[] }) {
  const { resumeData, setEducation } = useResumeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };
  const t = useTranslations("createResume");
  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">{t("education")}</h2>
      <ul className="flex flex-wrap gap-y-6 gap-x-1.5">
        {data.map((item, index) => (
          <li key={index}>
            <label
              className={`bg-gray-100 rounded-md p-2 cursor-pointer ${
                resumeData.education === item
                  ? "bg-wikoYellow font-semibold"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value={item}
                checked={resumeData.education === item}
                onChange={handleChange}
                className="hidden"
              />
              {t(item)}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
}
