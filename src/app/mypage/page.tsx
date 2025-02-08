import MyPageMenu from "@/components/page/mypage/MyPageMenu";
import Profile from "@/components/page/mypage/Profile";

export default function Page() {
  return (
    <div className="flex flex-col  gap-12 min-h-screen text-black">
      <header className=" py-20 bg-wikoBlue">
        <Profile />
      </header>
      <section className=" mx-8 mt-6">
        <MyPageMenu />
      </section>
    </div>
  );
}
