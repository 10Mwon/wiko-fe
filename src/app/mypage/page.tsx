import MyPageMenu from "@/components/page/mypage/MyPageMenu";
import Profile from "@/components/page/mypage/Profile";

export default function Page() {
  return (
    <div className="flex flex-col gap-12 min-h-screen text-black">
      <header className="mx-8 mt-16">
        <Profile />
      </header>
      <hr className=" mx-4" />
      <section className=" mx-12 mt-6">
        <MyPageMenu />
      </section>
    </div>
  );
}
