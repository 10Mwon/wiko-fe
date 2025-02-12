import { commonResType } from "@/types/common";
import { jobDetailType } from "@/types/jobDetailType";
import { JobQueryParams, JobResponse } from "@/types/RecruitDataType";
import { requestWithoutAuth } from "../common/common";

// 검색조회;
export async function getSearchedRecruitList({
  keyword,
  page,
}: {
  keyword: string;
  page: string;
}): Promise<JobResponse> {
  try {
    const endpoint = `recruit/search?keyword=${keyword}&page=${page}}`;

    const data = await requestWithoutAuth<commonResType<JobResponse>>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );
    const res = data as commonResType<JobResponse>;
    return res.result;
  } catch (error) {
    console.error("채용공고 검색 중 오류 발생:", error);
    throw new Error(`채용공고 검색 실패: ${error}`);
  }
}

export async function getFilteredRecruitList({
  industryTypeList = [],
  startAddress = "",
  endAddress = "",
  minSalary = 0,
  maxSalary = 50000000,
  page,
}: JobQueryParams) {
  try {
    const newSearchParams = new URLSearchParams("");
    newSearchParams.set("industryTypeList", industryTypeList.join(","));
    newSearchParams.set("startAddress", startAddress);
    newSearchParams.set("endAddress", endAddress);
    newSearchParams.set("minSalary", minSalary.toString());
    newSearchParams.set("maxSalary", maxSalary.toString());
    newSearchParams.set("page", page.toString());
    // const queryString = createQueryString(question);
    const endpoint = `recruit/search?${newSearchParams}`;

    // const data = await requestWithoutAuth<JobResponse>(
    //   endpoint,
    //   "GET",
    //   undefined,
    //   "no-cache"
    // );

    // return data;
  } catch (error) {
    console.error("채용공고 검색 중 오류 발생:", error);
    throw new Error(`채용공고 검색 실패: ${error}`);
  }
}

//일반조회
export async function getRecruitList(page: string): Promise<JobResponse> {
  try {
    const endpoint = `recruit/list?page=${page}`;
    const data = await requestWithoutAuth<commonResType<JobResponse>>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );
    const res = data as commonResType<JobResponse>;
    // console.log(res.result);
    return res.result;
  } catch (error) {
    console.error("채용공고 리스트 오류:", error);
    throw new Error(`채용공고 리스트 오류: ${error}`);
  }
}

//공고 상세
export async function getRecruitDetail(
  recruitId: string
): Promise<jobDetailType> {
  try {
    const endpoint = `recruit/detail?recruitId=${recruitId}`;

    const data = await requestWithoutAuth<commonResType<jobDetailType>>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );
    const res = data as commonResType<jobDetailType>;
    return res.result;
  } catch (error) {
    console.error("채용공고 상세페이지 오류:", error);
    throw new Error(`채용공고 상세페이지 오류: ${error}`);
  }
}
