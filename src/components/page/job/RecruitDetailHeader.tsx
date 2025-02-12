"use";
import BackButton from "@/components/ui/button/BackButton";
import Image from "next/image";

export default function RecruitDetailHeader({
  imgUrl,
  company,
  location,
}: {
  imgUrl: string;
  company: string;
  location: string;
}) {
  return (
    <header className="bg-wikoGreen px-4 pt-6 pb-8 ring-[40px] ring-wikoGreen">
      <BackButton />
      <div className="flex-1 flex justify-center mb-4">
        <Image
          src={imgUrl}
          alt="Hanwha"
          width={100}
          height={24}
          className="h-20 object-contain"
        />
      </div>
      <h1 className="text-center font-semibold">
        {company}
        <p className="text-sm font-normal mt-1 text-gray-600">{location}</p>
      </h1>
    </header>
  );
}
