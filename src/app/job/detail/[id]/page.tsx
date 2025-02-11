import BackButton from "@/components/ui/button/BackButton";
import ContactDrawer from "@/components/ui/custom/ContactDrawer";
import { dummyDetail } from "@/store/dummy";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const data = dummyDetail;
  const t = useTranslations("jobDetail");
  return (
    <div className="max-w-md mx-auto min-h-screen">
      {/* Header */}
      <header className="bg-wikoGreen px-4 pt-6 pb-8 ring-[40px] ring-wikoGreen">
        <BackButton />
        <div className="flex-1 flex justify-center mb-4">
          <Image
            src={data.imgUrl}
            alt="Hanwha"
            width={100}
            height={24}
            className="h-20 object-contain"
          />
        </div>
        <h1 className="text-center font-semibold">
          {data.company}
          <p className="text-sm font-normal mt-1 text-gray-600">
            {data.location}
          </p>
        </h1>
      </header>

      {/* Content */}
      <section>
        <div className="px-4 py-6 bg-white rounded-2xl z-10">
          {/* Job Details Card */}
          <div className=" p-4 shadow-sm mb-6 border border-[#999999] rounded-lg flex flex-col gap-4">
            <section>
              <h2 className="title">{t("introduction")}</h2>
              <ul className="text-sm space-y-1 text-gray-600">
                <li> {data.companyInfo}</li>
              </ul>
            </section>

            <section>
              <h2 className="title">{t("position")}</h2>
              <ul className="text-sm space-y-1 text-gray-600">
                <li> {data.responsibilities}</li>
              </ul>
            </section>

            <section>
              <h2 className="title">{t("required")}</h2>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• {data.qualifications}</li>
              </ul>
            </section>
          </div>

          <h1 className="title px-2">{t("condition")}</h1>
          <table className="w-full border-separate border-spacing-y-2.5 px-2">
            <tbody className="[&>tr>td]:text-sm [&>tr>td]:text-[#4C4C4C] [&>tr]:mb-2.5">
              <tr>
                <td className="w-24">{t("salary")}</td>
                <td>{data.pay}</td>
              </tr>
              <tr>
                <td>{t("recruitType")}</td>
                <td>{data.employmentType}</td>
              </tr>
              <tr>
                <td>{t("duration")}</td>
                <td>{data.workPeriod}</td>
              </tr>
              <tr>
                <td>{t("time")}</td>
                <td>{data.workHours}</td>
              </tr>
              <tr>
                <td>{t("preferred")}</td>
                <td>{data.preferredQualifications}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-3 bg-white border-t">
        <ContactDrawer
          owner="김예진"
          phone="010-1234-1234"
          email="ajaa@naver.com"
        />
        <button className="flex-1 h-12 rounded-lg bg-wikoBlue text-white font-medium">
          {t("apply")}
        </button>
      </div>
    </div>
  );
}
