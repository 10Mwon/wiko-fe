"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { industryData } from "@/store/jobFilterData";
import { CircleX } from "lucide-react";
import { useState } from "react";

export default function JobFilter() {
  // 선택된 업종을 관리할 상태
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  // 항목 선택 시 처리 함수
  const toggleIndustrySelection = (industryName: string) => {
    setSelectedIndustries(
      (prev) =>
        prev.includes(industryName)
          ? prev.filter((item) => item !== industryName) // 이미 선택된 항목은 취소
          : [...prev, industryName] // 선택되지 않은 항목은 추가
    );
  };

  // 선택된 업종 삭제 함수
  const removeIndustry = (industryName: string) => {
    setSelectedIndustries((prev) =>
      prev.filter((item) => item !== industryName)
    );
  };

  return (
    <Drawer>
      <DrawerTrigger className="bg-[#F0EDFC] py-1.5 px-7 text-[#4C4C4C] font-semibold rounded-3xl shadow-xl">
        업종
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b-[1.5px] border-b-[#DED1EB] relative">
          <DrawerTitle>업종</DrawerTitle>
          <button
            onClick={() => setSelectedIndustries([])}
            className="absolute right-5 top-3 font-bold font-lexend text-[#757575]"
          >
            Clear
          </button>
        </DrawerHeader>
        <ul>
          {industryData.map((item) => (
            <li
              key={item.code}
              className={`py-2 px-5 cursor-pointer ${
                selectedIndustries.includes(item.industryName)
                  ? "bg-[#F0EDFC] text-[#605F65]"
                  : ""
              }`}
              onClick={() => toggleIndustrySelection(item.industryName)}
            >
              {item.industryName}
            </li>
          ))}
        </ul>
        <DrawerFooter className="px-0">
          <div
            className="bg-[#F0EDFC] px-5 pb-8 overflow-hidden"
            style={{
              maxHeight:
                selectedIndustries.length > 0
                  ? `${selectedIndustries.length * 48 + 32}px`
                  : "80px",
              transition: "max-height 0.3s ease-out", // 부드러운 높이 변화
            }}
          >
            <h1 className="font-extrabold py-2">선택한 업종</h1>
            <ul className="flex flex-wrap gap-4">
              {selectedIndustries.map((industry, index) => (
                <li
                  key={index}
                  className="bg-[#E2DCF9] py-1 px-3 rounded-xl text-sm flex items-center gap-1.5"
                >
                  {industry}
                  <button onClick={() => removeIndustry(industry)}>
                    <CircleX size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <DrawerClose asChild>
            <button className="bg-wikoBlue mx-7 py-3 rounded-xl text-white">
              적용하기
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
