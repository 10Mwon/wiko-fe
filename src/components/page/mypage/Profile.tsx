"use client";
import { getProfile } from "@/actions/auth/profile";
import { dummyMyProfile } from "@/store/dummy";
import { MyProfileType } from "@/types/myPageType";
import { MyProfileResponseType } from "@/types/ResponseType";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Profile() {
  const myprofileData: MyProfileType = dummyMyProfile;
  const [data, setData] = useState<MyProfileResponseType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const profileData = await getProfile();
      setData(profileData);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="text-white flex flex-col items-center gap-6 justify-center">
      <Image
        className="rounded-full justify-center shadow-md "
        src={"/assets/defaultProfileImg.png"}
        width={120}
        height={120}
        alt={"프로필 이미지"}></Image>
      <section className="flex flex-col gap-2 font-semibold tracking-wider items-center ">
        <h2>{data?.name}</h2>
        <p className="items-center text-sm">{data?.address}</p>
      </section>
    </div>
  );
}
