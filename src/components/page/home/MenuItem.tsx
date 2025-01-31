import Link from "next/link";

interface MenuItemProps {
  letter: string;
  text: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  href: string;
}

export default function MenuItem({
  letter,
  text,
  position,
  href,
}: MenuItemProps) {
  const roundedCorners = {
    "top-left": "rounded-tl-3xl items-end",
    "top-right": "rounded-tr-3xl items-start",
    "bottom-left": "rounded-bl-3xl items-end",
    "bottom-right": "rounded-br-3xl items-start",
  };

  return (
    <Link
      href={href}
      className={`bg-[#6C5CE7] flex flex-col justify-between aspect-square  shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${roundedCorners[position]}`}
    >
      <div className="text-6xl text-[#8B7CF7] mb-auto font-lexend font-black leading-10 p-3 ">
        {letter}
      </div>
      <div className="text-white text-lg font-lexend font-semibold p-1 leading-none ">
        {text}
      </div>
    </Link>
  );
}
