"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RelatiedLocation {
  startAddress: string; // 도(道) 이름
  endAddress: string; // 도시 이름 (줄임)
  id: number; // 고유 ID
  location: string; // 전체 도시 이름
}

export default function LocationSelector({
  endAddress = relatiedLocation[0].endAddress,
}: {
  endAddress: string;
}) {
  const [startAddress, setStartAddress] = useState<string>("");
  const [location, setEndAddress] = useState<string>(endAddress);

  const router = useRouter();
  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("startAddress", startAddress);
    newSearchParams.set("endAddress", location);
    router.push(`?${newSearchParams.toString()}`);
  };
  return (
    <section className="flex justify-between mt-5">
      {relatiedLocation.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            handleSearch();
            setStartAddress(item.startAddress);
            setEndAddress(item.endAddress);
          }}
          className={` text-black font-semibold py-1 px-3 rounded-2xl flex-wrap
            ${
              endAddress == item.endAddress
                ? "bg-wikoBlue text-white"
                : "bg-[#F0EDFC]"
            }`}
        >
          {item.endAddress}
        </div>
      ))}
    </section>
  );
}

export const relatiedLocation: RelatiedLocation[] = [
  {
    startAddress: "경상북도",
    endAddress: "문경",
    id: 1,
    location: "문경",
  },
  {
    startAddress: "강원도",
    endAddress: "태백",
    id: 2,
    location: "태백",
  },
  {
    startAddress: "경상북도",
    endAddress: "상주",
    id: 3,
    location: "상주",
  },
  {
    startAddress: "충청남도",
    endAddress: "보령",
    id: 4,
    location: "보령",
  },
  {
    startAddress: "경상남도",
    endAddress: "밀양",
    id: 5,
    location: "밀양",
  },
];
