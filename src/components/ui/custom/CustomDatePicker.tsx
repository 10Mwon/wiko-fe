"use client";

import {
  addMonths,
  format,
  getDay,
  getDaysInMonth,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, useState } from "react";

// 회원가입 -> 생년월일을 이걸로 바꿔서 써야 할 듯 ...
export default function MobileDatePicker() {
  const [date, setDate] = useState<Date>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - 100 + i);

  // 월 목록 (0~11)
  const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2025, i, 1), "MMMM")
  );

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(date);
    newDate.setMonth(months.indexOf(event.target.value));
    setDate(newDate);
  };

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newDate = new Date(date);
    newDate.setFullYear(Number(event.target.value));
    setDate(newDate);
  };

  const handlePrevMonth = () => {
    setDate(subMonths(date, 1));
  };

  const handleNextMonth = () => {
    setDate(addMonths(date, 1));
  };

  const firstDayOfMonth = getDay(startOfMonth(date));
  const daysInMonth = getDaysInMonth(date);

  const daysArray = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="flex items-center justify-center p-4">
      {/* 날짜 선택 버튼 */}
      <button
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className="w-full sm:w-[280px] px-4 py-2 border rounded-md text-left bg-white shadow-md">
        {date != new Date() ? (
          format(date, "PPP")
        ) : (
          <span className="text-gray-400">Pick a date</span>
        )}
      </button>

      {isCalendarOpen && (
        <div className="absolute mt-2 bg-white border rounded-lg shadow-lg p-4 w-[320px] z-10">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-md hover:bg-gray-200">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <select
              value={months[date.getMonth()]}
              onChange={handleMonthChange}
              className="text-lg font-medium bg-transparent border-none">
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              value={date.getFullYear().toString()}
              onChange={handleYearChange}
              className="text-lg font-medium bg-transparent border-none">
              {years.map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>

            <button
              onClick={handleNextMonth}
              className="p-2 rounded-md hover:bg-gray-200">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <div
                key={`${day}-${index}`}
                className="text-gray-600 font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mt-2">
            {daysArray.map((day, index) =>
              day === null ? (
                <div
                  key={`empty-${index}`}
                  className="p-2 text-center text-gray-300"></div>
              ) : (
                <button
                  key={day}
                  onClick={() => {
                    const newDate = new Date(date);
                    newDate.setDate(day);
                    setDate(newDate);
                    setIsCalendarOpen(false);
                  }}
                  className={`p-2 text-center rounded-md ${
                    date.getDate() === day
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}>
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
