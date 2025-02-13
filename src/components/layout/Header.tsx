import HomeNav from "./HomeNav";
import LangButton from "./LangButton";

export default function Header({ isAuth }: { isAuth: boolean }) {
  return (
    <header className="w-full items-cen ter justify-end gap-4 p-4 fixed top-0 right-0">
      <div className="relative w-full">
        <h1 className="text-[40px] font-semibold font-lexend text-center text-wikoBlue">
          WIKO
        </h1>
        <h2 className="text-center text-[#7F7F7F] text-[10px]">
          job services for foreign workers
        </h2>
        <HomeNav isAuth={isAuth} />
        <LangButton />
      </div>
    </header>
  );
}
