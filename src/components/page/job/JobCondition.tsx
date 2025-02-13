"use client";
import { useTranslations } from "next-intl";
export default function JobCondition({
  pay,
  employmentType,
  workPeriod,
  workHours,
  preferredQualifications,
  payType,
}: {
  pay: string;
  employmentType: string;
  workPeriod: string;
  workHours: string;
  payType: string;
  preferredQualifications: string;
}) {
  const t = useTranslations("jobDetail");
  return (
    <>
      <table className="w-full border-separate border-spacing-y-2.5 px-2">
        <tbody className="[&>tr>td]:text-sm [&>tr>td]:text-[#4C4C4C] [&>tr]:mb-2.5">
          <tr>
            <td className="w-24 h-8">{t("salary")}</td>
            <td>{`${payType} ₩${pay}`}</td>
          </tr>
          <tr>
            <td className="w-24 h-8">{t("recruitType")}</td>
            <td>{employmentType}</td>
          </tr>
          <tr>
            <td className="w-24 h-8">{t("duration")}</td>
            <td>{workPeriod}</td>
          </tr>
          <tr>
            <td className="w-24 h-8">{t("time")}</td>
            <td>{workHours}</td>
          </tr>
          <tr>
            <td className="w-24 h-8">{t("preferred")}</td>
            <td>{preferredQualifications}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
