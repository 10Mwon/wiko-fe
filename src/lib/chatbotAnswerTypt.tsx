import ChatRegionSelector from "@/components/page/chat/ChatRegionSelector";
import SubQuestions from "@/components/page/chat/Subquestions";
import { Message } from "@/types/chatbotType";

export const returnMessageByInput = (input: string): string => {
  if (input == "근로 비자 정보")
    return `한국에서 발급되는 근로 비자는 여러 종류가 있습니다.
  각 비자는 신청 자격과 조건이 다르므로, 본인의 상황에 맞는 비자를 선택하여 신청해야 합니다.
  어떤 근로 비자의 정보를 원하시나요?`;
  else return `${input}관련 문의하실 서비스를 선택해 주세요`;
};

export interface ReturnComponentProps {
  messageText: string; // 입력 값
  question: string[]; // 질문 목록
  sendMessage: (input: string) => void; // setInput 함수
}

export const returnComponent = ({
  messageText,
  question,
  sendMessage,
}: ReturnComponentProps): Message => {
  if (messageText == "지원 기관 정보")
    return {
      sender: "bot",
      text: "",
      component: (
        <ChatRegionSelector data={question} sendMessage={sendMessage} />
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
      text: returnMessageByInput(messageText),
      component: (
        <SubQuestions
          question={question}
          sendMessage={sendMessage}
          className={aboutWorkingVisa ? "w-[200px] " : ""}
        />
      ),
    };
  }
};
