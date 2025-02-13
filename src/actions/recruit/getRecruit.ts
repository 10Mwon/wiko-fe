import { commonResType } from "@/types/common";
import { jobDetailType } from "@/types/jobDetailType";
import { JobQueryParams, JobResponse } from "@/types/RecruitDataType";
import { googleTranslate } from "@/utils/googleTranslate";
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
    const tmp = [];

    for (let i = 0; i < res.result.content.length; i++) {
      tmp.push(await googleTranslate(res.result.content[i]));
    }
    res.result.content = tmp;
    for (let i = 0; i < res.result.content.length; i++) {
      res.result.content[i].pay = res.result.content[i].pay
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return res.result;
  } catch (error) {
    console.error("채용공고 검색 중 오류 발생:", error);
    throw new Error(`채용공고 검색 실패: ${error}`);
  }
}

// 이거씀
//필터링+검색
export async function getFilteredRecruitList({
  industryTypeList = "",
  startAddress = "",
  endAddress = "",
  minPay = "0",
  maxPay = "50000000",
  page,
  keyword = "",
  lang,
}: JobQueryParams) {
  try {
    const newSearchParams = new URLSearchParams("");
    industryTypeList.split(",").forEach((industry) => {
      newSearchParams.append("industryTypeList", industry);
    });
    newSearchParams.set("startAddress", startAddress);
    newSearchParams.set("endAddress", endAddress);
    newSearchParams.set("minPay", minPay.toString());
    newSearchParams.set("maxPay", maxPay);
    newSearchParams.set("page", page.toString());
    newSearchParams.set("keyword", keyword.toString());
    newSearchParams.set("lang", lang);
    const endpoint = `recruit/filterList?${newSearchParams}`;
    console.log(endpoint, "endpoint------------");
    const data = await requestWithoutAuth<commonResType<JobResponse>>(
      endpoint,
      "GET",
      undefined,
      "no-cache"
    );
    const res = data as commonResType<JobResponse>;
    const tmp = [];
    for (let i = 0; i < res.result.content.length; i++) {
      tmp.push(await googleTranslate(res.result.content[i]));
    }
    res.result.content = tmp;
    for (let i = 0; i < res.result.content.length; i++) {
      res.result.content[i].pay = res.result.content[i].pay
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return res.result;
  } catch (error) {
    return null;
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
    const tmp = [];
    for (let i = 0; i < res.result.content.length; i++) {
      tmp.push(await googleTranslate(res.result.content[i]));
    }
    res.result.content = tmp;
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
    const translatedData = await googleTranslate(res.result);
    res.result = translatedData;
    return res.result;
  } catch (error) {
    console.error("채용공고 상세페이지 오류:", error);
    throw new Error(`채용공고 상세페이지 오류: ${error}`);
  }
}
