import { dummyMyProfile } from "@/store/dummy";
import { MyProfileType } from "@/types/myPageType";
import { useTranslations } from "next-intl";

export default function ProfileBaseInfo() {
  const data: MyProfileType = dummyMyProfile;

  // 반복문을 위한 필드 배열
  const profileFields = [
    { label: "이름", key: "name" },
    { label: "국적", key: "nation" },
    { label: "이메일", key: "email" },
    { label: "전화번호", key: "phone" },
    { label: "보유비자", key: "visa" },
  ];
  const t = useTranslations("input");
  const p = useTranslations("profile");
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">{p("baseInfo")}</h2>
      <ul className="flex flex-col gap-4">
        {profileFields.map(({ label, key }) => (
          <li key={key} className="gap-4  justify-between items-center">
            <p className="font-semibold mb-2">{t(key)}</p>
            <p className="text-gray-500 rounded-xl w-72 bg-gray-100 p-4 w-full">
              {data[key as keyof MyProfileType]}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
