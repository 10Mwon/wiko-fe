"use client";

import { useRouter } from "next/navigation";
import Back from "../../../../public/assets/icons/Back";

export default function BackButton({
  className = "",
  size = "28",
  color = "black",
}: {
  className?: string;
  size?: string;
  color?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="뒤로가기"
      className={`${className}`}
    >
      <Back size={size} color={color} />
    </button>
  );
}
