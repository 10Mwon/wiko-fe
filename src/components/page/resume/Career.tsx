"use client";
import { useState } from "react";
import CareerDetail from "./CareerDetail";

export default function Career({ data }: { data: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <li className="flex flex-col gap-4">
        <h2 className="font-semibold text-base">경력</h2>
        <ul className="flex flex-wrap gap-2">
          {data.map((item, index) => (
            <li key={index}>
              <label
                className={` bg-gray-100 rounded-md px-4 p-2 ${
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
      {selected === "경력" && <CareerDetail />}
    </>
  );
}
