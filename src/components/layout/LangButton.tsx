"use client";
import { languageSetting } from "@/store/languageSetting";
import Image from "next/image";
import Link from "next/link";

export default function LangButton() {
  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? cookie.split("=")[1] : null;
  };

  const locale = getCookie("NEXT_LOCALE") ?? "en"; // 쿠키에서 현재 언어 코드 가져오기
  const selectedLanguage = languageSetting.find((lang) => lang.code === locale);

  return (
    <Link
      href={"mypage/lang"}
      className="rounded-full w-8 h-8 absolute top-5 right-5"
    >
      {selectedLanguage ? (
        <Image
          src={selectedLanguage.image}
          alt={selectedLanguage.nation}
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <span>🌍</span> // 기본 아이콘 (언어 설정이 없을 경우)
      )}
    </Link>
  );
}
