"use client";
import { useState } from "react";
import Home from "../../../public/assets/icons/HomeIcon";
import Mypage from "../../../public/assets/icons/MypageIcon";

export default function AppBar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <nav className="app-bar bg-white">
      {/* <SideMenu setOpenSideMenu={setOpenSideMenu} open={openSideMenu} />
      <MenuButton setOpenSideMenu={setOpenSideMenu} />
      <Alarm size="32" color="black" /> */}
      <div className="flex items-center font-semibold font-lexend text-[20px] gap-2 bg-wikoGreen px-4 py-2 rounded-3xl">
        <Home /> Home
      </div>
      <Mypage color="#777777" />
    </nav>
  );
}
