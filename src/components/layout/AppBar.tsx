"use client";
import Link from "next/link";
import Home from "../../../public/assets/icons/HomeIcon";
import Newspaper from "../../../public/assets/icons/Newspaper";
import Person from "../../../public/assets/icons/Person";
import BackButton from "../ui/button/BackButton";

export default function AppBar() {
  return (
    <nav className="app-bar bg-white [&>a>span]:text-[10px] [&>a>span]:text-center">
      <div className="flex flex-col gap-1 items-center text-[10px]">
        <BackButton size="28" color="#21272A" />
        <span>Back</span>
      </div>
      <Link href="/" className="app-bar-link">
        <Home color="#21272A" size="28" />
        <span>Home</span>
      </Link>
      <Link href="/job" className="app-bar-link">
        <Newspaper size="28" />
        <span>Job info</span>
      </Link>
      <Link href="/mypage" className="app-bar-link">
        <Person color="#21272A" size="28" />
        <span>My</span>
      </Link>
    </nav>
  );
}
