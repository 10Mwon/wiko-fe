"use client";
import { useState } from "react";

export default function Education({ data }: { data: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-base">최종 학력</h2>
      <ul className="flex flex-wrap gap-2">
        {data.map((item, index) => (
          <li key={index}>
            <label
              className={` bg-gray-100 rounded-md p-2 ${
                selected === item ? "bg-wikoYellow font-semibold" : ""
              }`}>
              <input
                type="radio"
                name="education"
                value={item}
                checked={selected === item}
                onChange={() => setSelected(item)}
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
