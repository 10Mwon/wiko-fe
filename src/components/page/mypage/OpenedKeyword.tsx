"use client";
import { keywordData } from "@/store/dummy";
import { useState } from "react";

export default function OpenedKeyword() {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string | null;
  }>({});

  const handleSelect = (label: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [label]: prev[label] === value ? null : value, // 클릭하면 선택/해제 가능
    }));
  };

  return (
    <div className="bg-white p-4">
      <ul className="space-y-4">
        {keywordData.map((item, index) => (
          <li key={index} className="text-xl flex flex-col gap-4">
            <h3 className="font-semibold mt-2">{item.label}</h3>
            <div className="grid grid-cols-4 gap-2">
              {item.value.map((value, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(item.label, value)}
                  className={`p-2 text-sm rounded-xl font-semibold text-center transition-colors ${
                    selectedValues[item.label] === value
                      ? "border 1px border-wikoBlue text-wikoBlue"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                  {value}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
