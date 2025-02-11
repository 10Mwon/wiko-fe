"use client";
import { Switch } from "@/components/ui/switch";
import { MyPageMenuData, NavDataType } from "@/store/Nav";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MyPageMenu() {
  const menuData: NavDataType[] = MyPageMenuData;
  const t = useTranslations("mypage");
  return (
    <ul className="flex flex-col gap-6 font-bold">
      <li className="flex justify-between text-xl">
        <label htmlFor="notification">{t("notiOnOff")}</label>
        <Switch className=" bg-wikoBlue" id="notification" />
      </li>
      {menuData.map((item, index) => (
        <li key={index} className="flex justify-between text-xl">
          <p>{t(item.item)}</p>
          <a href={`mypage/${item.href}`}>
            <ChevronRight></ChevronRight>
          </a>
        </li>
      ))}
    </ul>
  );
}
