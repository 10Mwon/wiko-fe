import Image from "next/image";
import bannerImg from "../../../../public/assets/home/bannerImage.png";

export default function HomeBanner() {
  return (
    <section className="h-[87px] w-full bg-[#F0EDFC] flex px-6 py-3 justify-between mt-8">
      <div>
        <div className="text-[15px] w-[144px] whitespace-pre-line break-words font-light leading-tight">
          {`recruitment services
  for foreign workers`}
        </div>
        <div className="font-lexend text-xl mt-[1px]">Find it at WIKO</div>
      </div>
      <div className="w-[90px] mr-6">
        <Image
          src={bannerImg}
          alt="banner Img"
          width={200}
          height={200}
          objectFit="cover"
          className=""
        />
      </div>
    </section>
  );
}
