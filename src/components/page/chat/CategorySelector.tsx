import { useTranslations } from "next-intl";
import { useState } from "react";

const data = ["비자 정보", "지원 기관 정보", "근로자 보호 및 복지 제도"];
export default function CategorySelector({
  sendMessage,
}: {
  sendMessage: (translatedText: string, input: string) => void;
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const t = useTranslations("chatbot");
  // 항목 클릭 시 선택 상태 변경
  const handleClick = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    sendMessage(t(item), item);
  };
  return (
    <div>
      <ul className="inline-block rounded-xl overflow-hidden divide-y divide-[#F0F0F0] [&>li]:px-8 ">
        <li className="bg-wikoGreen py-5 font-semibold text-center">
          {t("qa0")}
        </li>
        {data.map((item) => (
          <li
            key={item}
            className="bg-[#F8F8F8] py-2.5 text-[13px]"
            onClick={() => handleClick(item)}>
            {t(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
