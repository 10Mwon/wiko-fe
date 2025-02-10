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
import { useRouter } from "next/navigation";
import { useState } from "react";
import PayRangeButton from "./PayRangeButton";

export default function PayFilterDrawer({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const router = useRouter();
  const [range, setRange] = useState([Number(start), Number(end)]);
  const [selectedPay, setSelectedPay] = useState<string | null>(null); // 선택된 버튼 상태

  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("start", range[0].toString());
    newSearchParams.set("end", range[1].toString());

    router.push(`?${newSearchParams.toString()}`);
  };

  // 입력값 변경 핸들러
  const handleInputChange = (index: number, value: string) => {
    const numValue = Number(value.replace(/\D/g, "")); // 숫자만 추출
    setRange((prev) => {
      const newRange = [...prev];
      newRange[index] = numValue;
      return newRange;
    });
    setSelectedPay(null); // 직접 입력 시 선택된 버튼 해제
  };

  const handlePayRangeClick = (minPay: string) => {
    const numPay = Number(minPay.replace(/\D/g, "")); // 숫자만 추출
    setRange([numPay, range[1]]);
    setSelectedPay(minPay); // 선택된 버튼 업데이트
  };

  return (
    <Drawer>
      <DrawerTrigger className="py-1.5 px-7 text-[#4C4C4C] font-semibold rounded-3xl shadow-xl bg-white">
        급여
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>급여</DrawerTitle>
        </DrawerHeader>
        <div className="bg-[#F9FAFC]">
          <div className="px-5">
            <h1 className="mt-12 mb-4 font-semibold">급여 범위 설정</h1>
            <div className="flex items-center justify-between mb-14">
              <div className="custom-input-container">
                <input
                  className="custom-input"
                  value={range[0].toLocaleString()} // 천 단위 콤마 추가
                  onChange={(e) => handleInputChange(0, e.target.value)}
                />
                <span className="custom-input-unit">원</span>
              </div>

              <span className="text-3xl font-lexend">~</span>

              <div className="custom-input-container">
                <input
                  className="custom-input"
                  value={range[1].toLocaleString()} // 천 단위 콤마 추가
                  onChange={(e) => handleInputChange(1, e.target.value)}
                />
                <span className="custom-input-unit">원</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "2,500만원 이상",
                "3,000만원 이상",
                "3,500만원 이상",
                "4,000만원 이상",
                "4,500만원 이상",
              ].map((pay) => (
                <PayRangeButton
                  key={pay}
                  minPay={pay}
                  setRange={setRange}
                  selected={selectedPay === pay} // 현재 선택된 버튼 여부
                  onClick={() => handlePayRangeClick(pay)} // 클릭 이벤트 전달
                />
              ))}
            </div>
          </div>
          <DrawerFooter className="flex-row px-8 gap-5 mb-8 mt-14 pt-7 pb-0 border-t-[1px] border-[#F0F1F5]">
            <button
              onClick={() => {
                setRange([Number(start), Number(end)]); // 기본 값으로 초기화
                setSelectedPay(null); // 선택된 버튼 초기화
              }}
              className="font-semibold bg-[#F0F1F5]  px-6 py-3 rounded-xl flex-1 "
            >
              초기화
            </button>
            <DrawerClose asChild>
              <button
                onClick={handleSearch}
                className="bg-wikoGreen px-6 py-3 rounded-xl font-semibold flex-1 "
              >
                적용하기
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
