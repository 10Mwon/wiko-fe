import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface MenuItemProps {
  img: StaticImageData;
  text: string;
  href: string;
}

export default function MenuItem({ img, text, href }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={`bg-[#6C5CE7] flex items-end pt-14 rounded-3xl relative`}
    >
      <Image src={img} alt="" width={95} height={153} />
      <p
        className="absolute  text-white text-lg font-lexend font-semibold whitespace-pre-line text-end bottom-8 right-4"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {text}
      </p>
    </Link>
  );
}
