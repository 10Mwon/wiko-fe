import { useTranslations } from "next-intl";

export default function RecruitDetailCard({
  companyInfo,
  responsibilities,
  qualifications,
}: {
  companyInfo: string;
  responsibilities: string;
  qualifications: string;
}) {
  const t = useTranslations("jobDetail");
  return (
    <div className=" p-4 shadow-sm mb-6 border border-[#999999] rounded-lg flex flex-col gap-4">
      <section>
        <h2 className="title">{t("introduction")}</h2>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>• {companyInfo}</li>
        </ul>
      </section>

      <section>
        <h2 className="title">{t("position")}</h2>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>• {responsibilities}</li>
        </ul>
      </section>

      <section>
        <h2 className="title">{t("required")}</h2>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>• {qualifications}</li>
        </ul>
      </section>
    </div>
  );
}
