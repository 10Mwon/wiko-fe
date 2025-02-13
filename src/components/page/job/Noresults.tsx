import { useTranslations } from "next-intl";

export default function Noresults() {
  const t = useTranslations("validation");

  return (
    <div className="bg-white min-h-[134px] rounded-xl px-3 py-4 mt-5 flex flex-col items-center justify-center text-[#999999]">
      <div className="text-xl font-bold mb-2">😢</div>
      <p className="text-center text-sm font-semibold">{t("noresults")}</p>
    </div>
  );
}
