import Community from "../page/home/Community";
import ExchangeRate from "../page/home/ExchangeRate";
import JobMenuGrid from "../page/home/JobMenuGrid";

export default function HomeBackground() {
  return (
    <div className="bg-white rounded-t-3xl px-5 pt-5">
      <JobMenuGrid />
      <Community />
      <ExchangeRate />
    </div>
  );
}
