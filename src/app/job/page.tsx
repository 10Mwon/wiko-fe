import { getRecruitList } from "@/actions/recruit/getRecruit";
import JobItem from "@/components/page/job/JobItem";
import CustomPagination from "@/components/ui/custom/CustomPagination";
import JobFilter from "@/components/ui/custom/JobFilter";
import LocationFilterDrawer from "@/components/ui/custom/LocationFilterDrawer";
import PayFilterDrawer from "@/components/ui/custom/PayFilterDrawer";
import SearchInput from "@/components/ui/custom/SearchInput";

type SearchParams = Promise<{
  industry: string;
  start: string;
  end: string;
  location: string;
  query: string;
  page: string;
}>;
export default async function page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.query;
  const start = searchParams.start ?? "0";
  const end = searchParams.end ?? "5000000";
  const location = searchParams.location ?? "";
  const industry = searchParams.industry ?? "";
  const page = searchParams.page ?? "1";

  const recruitList = await getRecruitList("1");
  console.log(searchParams);
  return (
    <>
      <SearchInput query={query} />
      <section className="mt-14 flex justify-between">
        <JobFilter industry={industry} />
        <PayFilterDrawer start={start} end={end} />
        <LocationFilterDrawer location={location} />
      </section>
      <section className="mt-9 grid grid-cols-2 gap-5">
        {recruitList.content.map((item) => (
          <JobItem key={item.id} props={item} />
        ))}
      </section>
      <CustomPagination currentPage={Number(page)} totalPages={10} />
    </>
  );
}
