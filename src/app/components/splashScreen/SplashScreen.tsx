"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashSeen");

    if (hasSeenSplash) {
      setIsVisible(false); // 첫 실행이 아니면 바로 숨김
    } else {
      setTimeout(() => {
        sessionStorage.setItem("splashSeen", "true");
        setIsVisible(false);
      }, 2000); // 2초 후 숨김
    }
  }, []);

  if (!isVisible) return null; // SplashScreen 제거

  return (
    <div className="font-lexend flex-col text-white  font-bold fixed inset-0 flex items-center justify-center bg-[#6A51E6] min-h-screen">
      <h1 className="text-[64px] items-center tracking-widest">WIKO</h1>
      <h2 className="text-[15px] animate-fade-in ">한국에 오신걸 환영합니다</h2>
      <h3 className="font-light animate-fade-in-delay">Work + Korea</h3>
    </div>
  );
}
