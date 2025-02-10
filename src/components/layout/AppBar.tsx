"use client";
import Link from "next/link";
import { useState } from "react";
import Home from "../../../public/assets/icons/HomeIcon";
import Mypage from "../../../public/assets/icons/MypageIcon";

export default function AppBar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <nav className="app-bar bg-white">
      <Link
        href={"/"}
        className="flex items-center font-semibold font-lexend text-[20px] gap-2 bg-wikoGreen px-4 py-2 rounded-3xl"
      >
        <Home /> Home
      </Link>
      <Link href={"/mypage"}>
        <Mypage color="#777777" />
      </Link>
    </nav>
  );
}
