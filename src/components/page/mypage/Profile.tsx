import { dummyMyProfile } from "@/store/dummy";
import { MyProfileType } from "@/types/myPageType";
import Image from "next/image";
export default function Profile() {
  const myprofileData: MyProfileType = dummyMyProfile;
  return (
    <div className="text-white flex flex-col items-center gap-6 justify-center">
      <Image
        className="rounded-full justify-center shadow-md "
        src={myprofileData.img}
        width={120}
        height={120}
        alt={"프로필 이미지"}></Image>
      <section className="flex flex-col gap-2 font-semibold tracking-wider items-center ">
        <h2>{myprofileData.name}</h2>
        <p className="items-center text-sm">{myprofileData.location}</p>
      </section>
    </div>
  );
}
