import { JobPosting } from "@/types/RecruitDataType";
import Image from "next/image";
import Link from "next/link";

export default function JobItem({ props }: { props: JobPosting }) {
  return (
    <Link
      href={`job/detail/${props.id}`}
      className="bg-white min-h-[134px]  rounded-xl px-3 py-4 shadow-[2px_2px_10px_rgba(0,0,0,0.15)]"
    >
      {props.imgUrl ? (
        <div className="relative mx-auto h-[70px] w-auto overflow-hidden rounded-lg mb-3">
          <Image src={props.imgUrl} alt="" fill objectFit="contain" />
        </div>
      ) : (
        <div
          className="h-[50px] text-center flex items-center justify-center text-xl font-bold text-[#999999] 
        "
        >
          {/* 회사명 */}
          {props.company}
        </div>
      )}
      <hr className="h-[1px] border-b-[1px] border-[#F0F1F5] mt-1 mb-2" />
      <ul>
        <p className="text-[12px] font-semibold mb-1 w-[90%] truncate">
          {props.company}
        </p>
        <li className=" font-semibold mb-2 h-6 line-clamp-2 text-sm">
          {props.title}
        </li>
        <li className="text-[#777777] gap-2 text-xs">{props.location}</li>
        <li className="text-[#777777] gap-2 text-xs">
          {props.payType} ₩{props.pay}
        </li>
      </ul>
    </Link>
  );
}
