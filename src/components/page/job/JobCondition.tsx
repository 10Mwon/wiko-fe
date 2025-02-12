"use client";
import { useTranslations } from "next-intl";
export default function JobCondition({
  pay,
  employmentType,
  workPeriod,
  workHours,
  preferredQualifications,
}: {
  pay: string;
  employmentType: string;
  workPeriod: string;
  workHours: string;

  preferredQualifications: string;
}) {
  const t = useTranslations("jobDetail");
  return (
    <div>
      <h1 className="title px-2">{t("condition")}</h1>
      <table className="w-full border-separate border-spacing-y-2.5 px-2">
        <tbody className="[&>tr>td]:text-sm [&>tr>td]:text-[#4C4C4C] [&>tr]:mb-2.5">
          <tr>
            <td className="w-24">{t("salary")}</td>
            <td>{pay}</td>
          </tr>
          <tr>
            <td>{t("recruitType")}</td>
            <td>{employmentType}</td>
          </tr>
          <tr>
            <td>{t("duration")}</td>
            <td>{workPeriod}</td>
          </tr>
          <tr>
            <td>{t("time")}</td>
            <td>{workHours}</td>
          </tr>
          <tr>
            <td>{t("preferred")}</td>
            <td>{preferredQualifications}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
