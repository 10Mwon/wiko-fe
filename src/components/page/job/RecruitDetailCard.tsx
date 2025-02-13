import { jobDetailType } from "@/types/jobDetailType";
import { useTranslations } from "next-intl";
import JobCondition from "./JobCondition";

export default function RecruitDetailCard({ data }: { data: jobDetailType }) {
  const t = useTranslations("jobDetail");
  return (
    <div className="flex flex-col gap-8 px-7">
      <section>
        <h2 className="title">{t("introduction")}</h2>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>• {data.companyInfo}</li>
        </ul>
      </section>

      <section>
        <h2 className="title">{t("position")}</h2>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>• {data.responsibilities}</li>
        </ul>
      </section>

      <section>
        <h2 className="title">{t("required")}</h2>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>• {data.qualifications}</li>
        </ul>
      </section>
      <section>
        <h2 className="title">{t("condition")}</h2>
        <JobCondition
          pay={data.pay}
          workHours={data.workHours}
          workPeriod={data.workPeriod}
          employmentType={data.employmentType}
          preferredQualifications={data.preferredQualifications}
          payType={data.payType}
        />
      </section>
    </div>
  );
}
