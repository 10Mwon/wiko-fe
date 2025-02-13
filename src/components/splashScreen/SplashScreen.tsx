"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState<null | boolean>(null);
  useEffect(() => {
    const navigationEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isReload = navigationEntry?.type === "reload";
    if (isReload) {
      setIsVisible(false);
    } else {
      const hasSeenSplash = sessionStorage.getItem("splashSeen");
      if (hasSeenSplash) {
        setIsVisible(false);
      } else {
        setTimeout(() => {
          sessionStorage.setItem("splashSeen", "true");
          setIsVisible(false);
        }, 2000);
        setIsVisible(true);
      }
    }
  }, []);

  if (isVisible === null || !isVisible) return null;

  return (
    <div className="font-lexend flex-col text-white font-bold fixed inset-0 flex items-center justify-center bg-[#6A51E6] min-h-screen z-50">
      <h1 className="text-[64px] items-center tracking-widest">WIKO</h1>
      <h2 className="text-[15px] animate-fade-in">한국에 오신걸 환영합니다</h2>
      <h3 className="font-light animate-fade-in-delay">Work + Korea</h3>
    </div>
  );
}
