"use client";
import { useTranslations } from "next-intl";

export default function SelectedItem({
  keyword,
  minPay,
  maxPay,
  startAddress,
  endAddress,
  industryTypeList,
}: {
  keyword: string;
  minPay: string;
  maxPay: string;
  startAddress: string;
  endAddress: string;
  industryTypeList: string;
}) {
  const selectedItems: string[] = [];
  const l = useTranslations("job");
  const k = useTranslations("koreanMap");
  const i = useTranslations("reverseIndustryData");

  if (startAddress !== "") {
    if (endAddress !== "")
      selectedItems.push(k(startAddress) + " " + k(endAddress) + ",");
    else selectedItems.push(startAddress);
  }

  if (keyword !== "") {
    selectedItems.push(keyword);
  }

  if (minPay !== "0") {
    selectedItems.push(`${l("연봉")} ${Number(minPay).toLocaleString()} ↑,`);
  }

  if (maxPay !== "50000000") {
    selectedItems.push(`${l("연봉")} ${Number(maxPay).toLocaleString()} ↓,`);
  }

  if (industryTypeList !== "") {
    selectedItems.push(industryTypeList);
    const data = industryTypeList.replaceAll("_", "·");
    const str = data.split(",");
    console.log(str);
    str.map((x) => console.log(i(x)));
  }

  return (
    <section className="flex flex-wrap bg-[#F6F6F6] w-full mt-6 gap-1 py-2.5 px-2">
      {selectedItems.map((item) => (
        <div className="gap-2" key={item}>
          {item}
        </div>
      ))}
    </section>
  );
}
