// import CategorySelector from "@/components/page/chat/CategorySelector";
// import ChatInput from "@/components/page/chat/ChatInput";
// import ChatRegionSelector from "@/components/page/chat/ChatRegionSelector";
// import InfoAndLink from "@/components/page/chat/InfoAndLink";
// import UserBubble from "@/components/page/chat/UserBubble";
// import WikoBubble from "@/components/page/chat/WikoBubble";

import Chatbot from "@/components/page/chat/Example";

export default async function page() {
  return (
    <>
      <section className="mt-9">
        <h1 className="text-center font-semibold font-lexend mb-6">
          Liu Hongfei님
          <br />
          반가워요,Wiko봇이에요!
        </h1>
        <Chatbot />
      </section>
    </>
  );
}
