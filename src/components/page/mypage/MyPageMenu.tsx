"use client";
import { Switch } from "@/components/ui/switch";
import { MyPageMenuData, NavDataType } from "@/store/Nav";
import { ChevronRight } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function MyPageMenu() {
  const menuData: NavDataType[] = MyPageMenuData;
  const t = useTranslations("mypage");
  const router = useRouter();

  const handleClick = (item: NavDataType) => {
    if (item.item === "logout") {
      signOut({ redirect: true });
    } else {
      router.push(`/mypage/${item.href}`);
    }
  };

  return (
    <ul className="flex flex-col gap-6 font-bold">
      <li className="flex justify-between text-xl">
        <label htmlFor="notification">{t("notiOnOff")}</label>
        <Switch className=" bg-wikoBlue" id="notification" />
      </li>
      {menuData.map((item, index) => (
        <li key={index} className="flex justify-between text-xl">
          <p>{t(item.item)}</p>
          <button
            onClick={() => handleClick(item)}
            className="flex items-center">
            <ChevronRight />
          </button>
        </li>
      ))}
    </ul>
  );
}
