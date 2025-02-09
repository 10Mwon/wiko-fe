"use client";

import { regionData } from "@/store/jobFilterData";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CircleX } from "lucide-react";
import { useCallback, useState } from "react";

export default function RegionSelector({
  selections,
  setSelections,
}: {
  selections: string[];
  setSelections: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // 선택 처리 함수
  const handleSelection = useCallback(
    (neighborhood: string) => {
      let data = `${selectedCity} ${neighborhood}`;

      setSelections((prev) => {
        // 이미 선택된 항목이라면 삭제
        if (prev.includes(data)) {
          return prev.filter((selection) => selection !== data);
        }

        // "전체" 선택 시, 해당 시의 모든 구를 제거하고 "전체" 추가
        if (neighborhood === "전체") {
          const city = selectedCity;
          // 해당 시에 대한 구들을 모두 삭제하고 "전체"만 추가
          const newSelections = prev.filter(
            (selection) => !selection.startsWith(city || "")
          );
          data = `${city} 전체`;
          return [...newSelections, data];
        }

        // "전체"가 선택된 상태에서 구를 선택하면 "전체"를 제거하고 구를 추가
        if (prev.includes(`${selectedCity} 전체`)) {
          const newSelections = prev.filter(
            (selection) => selection !== `${selectedCity} 전체`
          );
          return [...newSelections, data];
        }

        // 최대 10개까지 선택 가능
        if (prev.length >= 10) {
          alert("최대 10개까지 선택할 수 있습니다.");
          return prev;
        }

        // 기존 선택 항목 추가
        return [...prev, data];
      });
    },
    [selectedCity]
  );

  // 선택한 항목 삭제 함수
  const handleRemoveSelection = (selection: string) => {
    setSelections((prev) => prev.filter((s) => s !== selection));
  };

  return (
    <div className="w-full max-w-3xl mx-auto py -4">
      <div className="border-b rounded-lg">
        <div className="grid grid-cols-2 h-[400px]">
          {/* 시/도 선택 */}
          <ScrollArea className="h-full border-r overflow-y-auto">
            {Object.keys(regionData).map((city) => (
              <div
                key={city}
                className={`p-3 cursor-pointer ${
                  selectedCity === city ? " bg-wikoGreen/50 font-semibold" : ""
                }`}
                onClick={() => {
                  setSelectedCity(city);
                }}
              >
                {city}
              </div>
            ))}
          </ScrollArea>

          {/* 시/구/군 선택 */}
          <ScrollArea className="h-full overflow-y-auto">
            {selectedCity &&
              regionData[selectedCity].map((district) => {
                const isSelected = selections.includes(
                  `${selectedCity} ${district}`
                ); // 선택 여부 확인

                return (
                  <div
                    key={district}
                    className={`p-3 cursor-pointer ${
                      isSelected ? "bg-wikoGreen/50 font-semibold" : ""
                    }`}
                    onClick={() => handleSelection(district)}
                  >
                    {district}
                  </div>
                );
              })}
          </ScrollArea>
        </div>
      </div>

      <div className="mt-4 mx-3">
        <p className="text-sm text-gray-500 mb-2">
          최대 10개까지 선택할 수 있어요.
        </p>
        <div className="flex gap-2 overflow-x-auto w-full scrollbar-hide">
          {selections.map((selection) => (
            <li
              key={selection}
              className="bg-wikoGreen/30 py-1 px-3 rounded-xl text-sm flex items-center gap-1.5 flex-shrink-0"
            >
              {selection}
              <button onClick={() => handleRemoveSelection(selection)}>
                <CircleX size={16} />
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
