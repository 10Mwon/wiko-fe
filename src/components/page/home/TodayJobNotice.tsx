import { dummyJobItems } from "@/store/dummy";
import { useTranslations } from "next-intl";
import CommunityItem from "./JobNoticeItem";

export default function TodayJobNotice() {
  const t = useTranslations("home");
  return (
    <section className="my-10 px-[11px]">
      <h1 className="text-xl font-semibold font-lexend pl-1">
        {t("todayRecruit")}
      </h1>
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
