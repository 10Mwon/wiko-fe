"use client";
import { useState } from "react";
import Alarm from "../../../public/assets/icons/Alarm";
import Home from "../../../public/assets/icons/HomeIcon";
import Mypage from "../../../public/assets/icons/MypageIcon";
import MenuButton from "../ui/button/MenuButton";
import SideMenu from "./SideMenu";

export default function AppBar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <nav className="app-bar bg-white">
      <SideMenu setOpenSideMenu={setOpenSideMenu} open={openSideMenu} />
      <MenuButton setOpenSideMenu={setOpenSideMenu} />
      <Alarm size="32" color="black" />
      <Home />
      <Mypage />
    </nav>
  );
}
