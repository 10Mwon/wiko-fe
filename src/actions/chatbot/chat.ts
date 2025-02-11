import { requestWikoAI } from "../common/common";

export async function postChatting(
  question: string
): Promise<chatbotAnswerType> {
  try {
    const data = await requestWikoAI<chatbotAnswerType>(
      `chatbot`,
      "POST",
      { question: question },
      "no-cache"
    );
    return data;
  } catch (error) {
    console.error("챗봇 응답 에러", error);
    throw new Error(`챗봇 응답 에러 ${error}`);
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
