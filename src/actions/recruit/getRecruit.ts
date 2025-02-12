import { commonResType } from "@/types/common";
import { jobDetailType } from "@/types/jobDetailType";
import { JobQueryParams, JobResponse } from "@/types/RecruitDataType";
import { requestWithoutAuth } from "../common/common";

// const createQueryString = <T extends Record<string, any>>(params: T) => {
//   const searchParams = new URLSearchParams();

//   Object.entries(params).forEach(([key, value]) => {
//     if (value === undefined) return;

//     if (Array.isArray(value)) {
//       value.forEach((item) => searchParams.append(key, item));
//     } else {
//       searchParams.append(key, value.toString());
//     }
//   });

//   return searchParams.toString();
// };
const ReturnSearchParams = (queries: string[]) => {};

//검색조회
export async function getSearchedRecruitList({
  keyword,
  page,
}: {
  keyword: string;
  page: string;
}): Promise<JobResponse> {
  try {
    const endpoint = `recruit/search?keyword=${keyword}&page=${page}}`;

    const data = await requestWithoutAuth<JobResponse>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );

    return data;
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
}: JobQueryParams): Promise<JobResponse> {
  try {
    const newSearchParams = new URLSearchParams("/recruit/search");
    newSearchParams.set("industryTypeList", industryTypeList.join(","));
    newSearchParams.set("startAddress", startAddress);
    newSearchParams.set("endAddress", endAddress);
    newSearchParams.set("minSalary", minSalary.toString());
    newSearchParams.set("maxSalary", maxSalary.toString());
    newSearchParams.set("page", page.toString());
    // const queryString = createQueryString(question);
    const endpoint = `recruit/search?${newSearchParams}`;

    const data = await requestWithoutAuth<JobResponse>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );

    return data;
  } catch (error) {
    console.error("채용공고 검색 중 오류 발생:", error);
    throw new Error(`채용공고 검색 실패: ${error}`);
  }
}

//일반조회
export async function getRecruitList(page: string): Promise<JobResponse> {
  try {
    const queryString = "";
    const endpoint = `recruit/search${queryString ? `?${queryString}` : ""}`;

    const data = await requestWithoutAuth<commonResType<JobResponse>>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );
    console.log(data.result);
    return data.result;
  } catch (error) {
    console.error("채용공고 리스트 오류:", error);
    throw new Error(`채용공고 리스트 오류: ${error}`);
  }
}

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
    // console.log(data.result);
    return data.result;
  } catch (error) {
    console.error("채용공고 상세페이지 오류:", error);
    throw new Error(`채용공고 상세페이지 오류: ${error}`);
  }
}
