"use client";

import MonthPicker from "@/components/ui/custom/CustomMonthPicker";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { format } from "date-fns";
import { useRef, useState } from "react";

export default function OverMonthSection() {
  const { resumeData, setCareerDetail } = useResumeStore();
  const [isPickerOpen, setIsPickerOpen] = useState<{
    start: boolean;
    end: boolean;
  }>({
    start: false,
    end: false,
  });
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleMonthChange = (newMonth: Date, type: "start" | "end") => {
    const formattedDate = format(newMonth, "yyyy-MM");
    if (type === "start") {
      setCareerDetail("joinedAt", formattedDate);
      setIsPickerOpen({ start: false, end: false });
    } else {
      setCareerDetail("leavedAt", formattedDate);
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
      {/* ✅ 입사 연월 선택 */}
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder="입사 연월"
          value={resumeData.careerDetail?.joinedAt || ""}
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
          value={
            resumeData.careerDetail?.isWorking
              ? ""
              : resumeData.careerDetail?.leavedAt || ""
          }
          className="p-1 w-24 border-wikoGray border-[1px] rounded-xl cursor-pointer bg-white text-center"
          onFocus={() => {
            if (!resumeData.careerDetail?.isWorking) {
              setIsPickerOpen({ start: false, end: true });
            }
          }}
          onBlur={() => handleBlur("end")}
          disabled={resumeData.careerDetail?.isWorking}
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
