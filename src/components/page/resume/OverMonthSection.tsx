"use client";

import { useClickOutside } from "@/app/hooks/useClickOutside";
import MonthPicker from "@/components/ui/custom/CustomMonthPicker";
import { useResumeStore } from "@/store/zustand/resumeStore";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function OverMonthSection() {
  const { resumeData, setCareerDetail } = useResumeStore();
  const [isPickerOpen, setIsPickerOpen] = useState<{
    start: boolean;
    end: boolean;
  }>({
    start: false,
    end: false,
  });

  const startPickerRef = useClickOutside(() =>
    setIsPickerOpen((prev) => ({ ...prev, start: false }))
  );
  const endPickerRef = useClickOutside(() =>
    setIsPickerOpen((prev) => ({ ...prev, end: false }))
  );

  const handleMonthChange = (newMonth: Date, type: "start" | "end") => {
    const formattedDate = format(newMonth, "yyyy-MM");
    if (type === "start") {
      setCareerDetail("joinedAt", formattedDate);
      setIsPickerOpen((prev) => ({ ...prev, start: false }));
    } else {
      setCareerDetail("leavedAt", formattedDate);
      setIsPickerOpen((prev) => ({ ...prev, end: false }));
    }
  };
  const t = useTranslations("createResume");
  return (
    <div className="mt-1 flex items-center justify-around gap-2">
      {/* 입사 연월 */}
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder={t("입사연월")}
          value={resumeData.careerDetail?.joinedAt || ""}
          className="p-1 w-24 border-gray-400 border-[1px] rounded-xl cursor-pointer bg-white text-center"
          onFocus={() => setIsPickerOpen((prev) => ({ ...prev, start: true }))}
        />
        {isPickerOpen.start && (
          <div
            ref={startPickerRef} // useClickOutside 훅 적용
            className="absolute z-10 bg-white border border-gray-300 shadow-md rounded-lg mt-1">
            <MonthPicker
              currentMonth={new Date()}
              onMonthChange={(month) => handleMonthChange(month, "start")}
            />
          </div>
        )}
      </div>

      <p>~</p>

      {/* 퇴사 연월 */}
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder={t("퇴사연월")}
          value={
            resumeData.careerDetail?.isWorking
              ? ""
              : resumeData.careerDetail?.leavedAt || ""
          }
          className="p-1 w-24 border-gray-400 border-[1px] rounded-xl cursor-pointer bg-white text-center"
          onFocus={() => {
            if (!resumeData.careerDetail?.isWorking) {
              setIsPickerOpen((prev) => ({ ...prev, end: true }));
            }
          }}
          disabled={resumeData.careerDetail?.isWorking}
        />
        {isPickerOpen.end && (
          <div
            ref={endPickerRef}
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
