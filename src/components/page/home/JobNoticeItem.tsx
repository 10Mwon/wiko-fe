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
  const defaultImg =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
  return (
    <Link
      href={`/job/detail/${id}`}
      className="rounded-[5px] bg-[#FFFFFF] w-40 h-[150px] px-auto flex flex-col p-3 basis-0 flex-grow shadow-[2px_2px_10px_rgba(0,0,0,0.15)]"
    >
      <Image
        src={imgUrl ? imgUrl : defaultImg}
        alt={jobName}
        width={100}
        height={20}
        priority
        className="h-8 w-auto mx-auto mt-3 mb-4"
      />
      <h2 className="truncate text-xs text-[#757575] font-medium min-w-0 leading-[1.6]">
        {jobName}
      </h2>
      <h1 className="truncate font-bold min-w-0 text-[15px] mb-[5px] text-[#4C4C4C] leading-none">
        {title}
      </h1>
      <h3 className="truncate text-[10px] text-[#757575] font-medium min-w-0 leading-none">
        {location}
      </h3>
    </Link>
  );
}
