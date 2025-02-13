import Link from "next/link";
import WikoChatBot from "../../../../public/assets/icons/WikoChatBot";

export default function ChatBotButton() {
  return (
    <Link
      href="chat"
      className="chatBot-Btn font-lexend text-wikoBlue font-bold bg-[#ADE6BB] "
    >
      <WikoChatBot />
    </Link>
  );
}
