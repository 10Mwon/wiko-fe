import { JobItemType } from "@/types/jobFilterDataType";
import Image from "next/image";
import Link from "next/link";
export default function CommunityItem({
  id,
  imgUrl,
  jobName,
  title,
  location,
}: JobItemType) {
  return (
    <Link
      href={`/job/detail/${id}`}
      className="rounded-[20px] bg-[#F6F7F9] w-[114px] h-[114px] aspect-square flex flex-col p-3 basis-0 flex-grow min-w-0 shadow-[4px_4px_4px_rgba(218,218,218,0.5)]"
    >
      <Image
        src={imgUrl}
        alt={jobName}
        width={100}
        height={20}
        priority
        className="h-5 w-auto mx-auto my-3"
      />
      <h2 className="truncate text-[9px] text-[#757575] font-medium min-w-0 leading-[1.6]">
        {jobName}
      </h2>
      <h1 className="truncate font-bold min-w-0 text-[13px] mb-[5px] text-[#4C4C4C] leading-none">
        {title}
      </h1>
      <h3 className="truncate text-[8px] text-[#757575] font-medium min-w-0 leading-none">
        {location}
      </h3>
    </Link>
  );
}
