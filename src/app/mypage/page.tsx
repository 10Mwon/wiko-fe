import MyPageMenu from "@/components/page/mypage/MyPageMenu";
import Profile from "@/components/page/mypage/Profile";
import ChatBotButton from "@/components/ui/button/ChatBotButton";

export default function Page() {
  return (
    <div className="flex flex-col  gap-12 min-h-screen text-black">
      <header className=" py-14 bg-wikoBlue">
        <Profile />
      </header>
      <section className="mx-8 ">
        <MyPageMenu />
      </section>
      <ChatBotButton />
    </div>
  );
}
