import { getUserLocale } from "@/actions/common/getCookie";
import AppBar from "@/components/layout/AppBar";
import RecruitListSection from "@/components/page/job/RecruitListSection";
import SelectedItem from "@/components/page/job/SelectedItem";
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
  const lang = await getUserLocale();
  return (
    <main className=" bg-white px-6 pb-20 relative">
      <div className="min-h-[calc(100vh-160px)] pt-8 ">
        <SearchInput query={query} />
        <section className="mt-8 flex justify-between">
          <JobFilter industry={industry} />
          <PayFilterDrawer start={minPay} end={maxPay} />
          <LocationFilterDrawer location={location} />
        </section>
        <SelectedItem
          keyword={query}
          industryTypeList={industry}
          startAddress={startAddress}
          endAddress={endAddress}
          minPay={minPay}
          maxPay={maxPay}
        />

        <RecruitListSection
          page={page}
          keyword={query}
          minPay={minPay}
          maxPay={maxPay}
          startAddress={startAddress}
          endAddress={endAddress}
          industryTypeList={industry}
          lang={lang}
        />
      </div>
      <AppBar />
    </main>
  );
}
