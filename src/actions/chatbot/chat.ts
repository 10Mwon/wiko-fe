import { requestWithoutAuth } from "../common/common";

export async function postChatting(
  question: string
): Promise<chatbotAnswerType> {
  try {
    const data = await requestWithoutAuth<chatbotAnswerType>(
      `chatbot`,
      "POST",
      { question: question },
      "no-cache"
    );
    return data;
  } catch (error) {
    console.error("채팅방 목록 조회 중 오류 발생:", error);
    throw new Error(`채팅방 목록 조회 실패: ${error}`);
  }
}

export interface chatbotAnswerType {
  answer: string;
  sub_questions: string[] | null | centerDataType;
}
export interface centerDataType {
  center_name: string;
  address: string;
  telephone: string;
}
