import { MapPin } from "lucide-react";
import Image from "next/image";
export default function Profile() {
  return (
    <div className=" text-white flex w-full p-4 gap-4 items-center">
      <Image
        className="rounded-full shadow-md"
        src={"https://picsum.photos/200/200"}
        width={60}
        height={60}
        alt={"프로필 이미지"}></Image>
      <section className="flex flex-col items-start">
        <h2>Dong Thu Thao</h2>
        <div className="flex items-center text-sm">
          <MapPin size={18} />
          Geoje Island, Korea
        </div>
      </section>
    </div>
  );
}
