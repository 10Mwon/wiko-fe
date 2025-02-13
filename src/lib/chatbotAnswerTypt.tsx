import ChatRegionSelector from "@/components/page/chat/ChatRegionSelector";
import SubQuestions from "@/components/page/chat/Subquestions";
import { Message } from "@/types/chatbotType";

export const returnMessageByInput = (
  input: string,
  t: (key: string) => string
): string => {
  if (input == "근로 비자 정보") return t("workingVisaInfo");
  else return t("otherService");
};

export interface ReturnComponentProps {
  messageText: string; // 입력 값
  question: string[]; // 질문 목록
  translatedText: string[];
  sendMessage: (translatedData: string, input: string) => void; // setInput 함수
  t: (key: string) => string;
}

export const returnComponent = ({
  messageText,
  question,
  translatedText,
  sendMessage,
  t,
}: ReturnComponentProps): Message => {
  if (messageText == "지원 기관 정보")
    return {
      sender: "bot",
      text: "",
      component: (
        <ChatRegionSelector
          translatedData={translatedText}
          data={question}
          sendMessage={sendMessage}
        />
      ),
    };
  if (
    messageText == "강원특별자치도" ||
    messageText == "경상남도" ||
    messageText == "경상북도" ||
    messageText == "광주광역시" ||
    messageText == "대구광역시" ||
    messageText == "대전광역시" ||
    messageText == "부산광역시" ||
    messageText == "세종특별자치시" ||
    messageText == "울산광역시" ||
    messageText == "전라남도" ||
    messageText == "전북특별자치도" ||
    messageText == "제주특별자치도" ||
    messageText == "충청남도" ||
    messageText == "충청북도"
  )
    return {
      sender: "bot",
      text: "",
      // component: <InfoAndLink data={question} />,
    };
  else {
    const aboutWorkingVisa = messageText.includes("근로 비자 정보");
    return {
      sender: "bot",
      text: returnMessageByInput(messageText, t),
      component: (
        <SubQuestions
          question={question}
          sendMessage={sendMessage}
          className={aboutWorkingVisa ? "w-[200px] " : ""}
          translatedData={translatedText}
        />
      ),
    };
  }
};
