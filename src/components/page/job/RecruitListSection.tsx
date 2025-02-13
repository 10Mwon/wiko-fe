"use client";
import { getFilteredRecruitList } from "@/actions/recruit/getRecruit";
import CustomPagination from "@/components/ui/custom/CustomPagination";
import JobItemFallback from "@/components/ui/skeleton/JobItemFallback";
import { JobQueryParams, JobResponse } from "@/types/RecruitDataType";
import { useEffect, useState } from "react";
import JobItem from "./JobItem";
import Noresults from "./Noresults";

export default function RecruitListSection({
  industryTypeList = "",
  startAddress = "",
  endAddress = "",
  minPay = "0",
  maxPay = "50000000",
  page,
  keyword = "",
  lang = "en",
}: JobQueryParams) {
  const [recruitList, setRecruitList] = useState<JobResponse | null>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getRecruitList = async () => {
      const data = await getFilteredRecruitList({
        page: page,
        keyword: keyword,
        minPay: minPay,
        maxPay: maxPay,
        startAddress: startAddress,
        endAddress: endAddress,
        industryTypeList: industryTypeList,
        lang: lang,
      });
      if (data) setIsLoading(false);
      setRecruitList(data);
    };
    getRecruitList();
  }, [
    page,
    keyword,
    minPay,
    maxPay,
    startAddress,
    endAddress,
    industryTypeList,
    lang,
  ]);

  return (
    <>
      <section className="mt-9 grid grid-cols-2 gap-5">
        {!isLoading ? (
          <>
            {recruitList ? (
              recruitList.content.map((item) => (
                <JobItem key={item.id} props={item} />
              ))
            ) : (
              <Noresults />
            )}
          </>
        ) : (
          Array.from({ length: 6 }).map((_, index) => (
            <JobItemFallback key={index} />
          ))
        )}
      </section>
      {recruitList && (
        <CustomPagination
          currentPage={Number(page)}
          totalPages={Number(recruitList.totalPages) ?? 0}
          className=""
        />
      )}
    </>
  );
}
