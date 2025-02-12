// import CategorySelector from "@/components/page/chat/CategorySelector";
// import ChatInput from "@/components/page/chat/ChatInput";
// import ChatRegionSelector from "@/components/page/chat/ChatRegionSelector";
// import InfoAndLink from "@/components/page/chat/InfoAndLink";
// import UserBubble from "@/components/page/chat/UserBubble";
// import WikoBubble from "@/components/page/chat/WikoBubble";

import Chatbot from "@/components/page/chat/Chatbot";

export default async function page() {
  return (
    <>
      <section className="mt-[80px] z-20">
        <Chatbot />
      </section>
    </>
  );
}
