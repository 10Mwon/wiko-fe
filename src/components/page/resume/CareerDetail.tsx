"use client";
import { useState } from "react";

export default function CareerDetail() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <li className="flex flex-col gap-4">
      <h2 className="font-semibold text-base">나의 경력</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between gap-2">
          <label>회사명</label>
          <input
            type="text"
            className="w-[80%] p-2 border-[1px] border-[#D9D9D9] rounded-lg"
          />
        </li>
        <li className="flex items-center justify-between gap-2">
          <label>근무기간</label>
          <input
            type="date"
            placeholder="입사연월"
            className=" p-2 border-[1px] border-[#D9D9D9] rounded-lg"
          />
        </li>
      </ul>
    </li>
  );
}
