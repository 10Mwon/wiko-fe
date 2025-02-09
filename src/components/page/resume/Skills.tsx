"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";

export default function Skills({ data }: { data: string[] }) {
  const { resumeData, setJobSkill } = useResumeStore();

  const handleSelect = (item: string) => {
    const currentSkills = resumeData.jobSkill || [];
    const newSelection = currentSkills.includes(item)
      ? currentSkills.filter((s) => s !== item)
      : [...currentSkills, item];

    setJobSkill(newSelection);
  };

  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-base">업무 스킬</h2>
      <ul className="flex flex-wrap justify-center text-xs gap-2 gap-y-6">
        {data.map((item, index) => (
          <li key={index}>
            <label
              className={`bg-gray-100 rounded-md p-2 cursor-pointer ${
                (resumeData.jobSkill || []).includes(item)
                  ? "bg-wikoYellow font-semibold"
                  : ""
              }`}>
              <input
                type="checkbox"
                name="skills"
                value={item}
                checked={(resumeData.jobSkill || []).includes(item)}
                onChange={() => handleSelect(item)}
                className="hidden"
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
}
