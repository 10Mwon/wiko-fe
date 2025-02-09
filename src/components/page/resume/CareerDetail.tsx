"use client";
import { useState } from "react";
import OverMonthSection from "./OverMonthSection";
import UnderMonthSection from "./UnderMonthSection";

export default function CareerDetail() {
  const [overMonth, setOverMonth] = useState<boolean>(true);

  return (
    <li className="pt-2 text-base flex flex-col gap-4">
      <h2 className="font-bold">나의 경력</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between gap-2">
          <h3>회사명</h3>
          <input
            type="text"
            className="w-[80%] p-2 border-[1px] border-wikoGray rounded-lg"
          />
        </li>
        <li className="flex items-start gap-6">
          <h4 className="whitespace-nowrap">근무기간</h4>
          <div className="flex flex-col gap-2">
            <section>
              <div className="flex gap-2 ">
                <input
                  type="radio"
                  name="duration"
                  value="overMonth"
                  checked={overMonth}
                  onChange={() => setOverMonth(true)}
                  className="w-5 h-5 accent-wikoBlue cursor-pointer"
                />
                1개월 이상 근무
              </div>
              {overMonth && <OverMonthSection />}
            </section>

            <div className="flex gap-2">
              <input
                type="radio"
                name="duration"
                value="underMonth"
                checked={!overMonth}
                onChange={() => setOverMonth(false)}
                className="w-5 h-5 accent-wikoBlue cursor-pointer"
              />
              1개월 미만 근무
            </div>
            {!overMonth && <UnderMonthSection />}
          </div>
        </li>
        <li className="flex ">
          <h3 className="whitespace-nowrap">담당업무</h3>
          <textarea
            rows={5}
            className="w-full p-2 border-[1px] border-wikoGray rounded-lg"
          />
        </li>
      </ul>
    </li>
  );
}
