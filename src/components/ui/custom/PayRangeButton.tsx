"use client";

import * as React from "react";

export default function PayRangeButton({
  setRange,
  minPay,
  selected,
  onClick,
}: {
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
  minPay: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-normal text-xs py-2.5 px-3 rounded-full shadow-[2px_2px_3px_#D9D9D9] ${
        selected ? "bg-wikoGreen text-white font-semibold" : "bg-white"
      }`}
    >
      {minPay}
    </button>
  );
}
