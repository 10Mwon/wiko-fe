import { getFilteredRecruitList } from "@/actions/recruit/getRecruit";
import AppBar from "@/components/layout/AppBar";
import JobItem from "@/components/page/job/JobItem";
import Noresults from "@/components/page/job/Noresults";
import CustomPagination from "@/components/ui/custom/CustomPagination";
import JobFilter from "@/components/ui/custom/JobFilter";
import LocationFilterDrawer from "@/components/ui/custom/LocationFilterDrawer";
import PayFilterDrawer from "@/components/ui/custom/PayFilterDrawer";
import SearchInput from "@/components/ui/custom/SearchInput";

type SearchParams = Promise<{
  industry: string;
  minPay: string;
  maxPay: string;
  location: string;
  query: string;
  page: string;
  startAddress: string;
  endAddress: string;
}>;
export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.query ?? "";
  const minPay = searchParams.minPay ?? "0";
  const maxPay = searchParams.maxPay ?? "50000000";
  const location = searchParams.location ?? "";
  const startAddress = searchParams.startAddress ?? "";
  const endAddress = searchParams.endAddress ?? "";
  const industry = searchParams.industry ?? "";
  const page = searchParams.page ?? "0";
  console.log(minPay, maxPay);
  const recruitList = await getFilteredRecruitList({
    page: page,
    keyword: query,
    minPay: minPay,
    maxPay: maxPay,
    startAddress: startAddress,
    endAddress: endAddress,
    industryTypeList: industry,
  });

  return (
    <main className=" bg-wikoBlue px-6 pb-20 relative">
      <div className="min-h-[calc(100vh-160px)] pt-8 ">
        <SearchInput query={query} />
        <section className="mt-14 flex justify-between">
          <JobFilter industry={industry} />
          <PayFilterDrawer start={minPay} end={maxPay} />
          <LocationFilterDrawer location={location} />
        </section>
        {recruitList ? (
          <section className="mt-9 grid grid-cols-2 gap-5">
            {recruitList.content.map((item) => (
              <JobItem key={item.id} props={item} />
            ))}
          </section>
        ) : (
          <Noresults />
        )}
      </div>
      {recruitList && (
        <CustomPagination
          currentPage={Number(page)}
          totalPages={Number(recruitList.totalPages) ?? 0}
          className=""
        />
      )}
      <AppBar />
    </main>
  );
}
