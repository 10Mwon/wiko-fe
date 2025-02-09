import { dummyJobItems } from "@/store/dummy";
import CommunityItem from "./JobNoticeItem";

export default function Community() {
  return (
    <section className="my-10 px-[11px]">
      <h1 className="text-xl font-semibold font-lexend pl-1">Today 공고</h1>
      <div className="flex justify-between gap-3  mt-4">
        {dummyJobItems.slice(0, 3).map((item, index) => (
          <CommunityItem
            key={index}
            id={item.id}
            imgUrl={item.imgUrl}
            jobName={item.jobName}
            title={item.title}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
}
