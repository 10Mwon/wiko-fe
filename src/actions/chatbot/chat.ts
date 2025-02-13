import { chatbotAnswerType, ChatbotResponse } from "@/types/chatbotType";
import { googleTranslate } from "@/utils/googleTranslate";
import { requestWikoAI } from "../common/common";

export async function postChatting(question: string): Promise<ChatbotResponse> {
  try {
    const data = await requestWikoAI<chatbotAnswerType>(
      `chatbot`,
      "POST",
      { question: question },
      "no-cache"
    );
    const translatedData: ChatbotResponse = {
      answer: data.answer,
      sub_questions: data.sub_questions,
      translated_answer: "",
      translated_sub_questions: null,
    };
    if (data.answer) {
      const translated_Answer = await googleTranslate({ answer: data.answer });
      translatedData.translated_answer = translated_Answer.answer;
    }
    if (data.sub_questions) {
      // 여기서 sub_question의 type이 string[] 이면
      if (Array.isArray(data.sub_questions)) {
        const translated_sub_questions = await googleTranslate({
          answer: data.sub_questions.join(", "),
        });

        translatedData.translated_sub_questions =
          translated_sub_questions.answer.split(", ");
      }
      // 아니면 data.sub_questions의 타입이 centerDataType이면?
      else if (data.sub_questions.center_name) {
        const translated_sub_questions = await googleTranslate({
          answer: data.sub_questions.center_name,
        });
        translatedData.translated_sub_questions = {
          center_name: translated_sub_questions.answer,
          address: data.sub_questions.address,
          telephone: data.sub_questions.telephone,
        };
      }
    }
    return translatedData;
  } catch (error) {
    console.error("챗봇 응답 에러", error);
    throw new Error(`챗봇 응답 에러 ${error}`);
  }
}
