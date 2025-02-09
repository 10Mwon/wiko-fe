"use client";
import { useState } from "react";

export default function CareerDetail() {
  const [overMonth, setOverMonth] = useState<boolean>(true); // 기본값: 1개월 이상

  return (
    <li className="pt-2 flex flex-col gap-4">
      <h2 className="font-bold text-base">나의 경력</h2>
      <ul className="flex flex-col gap-4">
        {/* 회사명 입력 */}
        <li className="flex items-center justify-between gap-2">
          <h3>회사명</h3>
          <input
            type="text"
            className="w-[80%] p-2 border-[1px] border-[#060303] rounded-lg"
          />
        </li>
        <li className="flex items-start gap-6">
          <h4 className="whitespace-nowrap">근무기간</h4>
          <div className="flex flex-col gap-2">
            <section>
              <div className="flex gap-2 mb-4">
                <input
                  type="radio"
                  name="duration"
                  value="overMonth"
                  checked={overMonth}
                  onChange={() => setOverMonth(true)}
                  className="w-5 h-5 accent-wikoBlue cursor-pointer"
                />
                1개월 이상 근무
                <input type="checkbox" className="bg-wikoBlack border-2" />
                재직중
              </div>
              {overMonth && <OverMonthSection />}
            </section>
            {/* 1개월 미만 근무 */}
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
        <li className="flex gap-4">
          <h3>담당 업무</h3>
          <textarea className="w-[80%]  p-2 border-[1px] border-wikoGray rounded-lg"></textarea>
        </li>
      </ul>
    </li>
  );
}

// ✅ 1개월 이상 근무
function OverMonthSection() {
  return (
    <div className="ml-2 flex gap-4 items-center">
      <input
        type="text"
        placeholder="입사 연월   📅"
        className="p-2 w-1/3 border-wikoGray border-2 rounded-xl"
      />
      ~
      <input
        type="text"
        placeholder="퇴사 연월   📅"
        className="p-2 w-1/3 border-wikoGray border-2 rounded-xl"
      />
    </div>
  );
}

// ✅ 1개월 미만 근무
function UnderMonthSection() {
  return (
    <div className="ml-2 flex gap-2 items-center">
      <input
        type="text"
        placeholder="입사 연월   📅"
        className="p-2 w-1/3 border-wikoGray border-2 rounded-xl"
      />
      <input
        type="text"
        placeholder="일"
        className="p-2 w-1/4 border-wikoGray border-2 rounded-xl"
      />
      일 동안 근무
    </div>
  );
}
