import LanguageRadioGroup from "@/components/page/mypage/LanguageRadioGroup";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <div className="pt-[3.44rem] px-6 ">
      <h1 className="font-bold text-2xl mb-6 ">{t("langSetting")}</h1>
      <LanguageRadioGroup />
    </div>
  );
}
