import { dummyDetail } from "@/store/dummy";
import { ChevronLeft, Phone } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const data = dummyDetail;
  return (
    <div className="max-w-md mx-auto min-h-screen">
      {/* Header */}
      <header className="bg-wikoGreen px-4 pt-6 pb-8 ring-[40px] ring-wikoGreen">
        <ChevronLeft className="w-6 h-6" />
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
      <section className="">
        <div className="px-4 py-6 bg-white rounded-2xl z-10">
          {/* Job Details Card */}
          <div className=" p-4 shadow-sm mb-6 border border-[#999999] rounded-sm flex flex-col gap-4">
            <section>
              <h2 className="title">회사 소개</h2>
              <ul className="text-sm space-y-1 text-gray-600">
                <li> {data.companyInfo}</li>
              </ul>
            </section>

            <section>
              <h2 className="title">담당업무</h2>
              <ul className="text-sm space-y-1 text-gray-600">
                <li> {data.responsibilities}</li>
              </ul>
            </section>

            <section>
              <h2 className="title">자격 요건</h2>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• {data.qualifications}</li>
              </ul>
            </section>
          </div>

          <h1 className="title px-2">근무조건</h1>
          <table className="w-full border-separate border-spacing-y-2.5 px-2">
            <tbody className="[&>tr>td]:text-sm [&>tr]:mb-2.5">
              <tr>
                <td className="w-24">월급</td>
                <td className="">{data.pay}</td>
              </tr>
              <tr>
                <td className="">채용유형</td>
                <td className="">{data.employmentType}</td>
              </tr>
              <tr>
                <td className="">근무기간</td>
                <td className="">{data.workPeriod}</td>
              </tr>
              <tr>
                <td className="">근무시간</td>
                <td className="">{data.workHours}</td>
              </tr>
              <tr>
                <td className="">우대사항</td>
                <td className="">{data.preferredQualifications}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-3 bg-white border-t">
        <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#6B54EA]">
          <Phone className="w-5 h-5 text-white" />
        </button>
        <button className="flex-1 h-12 rounded-lg bg-[#6B54EA] text-white font-medium">
          지원하기
        </button>
      </div>
    </div>
  );
}
