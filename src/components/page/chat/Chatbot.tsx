"use client";

import { returnComponent } from "@/lib/chatbotAnswerTypt";
import { useEffect, useRef, useState } from "react";

import { postChatting } from "@/actions/chatbot/chat";
import { centerDataType, Message } from "@/types/chatbotType";
import WikoChatBot from "../../../../public/assets/icons/WikoChatBot";
import CategorySelector from "./CategorySelector";
import ChatInput from "./ChatInput";
import UserBubble from "./UserBubble";
import WikoBubble from "./WikoBubble";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null); // ✅ 스크롤 위치를 참조할 ref

  // ✅ 메시지가 업데이트될 때마다 스크롤을 가장 아래로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (messageText: string): Promise<void> => {
    setInput(messageText);
    if (!messageText.trim()) return;

    const userMessage: Message = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await postChatting(messageText);

      // 응답으로 sub question 받은 경우 message 객체에 컴포넌트
      //sub question 객체 타입이 두가지여서 배열인 경우 아닌경우 분리
      if (response.sub_questions && !Array.isArray(response.sub_questions)) {
        //배열 아닌 경우(응답 제대로 안와서 테스트 못함)
        const centerData = response.sub_questions as centerDataType;
        const botMessage: Message = {
          sender: "bot",
          text: `${centerData.center_name}\n${centerData.address}\n${centerData.telephone}`,
        };
        setMessages((prev) => [...prev, botMessage]);
      } else if (Array.isArray(response.sub_questions)) {
        const data = returnComponent({
          //질문에 따라 컴포넌트 렌더링위한 함수
          messageText,
          question: response.sub_questions,
          sendMessage,
        });
        setMessages((prev) => [...prev, data]);
      }
      //sub_question 없는 경우 answer 출력
      else {
        const botMessage: Message = {
          sender: "bot",
          text: response.answer
            ? response.answer
            : `죄송해요😥
         응답을 가져오지 못했어요.`,
        };
        setMessages((prev) => [...prev, botMessage]);
      }

      setInput("");
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        sender: "bot",
        text: `죄송해요,
         응답을 가져오지 못했어요.`,
      };
      setMessages((prev) => [...prev, errorMessage]);
      setInput("");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex-grow overflow-y-auto">
        <div className="flex gap-2">
          <WikoChatBot className="shrink-0" />
          <div className="mt-6">
            <WikoBubble text={"안녕하세요"} />
            <CategorySelector sendMessage={sendMessage} />
          </div>
        </div>

        {messages.map((msg, index) => (
          <div
            ref={messagesEndRef}
            key={index}
            className={`p-2 my-1 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            {msg.sender === "user" ? (
              <UserBubble text={msg.text} />
            ) : (
              <>
                <div className="flex gap-2">
                  <WikoChatBot className="shrink-0" />
                  <div className="mt-6">
                    {msg.text && <WikoBubble text={msg.text} />}
                    {msg.component && <div>{msg.component}</div>}
                  </div>
                </div>
                <div className="flex gap-2">
                  {!msg.component && (
                    <>
                      <WikoChatBot className="shrink-0" />
                      <CategorySelector sendMessage={sendMessage} />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <ChatInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
        onClick={() => sendMessage(input)}
      />
    </div>
  );
}
