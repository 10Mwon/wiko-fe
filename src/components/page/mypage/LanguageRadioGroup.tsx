"use client";
import { languageSetting, LanguageSetting } from "@/store/languageSetting";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageRadioGroup() {
  const data: LanguageSetting[] = languageSetting;
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedLanguage = document.cookie.replace(
      /(?:(?:^|.*;\s*)NEXT_LOCALE\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/; max-age=31536000`; // 1년 유지
    router.refresh();
  };

  return (
    <ul className="flex flex-col font-semibold gap-6">
      {data.map((item, index) => (
        <li key={index} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image src={item.image} alt={item.nation} width={69} height={69} />
            <span className="text-lg">{item.nation}</span>
          </div>
          <input
            type="radio"
            name="language"
            value={item.code}
            checked={selectedLanguage === item.code}
            onChange={handleLanguageChange}
            className="w-5 h-5 accent-wikoBlue cursor-pointer"
          />
        </li>
      ))}
    </ul>
  );
}
