import { commonResType } from "@/types/common";
import { jobDetailType } from "@/types/jobDetailType";
import { JobQueryParams, JobResponse } from "@/types/RecruitDataType";
import { requestWithoutAuth } from "../common/common";

const createQueryString = <T extends Record<string, any>>(params: T) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else {
      searchParams.append(key, value.toString());
    }
  });

  return searchParams.toString();
};

export async function getSearchedRecruitList(
  question: JobQueryParams
): Promise<JobResponse> {
  try {
    const queryString = createQueryString(question);
    const endpoint = `recruit/search${queryString ? `?${queryString}` : ""}`;

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

export async function getRecruitList(page: string): Promise<JobResponse> {
  try {
    const queryString = createQueryString({ page: page });
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
