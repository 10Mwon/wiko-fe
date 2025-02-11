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
