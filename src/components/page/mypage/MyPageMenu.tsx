import { MyPageMenuData, NavDataType } from "@/store/Nav";
import { ChevronRight } from "lucide-react";

export default function MyPageMenu() {
  const menuData: NavDataType[] = MyPageMenuData;
  return (
    <ul className="flex flex-col gap-6 min-h-screen bg-white font-bold w-full px-12 py-32">
      {menuData.map((item, index) => (
        <li key={index} className="flex justify-between text-xl">
          <p>{item.item}</p>
          <ChevronRight href={item.href}></ChevronRight>
        </li>
      ))}
    </ul>
  );
}
