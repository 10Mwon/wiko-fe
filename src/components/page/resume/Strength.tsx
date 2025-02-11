"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { useTranslations } from "next-intl";

export default function Strength({ data }: { data: string[] }) {
  const { resumeData, setStrength } = useResumeStore();

  // 선택 핸들러
  const handleSelect = (item: string) => {
    const currentStrength = resumeData.strength || [];
    const newSelection = currentStrength.includes(item)
      ? currentStrength.filter((s) => s !== item)
      : [...currentStrength, item];

    setStrength(newSelection);
  };
  const t = useTranslations("createResume");
  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-base">{t("strength")}</h2>
      <ul className="flex flex-wrap justify-center text-xs gap-2 gap-y-6">
        {data.map((item, index) => (
          <li key={index}>
            <label
              className={`bg-gray-100 rounded-md p-2 cursor-pointer ${
                (resumeData.strength || []).includes(item)
                  ? "bg-wikoYellow font-semibold"
                  : ""
              }`}>
              <input
                type="checkbox"
                name="strength"
                value={item}
                checked={(resumeData.strength || []).includes(item)}
                onChange={() => handleSelect(item)}
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
