import { getRecruitDetail } from "@/actions/recruit/getRecruit";
import JobCondition from "@/components/page/job/JobCondition";
import RecruitDetailCard from "@/components/page/job/RecruitDetailCard";
import RecruitDetailHeader from "@/components/page/job/RecruitDetailHeader";
import ApplyButton from "@/components/ui/button/ApplyButton";
import ContactDrawer from "@/components/ui/custom/ContactDrawer";

export default async function Page({ params }: { params: { id: string } }) {
  if (!params?.id) {
    return <div>잘못된 접근입니다.</div>;
  }

  const data = await getRecruitDetail(params.id);
  return (
    <div className="max-w-md mx-auto min-h-screen">
      {/* Header */}
      <RecruitDetailHeader
        imgUrl={data.imgUrl}
        company={data.company}
        location={data.location}
      />

      {/* Content */}
      <section>
        <div className="px-4 py-6 bg-white rounded-2xl z-10">
          {/* Job Details Card */}
          <RecruitDetailCard
            companyInfo={data.companyInfo}
            responsibilities={data.responsibilities}
            qualifications={data.qualifications}
          />

          <JobCondition
            pay={data.pay}
            workHours={data.workHours}
            workPeriod={data.workPeriod}
            employmentType={data.employmentType}
            preferredQualifications={data.preferredQualifications}
          />
        </div>
      </section>
      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-3 bg-white border-t">
        <ContactDrawer
          owner="김예진"
          phone="010-1234-1234"
          email="ajaa@naver.com"
        />
        <ApplyButton />
      </div>
    </div>
  );
}
