"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { industryData } from "@/store/jobFilterData";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobFilter({ industry }: { industry: string }) {
  const data = industry === "" ? [] : industry.split(",");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(data);
  const router = useRouter();

  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("industry", selectedIndustries.join(","));
    router.push(`?${newSearchParams.toString()}`);
  };

  const toggleIndustrySelection = (industryName: string) => {
    setSelectedIndustries(
      (prev) =>
        prev.includes(industryName)
          ? prev.filter((item) => item !== industryName) // 이미 선택된 항목은 취소
          : [...prev, industryName] // 선택되지 않은 항목은 추가
    );
  };
  const t = useTranslations("job");
  const i = useTranslations("industryData");
  const b = useTranslations("button");
  return (
    <Drawer>
      <DrawerTrigger className=" drawer_button">{t("industry")}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t("industry")}</DrawerTitle>
        </DrawerHeader>
        <div className="bg-[#F9FAFC]">
          <ul className="flex flex-wrap gap-4 justify-center mt-9 ">
            {industryData.map((item) => (
              <li
                key={item.code}
                className={`py-2 px-5 rounded-full shadow-[2px_2px_3px_#D9D9D9] bg-white ${
                  selectedIndustries.includes(item.code)
                    ? "bg-wikoGreen font-semibold"
                    : ""
                }`}
                onClick={() => toggleIndustrySelection(item.code)}
              >
                {i(item.industryName)}
              </li>
            ))}
          </ul>
          <DrawerFooter className="flex-row px-8 gap-5 mb-8 mt-14 pt-7 pb-0 border-t-[1px] border-[#F0F1F5]">
            <button
              onClick={() => setSelectedIndustries([])}
              className="font-semibold bg-[#F0F1F5]  px-6 py-3 rounded-xl flex-1 "
            >
              {b("reset")}
            </button>
            <DrawerClose asChild>
              <button
                onClick={handleSearch}
                className="bg-wikoGreen px-6 py-3 rounded-xl font-semibold flex-1 "
              >
                {b("apply")}
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
