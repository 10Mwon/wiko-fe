"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RegionSelector from "./RegionSelector";

export default function LocationFilterDrawer({
  location,
}: {
  location: string;
}) {
  const data = location === "" ? [] : location.split(",");
  const [selections, setSelections] = useState<string[]>(data);

  const router = useRouter();
  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("location", selections.join(","));
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <Drawer>
      <DrawerTrigger className="bg-[#F0EDFC] py-1.5 px-7 text-[#4C4C4C] font-semibold rounded-3xl shadow-xl">
        지역
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b-[1.5px] border-b-[#DED1EB] relative">
          <DrawerTitle>희망근로지 </DrawerTitle>
        </DrawerHeader>
        <RegionSelector selections={selections} setSelections={setSelections} />
        <DrawerFooter className="px-0">
          <DrawerClose asChild>
            <button
              onClick={handleSearch}
              className="bg-wikoBlue mx-7 py-3 rounded-xl text-white"
            >
              적용하기
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
