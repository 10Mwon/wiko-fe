import {
  add,
  eachMonthOfInterval,
  endOfYear,
  format,
  isEqual,
  isFuture,
  parse,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function getStartOfCurrentMonth() {
  return startOfMonth(startOfToday());
}

interface MonthPickerProps {
  currentMonth: Date;
  onMonthChange: (newMonth: Date) => void;
}

export default function MonthPicker({
  currentMonth,
  onMonthChange,
}: MonthPickerProps) {
  const [currentYear, setCurrentYear] = useState(format(currentMonth, "yyyy"));
  const firstDayCurrentYear = parse(currentYear, "yyyy", new Date());

  const months = eachMonthOfInterval({
    start: firstDayCurrentYear,
    end: endOfYear(firstDayCurrentYear),
  });

  function previousYear() {
    const firstDayNextYear = add(firstDayCurrentYear, { years: -1 });
    setCurrentYear(format(firstDayNextYear, "yyyy"));
  }

  function nextYear() {
    const firstDayNextYear = add(firstDayCurrentYear, { years: 1 });
    setCurrentYear(format(firstDayNextYear, "yyyy"));
  }

  return (
    <div className="p-3 border-wikoGray border-2 rounded-lg">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="space-y-4">
          <div className="relative flex items-center justify-center pt-1">
            <div
              className="text-sm font-medium"
              aria-live="polite"
              role="presentation"
              id="month-picker">
              {format(firstDayCurrentYear, "yyyy")}
            </div>

            <div className="flex items-center space-x-1">
              <button
                name="previous-year"
                aria-label="Go to previous year"
                className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 border border-gray-300 rounded-md"
                type="button"
                onClick={previousYear}>
                <ChevronLeft className="h-4 w-4 justify-self-center" />
              </button>
              <button
                name="next-year"
                aria-label="Go to next year"
                className="h-7 w-7  bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
                type="button"
                disabled={isFuture(add(firstDayCurrentYear, { years: 1 }))}
                onClick={nextYear}>
                <ChevronRight className="h-4 w-4 justify-self-center" />
              </button>
            </div>
          </div>
          <hr />
          <div
            className="grid w-64 grid-cols-3 gap-2"
            role="grid"
            aria-labelledby="month-picker">
            {months.map((month) => (
              <div
                key={month.toString()}
                className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md dark:[&:has([aria-selected])]:bg-gray-800"
                role="presentation">
                <button
                  name="day"
                  className={`inline-flex h-9 w-14 items-center justify-center rounded-md p-0 text-sm font-normal ring-offset-white transition-colors 
                  hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50 ${
                    isEqual(month, currentMonth)
                      ? "bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50 dark:hover:text-gray-900 dark:focus:bg-gray-50 dark:focus:text-gray-900"
                      : isEqual(month, getStartOfCurrentMonth())
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                      : ""
                  }`}
                  disabled={isFuture(month)}
                  role="gridcell"
                  tabIndex={-1}
                  type="button"
                  onClick={() => onMonthChange(month)}>
                  <time dateTime={format(month, "yyyy-MM-dd")}>
                    {format(month, "MMM")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// 참고용
//https://gist.github.com/mattstobbs/1d7d2396a8c1a7ee6811d0be6e6e49dd
