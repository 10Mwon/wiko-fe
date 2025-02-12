import { commonResponse, resumePostType } from "@/types/RequestType";
import { requestWithAuth } from "../common/common";

export async function postResume(resumeData: resumePostType): Promise<unknown> {
  console.log("들어갈 데이터", resumeData);
  try {
    const data = await requestWithAuth<commonResponse<unknown>>(
      "resume",
      "POST",
      resumeData
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("에러발생", error);
    throw new Error(`이력서 업로드에러 ${error}`);
  }
}
