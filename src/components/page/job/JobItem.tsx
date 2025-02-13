import { JobPosting } from "@/types/RecruitDataType";
import Image from "next/image";
import Link from "next/link";

export default function JobItem({ props }: { props: JobPosting }) {
  const formattedPay = Number(props.pay);
  return (
    <Link
      href={`job/detail/${props.id}`}
      className="bg-white min-h-[134px]  rounded-xl px-3 py-4"
    >
      {props.imgUrl ? (
        <div className="relative mx-auto h-[50px] w-auto aspect-square overflow-hidden rounded-lg mb-3">
          <Image src={props.imgUrl} alt="" fill />
        </div>
      ) : (
        <div
          className="h-[50px] text-center flex items-center justify-center text-xl font-bold text-[#999999]
        "
        >
          {props.jobName}
        </div>
      )}
      <hr className="h-[1px] border-b-[1px] border-[#F0F1F5] mt-1 mb-2" />
      <ul>
        <li className="text-xs font-semibold text-wrap mb-1.5 ">
          {props.jobName}
        </li>
        <li className="text-[14px] font-semibold text-wrap mb-6 h-6 line-clamp-2">
          {props.title}
        </li>
        <li className="text-[#777777] gap-2 text-[10px]">{props.location}</li>
        <li className="text-[#777777] gap-2 text-[10px]">연봉 {props.pay}원</li>
      </ul>
    </Link>
  );
}
