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
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RegionSelector from "./RegionSelector";
//  startAddress: string;
// endAddress: string;
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
    newSearchParams.set("location", selections.join(","));
    router.push(`?${newSearchParams.toString()}`);
  };
  const l = useTranslations("location");
  const b = useTranslations("button");
  return (
    <Drawer>
      <DrawerTrigger className="bg-white py-1.5 px-7 text-[#4C4C4C] font-semibold rounded-3xl shadow-xl">
        {l("location")}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="">
          <DrawerTitle>{l("wishLocation")} </DrawerTitle>
        </DrawerHeader>
        <div className="bg-[#F9FAFC]">
          <RegionSelector
            selections={selections}
            setSelections={setSelections}
          />
          <DrawerFooter className="flex-row px-8 gap-5 mb-8 pt-7 pb-0 border-[#F0F1F5]">
            <button
              onClick={() => {
                setSelections([]); // 기본 값으로 초기화
              }}
              className="font-semibold bg-[#F0F1F5]  px-6 py-3 rounded-xl flex-1 "
            >
              {b("reset")}
            </button>
            <DrawerClose asChild>
              <button
                onClick={handleSearch}
                className="bg-wikoGreen px-6 py-3 rounded-xl font-semibold flex-1 "
              >
                {b("apply")}
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
