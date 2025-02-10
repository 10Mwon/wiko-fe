"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileBaseInfo from "./ProfileBaseInfo";
import ProfileImageUpload from "./ProfileImageUpload";

export default function ResumeStep1() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();
  const handleNext = () => {
    sessionStorage.setItem("resumeData", JSON.stringify({ image: image }));
    router.push("/resume/create?step=2");
  };
  return (
    <div className="flex flex-col items-center px-4 my-2 gap-6 w-full">
      <ProfileImageUpload image={image} setImage={setImage} />
      <hr className="border-t border-gray-200 w-full " />
      <ProfileBaseInfo />
      <button
        onClick={handleNext}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl p-4 text-white bg-wikoBlue">
        다음
      </button>
    </div>
  );
}
