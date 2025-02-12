import { useTranslations } from "next-intl";

export default function ApplyButton() {
  const t = useTranslations("jobDetail");
  return (
    <button className="flex-1 h-12 rounded-lg bg-wikoBlue text-white font-medium">
      {t("apply")}
    </button>
  );
}
