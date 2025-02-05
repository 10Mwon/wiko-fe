"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

export default function PriceRangeSlider({
  range,
  setRange,
}: {
  range: number[]; // [min, max] 형태의 숫자 배열
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  return (
    <div className="w-full max-w-xl py-12">
      <div className="relative">
        <SliderPrimitive.Root
          className="relative flex w-full touch-none select-none items-center"
          value={range}
          max={5000000}
          min={0}
          step={1000}
          onValueChange={setRange}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow rounded-full bg-[#E8E6EA]">
            <SliderPrimitive.Range className="absolute h-full rounded-full bg-[#8F98A9]" />
          </SliderPrimitive.Track>

          {range.map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className="block h-7 w-7 rounded-full shadow-xl border-[4px] border-[#FFFDFD] bg-[#8F98A9] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />
          ))}
        </SliderPrimitive.Root>
      </div>
    </div>
  );
}
