import { useTranslations } from "next-intl";

export default function TodayRecruitHeader() {
  const t = useTranslations("home");

  return (
    <h1 className="text-xl font-semibold font-lexend pl-1">
      {t("todayRecruit")}
    </h1>
  );
}
