import { NavData } from "@/store/Nav";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import ExitIcon from "../../../public/assets/icons/ExitIcon";

export default function SideMenu({
  setOpenSideMenu,
  open,
}: {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSidebar = () => {
    setOpenSideMenu((prev) => !prev);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sidebarRef.current) return;

    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      setOpenSideMenu(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 w-[224px] h-screen bg-wikoBlue/90 shadow-lg transition-transform duration-500 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ChevronLeft
        color="white"
        className="fixed top-10 right-5 cursor-pointer"
        onClick={handleSidebar}
      />
      <ul className="mt-28 ml-4 font-semibold">
        {NavData.map((item, index) => (
          <li key={index} className="text-white mb-4">
            <Link href={item.href}>{item.item}</Link>

            {item.sub && (
              <ul>
                {item.sub.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-white pl-4 font-medium mt-[6px] text-sm"
                  >
                    <Link href={subItem.href}>{subItem.item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* 로그아웃 버튼 */}
      <button className="flex text-white font-semibold fixed bottom-2 right-3 gap-[6px]">
        로그아웃 <ExitIcon />
      </button>
    </aside>
  );
}
