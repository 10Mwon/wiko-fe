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
import PriceRangeSlider from "./RangeSlider";

export default function PayFilterDrawer({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const router = useRouter();
  const [range, setRange] = useState([Number(start), Number(end)]);

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
  };

  return (
    <Drawer>
      <DrawerTrigger className="bg-[#F0EDFC] py-1.5 px-7 text-[#4C4C4C] font-semibold rounded-3xl shadow-xl">
        급여
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b-[1.5px] border-b-[#DED1EB] relative">
          <DrawerTitle>급여</DrawerTitle>
        </DrawerHeader>
        <div className="px-8">
          <h1 className="mt-12 mb-4">급여 범위 설정</h1>
          <div className="flex items-center justify-between">
            <div className="w-[128px] h-9 relative">
              <input
                className="h-full w-full bg-[#F0EDFC] rounded-xl px-3 text-right pr-8"
                value={range[0].toLocaleString()} // 천 단위 콤마 추가
                onChange={(e) => handleInputChange(0, e.target.value)}
              />
              <span className="absolute right-3 top-1.5">원</span>
            </div>

            <span className="text-3xl font-lexend">~</span>

            {/* 최대값 입력 */}
            <div className="w-[128px] h-9 relative">
              <input
                className="h-full w-full bg-[#F0EDFC] rounded-xl px-3 text-right pr-8"
                value={range[1].toLocaleString()} // 천 단위 콤마 추가
                onChange={(e) => handleInputChange(1, e.target.value)}
              />
              <span className="absolute right-3 top-1.5">원</span>
            </div>
          </div>

          {/* 슬라이더 */}
          <PriceRangeSlider range={range} setRange={setRange} />
        </div>
        <DrawerFooter className="px-0">
          <DrawerClose asChild>
            <button
              onClick={handleSearch}
              className="bg-wikoBlue mx-7 py-3 rounded-xl text-white"
            >
              적용하기
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
