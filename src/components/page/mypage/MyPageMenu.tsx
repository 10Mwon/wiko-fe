import { Switch } from "@/components/ui/switch";
import { MyPageMenuData, NavDataType } from "@/store/Nav";
import { ChevronRight } from "lucide-react";

export default function MyPageMenu() {
  const menuData: NavDataType[] = MyPageMenuData;
  return (
    <ul className="flex flex-col gap-6 font-bold">
      <li className="flex justify-between text-xl">
        <label htmlFor="notification">알림 켜기/끄기</label>
        <Switch className=" bg-wikoBlue" id="notification" />
      </li>
      {menuData.map((item, index) => (
        <li key={index} className="flex justify-between text-xl">
          <p>{item.item}</p>
          <ChevronRight href={item.href}></ChevronRight>
        </li>
      ))}
    </ul>
  );
}
