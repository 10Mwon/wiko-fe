import { getUserLocale } from "@/actions/common/getCookie";
import { getTodayRecruitList } from "@/actions/recruit/getRecruit";
import CommunityItem from "./JobNoticeItem";
import TodayRecruitHeader from "./TodayRecruitHeader";

export default async function TodayJobNotice() {
  const lang = await getUserLocale();
  const data = await getTodayRecruitList(lang);

  return (
    <section className="px-4 mt-10 mb-20">
      <TodayRecruitHeader />
      {data && data.content.length > 0 ? (
        <div className="grid grid-cols-2 mt-4 justify-items-center gap-y-3">
          {data.content.map((item, index) => (
            <CommunityItem
              key={index}
              id={item.id}
              imgUrl={item.imgUrl}
              company={item.company}
              title={item.title}
              location={item.location}
            />
          ))}
        </div>
      ) : (
        // 공고가 없을 때 표시할 UI
        <div className="flex flex-col items-center justify-center h-40 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-300 mb-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="12" y1="8" x2="12" y2="16" />
          </svg>
          <p className="text-sm font-medium">오늘의 공고가 없습니다.</p>
        </div>
      )}
      <div className="h-[150px]"></div>
    </section>
  );
}
