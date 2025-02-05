"use client";
import JobFilter from "@/components/ui/custom/JobFilter";
import Search from "../../../../public/assets/icons/Search";

export default function page() {
  const onClickSearchIcon = () => {
    console.log("클릭됨");
  };
  return (
    <>
      <div className="relative">
        <input className="bg-white w-full h-[34px] rounded-xl" />
        <Search
          className="absolute top-0 right-2.5 h-[34px]"
          handler={onClickSearchIcon}
        />
        <section className="mt-14">
          <JobFilter />
        </section>
        <section className="bg-white h-[134px] w-full rounded-xl mt-14 p-4">
          한화 오션
        </section>
      </div>
    </>
  );
}
