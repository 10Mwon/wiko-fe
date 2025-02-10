"use client";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function ProfileImageUpload({
  image,
  setImage,
}: {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="my-6 flex aspect-square items-center justify-center rounded-full bg-gray-100 overflow-hidden w-32 h-32">
      {image ? (
        <Image
          src={image}
          alt="Profile Preview"
          className="w-full  rounded-lg"
          width={64}
          height={64}
        />
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="rounded-full bg-gray-300 p-2">
          <Camera className="h-8 w-8 " />
        </button>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  );
}
