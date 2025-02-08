"use client";
import { languageSetting, LanguageSetting } from "@/store/languageSetting";
import Image from "next/image";
import { useState } from "react";

export default function LanguageRadioGroup() {
  const data: LanguageSetting[] = languageSetting;
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <ul className="flex flex-col font-semibold gap-6">
      {data.map((item, index) => (
        <li key={index} className="flex items-center justify-between gap-4  ">
          <div className="flex items-center gap-4">
            <Image src={item.image} alt={item.nation} width={69} height={69} />
            <span className="text-lg">{item.nation}</span>
          </div>
          <input
            type="radio"
            name="language"
            value={item.nation}
            checked={selectedLanguage === item.nation}
            onChange={handleLanguageChange}
            className="w-5 h-5 accent-wikoBlue cursor-pointer"
          />
        </li>
      ))}
    </ul>
  );
}
