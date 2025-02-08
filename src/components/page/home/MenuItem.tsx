import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface MenuItemProps {
  img: StaticImageData;
  text: string;
  href: string;
}

export default function MenuItem({ img, text, href }: MenuItemProps) {
  return (
    <Link href={href} className={`bg-[#6C5CE7] flex items-end`}>
      <Image src={img} alt="" width={95} height={153} />
      <div className="text-white text-lg font-lexend font-semibold p-1 leading-none whitespace-pre-line text-end">
        {text}
      </div>
    </Link>
  );
}
