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
  lang = "en",
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
    newSearchParams.set("lang", lang.toString());
    const endpoint = `recruit/filterList?${newSearchParams}`;
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

//오늘의 공고
export async function getTodayRecruitList() {
  try {
    const data = await requestWithoutAuth<commonResType<JobResponse>>(
      "recruit/today?page=0&size=6",
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

//지역연계일자리 리스트
export async function getLocalRecruitList({
  startAddress = "",
  endAddress = "",
  page,
  keyword = "",
  lang = "en",
}: JobQueryParams) {
  try {
    const newSearchParams = new URLSearchParams("");
    newSearchParams.set("startAddress", startAddress);
    newSearchParams.set("endAddress", endAddress);
    newSearchParams.set("page", page.toString());
    newSearchParams.set("keyword", keyword.toString());
    newSearchParams.set("lang", lang.toString());
    const endpoint = `recruit/localFilter?${newSearchParams}`;
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
