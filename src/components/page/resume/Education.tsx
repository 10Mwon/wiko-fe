"use client";
import { useResumeStore } from "@/store/zustand/resumeStore";

export default function Education({ data }: { data: string[] }) {
  const { resumeData, setEducation } = useResumeStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };

  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-base">최종 학력</h2>
      <ul className="flex flex-wrap gap-2">
        {data.map((item, index) => (
          <li key={index}>
            <label
              className={`bg-gray-100 rounded-md p-2 cursor-pointer ${
                resumeData.education === item
                  ? "bg-wikoYellow font-semibold"
                  : ""
              }`}>
              <input
                type="radio"
                name="education"
                value={item}
                checked={resumeData.education === item}
                onChange={handleChange}
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
