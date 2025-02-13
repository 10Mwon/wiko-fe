"use client";

import { returnComponent } from "@/lib/chatbotAnswerTypt";
import { useEffect, useRef, useState } from "react";

import { postChatting } from "@/actions/chatbot/chat";
import { Message } from "@/types/chatbotType";
import { useTranslations } from "next-intl";
import WikoChatBot from "../../../../public/assets/icons/WikoChatBot";
import CategorySelector from "./CategorySelector";
import ChatInput from "./ChatInput";
import UserBubble from "./UserBubble";
import WikoBubble from "./WikoBubble";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null); // ✅ 스크롤 위치를 참조할 ref

  const [loading, setLoading] = useState(false);

  const t = useTranslations("chatbot");
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (
    translatedText: string,
    messageText: string
  ): Promise<void> => {
    setInput(translatedText);
    setLoading(true);
    if (!messageText.trim()) return;

    const userMessage: Message = { sender: "user", text: translatedText };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await postChatting(messageText);
      if (
        response.sub_questions &&
        Array.isArray(response.sub_questions) &&
        Array.isArray(response.translated_sub_questions)
      ) {
        const data = returnComponent({
          //질문에 따라 컴포넌트 렌더링위한 함수
          messageText,
          question: response.sub_questions,
          translatedText: response.translated_sub_questions,
          sendMessage,
          t,
        });
        setMessages((prev) => [...prev, data]);
      }
      //sub_question 없는 경우 answer 출력
      else {
        const botMessage: Message = {
          sender: "bot",
          text: response.translated_answer
            ? response.translated_answer
            : `죄송해요😥
         응답을 가져오지 못했어요.`,
        };
        setMessages((prev) => [...prev, botMessage]);
      }
      setLoading(false);

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
            <WikoBubble text={t("hello")} />
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
        loading={loading}
        onKeyDown={(e) => e.key === "Enter" && sendMessage(input, input)}
        onClick={() => sendMessage(input, input)}
      />
    </div>
  );
}
