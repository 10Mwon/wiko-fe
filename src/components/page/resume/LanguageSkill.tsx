"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";

export default function LanguageSkill({ data }: { data: string[] }) {
  const { resumeData, setLanguageSkill } = useResumeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguageSkill(event.target.value);
  };

  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-base">어학 능력</h2>
      <ul className="grid grid-cols-2 gap-2">
        {data.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="langSkill"
                value={item}
                checked={resumeData.languageSkill === item}
                onChange={handleChange}
                className="mr-2"
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
}
