import { commonResponse, resumePostType } from "@/types/RequestType";
import { requestWithAuth } from "../common/common";

export async function postResume(resumeData: resumePostType): Promise<unknown> {
  try {
    const data = await requestWithAuth<commonResponse<unknown>>(
      "api/v1/resume",
      "POST",
      resumeData
    );
    console.log(resumeData);
    return data;
  } catch (error) {
    console.log("에러발생", error);
    throw new Error(`이력서 업로드에러 ${error}`);
  }
}
