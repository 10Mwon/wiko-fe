import { dummyMyProfile } from "@/store/dummy";
import { MyProfileType } from "@/types/myPageType";
import { MapPin } from "lucide-react";
import Image from "next/image";
export default function Profile() {
  const myprofileData: MyProfileType = dummyMyProfile;
  return (
    <div className="text-black flex flex-col items-center gap-4 justify-center">
      <Image
        className="rounded-full justify-center shadow-md border-wikoBlue border-4"
        src={myprofileData.img}
        width={100}
        height={100}
        alt={"프로필 이미지"}></Image>
      <section className="flex flex-col items-center ">
        <h2>{myprofileData.name}</h2>
        <div className="flex items-center text-sm">
          <MapPin size={18} />
          {myprofileData.location}
        </div>
      </section>
    </div>
  );
}
