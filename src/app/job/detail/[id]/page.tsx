import { getRecruitDetail } from "@/actions/recruit/getRecruit";
import RecruitDetailCard from "@/components/page/job/RecruitDetailCard";
import RecruitDetailHeader from "@/components/page/job/RecruitDetailHeader";
import ContactDrawer from "@/components/ui/custom/ContactDrawer";
import { jobDetailType } from "@/types/jobDetailType";
interface ProductPageProps {
  params: { id: string };
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const PageParams = await params;
  const data: jobDetailType = await getRecruitDetail(PageParams.id);
  return (
    <div className="max-w-md mx-auto min-h-screen pb-20">
      {/* Header */}
      <RecruitDetailHeader
        imgUrl={data.imgUrl}
        company={data.company}
        location={data.location}
      />

      {/* Content */}
      <section>
        <div className="pb-6 pt-[60px] bg-white rounded-2xl z-10">
          {/* Job Details Card */}
          <RecruitDetailCard data={data} />
        </div>
      </section>
      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-3 bg-white border-t">
        <ContactDrawer
          owner={data.owner}
          phone={data.phone}
          email={data.email}
        />
      </div>
    </div>
  );
}
