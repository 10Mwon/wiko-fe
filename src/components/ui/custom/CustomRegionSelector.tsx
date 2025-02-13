"use client";

import { regionData } from "@/store/jobFilterData";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useTranslations } from "next-intl";

export default function CustomRegionSelector({
  endAddress,
  startAddress,
  setStartAddress,
  setEndAddress,
}: {
  endAddress: string;
  startAddress: string;
  setStartAddress: React.Dispatch<React.SetStateAction<string>>;
  setEndAddress: React.Dispatch<React.SetStateAction<string>>;
}) {
  const l = useTranslations("location");
  const k = useTranslations("koreanMap");
  console.log(endAddress);
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
                  startAddress === city ? " bg-wikoGreen/50 font-semibold" : ""
                }`}
                onClick={() => {
                  if (startAddress == city) setEndAddress("");
                  else {
                    setStartAddress(city);
                    setEndAddress("");
                  }
                }}
              >
                {k(city)}
              </div>
            ))}
          </ScrollArea>

          {/* 시/구/군 선택 */}
          <ScrollArea className="h-full overflow-y-auto">
            {startAddress &&
              regionData[startAddress].map((district) => {
                return (
                  <div
                    key={district}
                    className={`p-3 cursor-pointer ${
                      endAddress == district
                        ? "bg-wikoGreen/50 font-semibold"
                        : ""
                    }`}
                    onClick={() => {
                      if (endAddress == district) setEndAddress("");
                      else setEndAddress(district);
                    }}
                  >
                    {k(district)}
                  </div>
                );
              })}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
