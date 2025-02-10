import ExchangeRate from "../page/home/ExchangeRate";
import JobMenuGrid from "../page/home/JobMenuGrid";
import TodayJobNotice from "../page/home/TodayJobNotice";

export default function HomeBackground() {
  return (
    <div className="bg-white rounded-t-3xl px-5 pt-5 h-full pb-[72px]">
      <JobMenuGrid />
      <TodayJobNotice />
      <ExchangeRate />
    </div>
  );
}
