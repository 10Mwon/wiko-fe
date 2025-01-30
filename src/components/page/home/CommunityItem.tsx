import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function CommunityItem({
  image,
  countryName,
}: {
  image: string | StaticImageData;
  countryName: string;
}) {
  return (
    <Link
      href={`/community/${countryName}`}
      className="rounded-full bg-gray-400 w-[73px] aspect-square shadow-lg overflow-hidden"
    >
      <Image
        src={image}
        alt={countryName}
        width={100}
        height={100}
        priority
        className=""
      />
    </Link>
  );
}
