"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CareerDetail from "./CareerDetail";

export default function Career({ data }: { data: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const { setCareerType } = useResumeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    setSelected(item);
    setCareerType(item);
  };
  const t = useTranslations("createResume");
  return (
    <>
      <li className="flex flex-col gap-4">
        <h2 className="font-semibold text-base">{t("career")}</h2>
        <ul className="flex flex-wrap gap-2">
          {data.map((item, index) => (
            <li key={index}>
              <label
                className={` bg-gray-100 rounded-md px-4 p-2 ${
                  selected === item ? "bg-wikoYellow font-semibold" : ""
                }`}>
                <input
                  type="radio"
                  name="career"
                  value={item}
                  checked={selected === item}
                  onChange={handleChange}
                  className="hidden"
                />
                {t(item)}
              </label>
            </li>
          ))}
        </ul>
      </li>
      {selected === "경력" && <CareerDetail />}
    </>
  );
}
