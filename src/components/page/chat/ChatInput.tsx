import { ChatInputProps } from "@/types/chatbotType";
import { useTranslations } from "next-intl";
import PaperPlane from "../../../../public/assets/icons/PaperPlane";

export default function ChatInput({
  value,
  onChange,
  onKeyDown,
  onClick,
}: ChatInputProps) {
  const t = useTranslations("chatbot");
  return (
    <div className="fixed bottom-0 w-full right-0 bg-white">
      <div className="bg-[#EEF2F5] relative h-11 rounded-3xl mx-4 my-2">
        <input
          placeholder={t("메시지를 입력해주세요")}
          className="bg-transparent placeholder:font-semibold focus:outline-none h-full w-full pl-4 pr-16"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button
          onClick={onClick}
          className="bg-[#D9D9D9] rounded-full w-10 h-9 flex items-center justify-center absolute top-1 right-4 pr-1 pt-1">
          <PaperPlane />
        </button>
      </div>
    </div>
  );
}
