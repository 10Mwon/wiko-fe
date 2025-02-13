import Image from "next/image";
import bannerImg from "../../../../public/assets/home/bannerImage.png";

export default function HomeBanner() {
  return (
    <section className="h-[87px] w-full bg-wikoBlue flex px-6 py-3 justify-between mt-8">
      <div className="text-[15px] my-auto font-semibold text-white  whitespace-pre-line">
        {`Subsidies are provided 
for local employment`}
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
