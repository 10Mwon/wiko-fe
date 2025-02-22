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
import CustomRegionSelector from "./CustomRegionSelector";
export default function LocationFilterDrawer({
  location,
}: {
  location: string;
}) {
  const [startAddress, setStartAddress] = useState<string>("");
  const [endAddress, setEndAddress] = useState<string>("");

  const router = useRouter();
  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("startAddress", startAddress);
    if (endAddress == "전체") newSearchParams.set("endAddress", "");
    else newSearchParams.set("endAddress", endAddress);
    router.push(`?${newSearchParams.toString()}`);
  };
  const l = useTranslations("location");
  const b = useTranslations("button");
  return (
    <Drawer>
      <DrawerTrigger className="drawer_button">{l("location")}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="">
          <DrawerTitle>{l("wishLocation")} </DrawerTitle>
        </DrawerHeader>
        <div className="bg-[#F9FAFC]">
          {/* <RegionSelector
            selections={selections}
            setSelections={setSelections}
          /> */}
          <CustomRegionSelector
            startAddress={startAddress}
            endAddress={endAddress}
            setStartAddress={setStartAddress}
            setEndAddress={setEndAddress}
          />
          <DrawerFooter className="flex-row px-8 gap-5 mb-8 pt-7 pb-0 border-[#F0F1F5]">
            <button
              onClick={() => {
                setStartAddress("");
                setEndAddress("");
                // 기본 값으로 초기화
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
