"use client";
import MonthPicker from "@/components/ui/custom/CustomMonthPicker";
import { format } from "date-fns";
import { useRef, useState } from "react";

export default function OverMonthSection() {
  const [isPickerOpen, setIsPickerOpen] = useState<{
    start: boolean;
    end: boolean;
  }>({
    start: false,
    end: false,
  });
  const [selectedStartMonth, setSelectedStartMonth] = useState<string>("");
  const [selectedEndMonth, setSelectedEndMonth] = useState<string>("");
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleMonthChange = (newMonth: Date, type: "start" | "end") => {
    if (type === "start") {
      setSelectedStartMonth(format(newMonth, "yyyy-MM"));
      setIsPickerOpen({ start: false, end: false });
    } else {
      setSelectedEndMonth(format(newMonth, "yyyy-MM"));
      setIsPickerOpen({ start: false, end: false });
    }
  };

  const handleBlur = (type: "start" | "end") => {
    setTimeout(() => {
      setIsPickerOpen((prev) => ({ ...prev, [type]: false }));
    }, 200);
  };

  return (
    <div className="mt-1 flex items-center justify-around gap-2">
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder="입사 연월"
          value={selectedStartMonth}
          className="p-1 w-24 border-wikoGray border-[1px] rounded-xl cursor-pointer bg-white text-center"
          onFocus={() => setIsPickerOpen({ start: true, end: false })}
          onBlur={() => handleBlur("start")}
        />
        {isPickerOpen.start && (
          <div
            ref={pickerRef}
            className="absolute z-10 bg-white border border-gray-300 shadow-md rounded-lg mt-1">
            <MonthPicker
              currentMonth={new Date()}
              onMonthChange={(month) => handleMonthChange(month, "start")}
            />
          </div>
        )}
      </div>
      <p>~</p>
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder="퇴사 연월"
          value={selectedEndMonth}
          className="p-1 w-24 border-wikoGray border-[1px] rounded-xl cursor-pointer bg-white text-center"
          onFocus={() => setIsPickerOpen({ start: false, end: true })}
          onBlur={() => handleBlur("end")}
        />
        {isPickerOpen.end && (
          <div
            ref={pickerRef}
            className="absolute z-10 right-6 bg-white border border-gray-300 shadow-md rounded-lg mt-1">
            <MonthPicker
              currentMonth={new Date()}
              onMonthChange={(month) => handleMonthChange(month, "end")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
