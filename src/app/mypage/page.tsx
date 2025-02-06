import MyKeyword from "@/components/page/mypage/MyKeyword";
import MyPageMenu from "@/components/page/mypage/MyPageMenu";
import Profile from "@/components/page/mypage/Profile";

export default function Page() {
  return (
    <div className=" flex flex-col gap-8 text-black">
      <Profile></Profile>
      <div className="p-4 z-10">
        <MyKeyword></MyKeyword>
      </div>
      <div className="-mt-28 ">
        <MyPageMenu></MyPageMenu>
      </div>
    </div>
  );
}
