import { getUserLocale } from "@/actions/common/getCookie";
import { getLocalRecruitList } from "@/actions/recruit/getRecruit";
import JobItem from "@/components/page/job/JobItem";
import LocationSelector from "@/components/page/job/locationSelector";
import Noresults from "@/components/page/job/Noresults";
import CustomPagination from "@/components/ui/custom/CustomPagination";
import SearchInput from "@/components/ui/custom/SearchInput";
import JobItemFallback from "@/components/ui/skeleton/JobItemFallback";

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
  const startAddress = searchParams.startAddress ?? "";
  const endAddress = searchParams.endAddress ?? "";
  const page = searchParams.page ?? "0";
  const lang = await getUserLocale();
  const recruitList = await getLocalRecruitList({
    page: page,
    keyword: query,
    startAddress: startAddress,
    endAddress: endAddress,
    lang: lang,
  });
  return (
    <main className=" bg-white px-6 pb-20 relative">
      <div className="min-h-[calc(100vh-160px)] pt-8 ">
        <SearchInput query={query} isLocalData={true} />
        <LocationSelector endAddress={endAddress} />
        <section className="mt-8 flex justify-between">
          {/* <LocationFilterDrawer location={location} /> */}
        </section>
        {recruitList ? (
          <section className="mt-9 grid grid-cols-2 gap-5">
            {recruitList
              ? recruitList.content.map((item) => (
                  <JobItem key={item.id} props={item} />
                ))
              : Array.from({ length: 6 }).map((_, index) => (
                  <JobItemFallback key={index} />
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
    </main>
  );
}
