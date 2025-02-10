"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { RotateCw, X } from "lucide-react";

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
    <li className="flex flex-col  gap-4">
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
      <section className="w-full min-h-32 p-2 border-[1px] rounded-xl border-wikoGray">
        <h3 className="mb-2 flex justify-between">
          <p className="font-extrabold text-sm ">내가 선택한 스킬</p>
          <p className="text-xs gap-0.5 flex items-center text-gray-400">
            <RotateCw onClick={() => setJobSkill([])} size={10} />
            초기화
          </p>
        </h3>

        <ul className="flex flex-wrap gap-2 gap-y-4">
          {data.map(
            (item, index) =>
              (resumeData.jobSkill || []).includes(item) && (
                <li
                  className="rounded-md flex items-center gap-2 p-2 font-semibold bg-wikoYellow"
                  key={index}>
                  {item}
                  <X
                    onClick={() => handleSelect(item)}
                    size={15}
                    color="gray"
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </li>
  );
}
