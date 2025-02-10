"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function LinkToChat() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleStart = (clientX: number) => {
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (isDragging && containerRef.current && dragRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const dragRect = dragRef.current.getBoundingClientRect();
      const newPosition = clientX - containerRect.left - dragRect.width / 2;
      const maxPosition = containerRect.width - dragRect.width;
      setPosition(Math.max(0, Math.min(newPosition, maxPosition)));
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (
      containerRef.current &&
      position > containerRef.current.offsetWidth * 0.6
    ) {
      handleClick();
    }
    setPosition(0);
  };

  const handleClick = () => {
    router.push("/chat");
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const cleanup = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
    }

    return cleanup;
  }, [isDragging, handleEnd]); // Added handleEnd to dependencies

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[54px] rounded-full bg-[#F0F0F0] cursor-pointer overflow-hidden mb-[58px]"
    >
      <div
        ref={dragRef}
        className={`absolute top-0 left-0 h-full px-8 bg-[#ADE6BB] rounded-full 
          flex items-center justify-center select-none
          ${
            isDragging
              ? "transition-none"
              : "transition-transform duration-300 ease-in-out"
          }`}
        style={{ transform: `translateX(${position}px)` }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      >
        <span className="text-gray-600 text-xl font-semibold whitespace-nowrap">
          chat
        </span>
      </div>
    </div>
  );
}
