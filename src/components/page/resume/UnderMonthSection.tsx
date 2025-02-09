"use client";

import MonthPicker from "@/components/ui/custom/CustomMonthPicker";
import { format } from "date-fns";
import { useRef, useState } from "react";

export default function UnderMonthSection() {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [selectedStartMonth, setSelectedStartMonth] = useState<string>("");
  const [workDays, setWorkDays] = useState<string>("");
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleMonthChange = (newMonth: Date) => {
    setSelectedStartMonth(format(newMonth, "yyyy-MM"));
    setIsPickerOpen(false);
  };

  return (
    <div className="flex items-center gap-1">
      <div className="relative flex items-center gap-1">
        <input
          type="text"
          readOnly
          placeholder="입사 연월"
          value={selectedStartMonth}
          className="p-1 w-24 border-wikoGray border-[1px] rounded-xl cursor-pointer bg-white text-center"
          onClick={() => setIsPickerOpen(true)}
        />
        <input
          type="text"
          placeholder="일"
          value={workDays}
          onChange={(e) => setWorkDays(e.target.value)}
          className="p-1 w-12 border-wikoGray border-[1px] rounded-xl text-center"
        />
        {isPickerOpen && (
          <div
            ref={pickerRef}
            className="absolute top-full left-0 z-10 bg-white border border-gray-300 shadow-md rounded-lg mt-1">
            <MonthPicker
              currentMonth={new Date()}
              onMonthChange={handleMonthChange}
            />
          </div>
        )}
      </div>

      <p className="whitespace-nowrap text-sm">일 동안 근무</p>
    </div>
  );
}
