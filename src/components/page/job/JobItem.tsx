import { JobItemType } from "@/types/jobFilterDataType";
import { DollarSign, MapPin } from "lucide-react";
import Image from "next/image";

export default function JobItem({ props }: { props: JobItemType }) {
  const formattedPay = Number(props.pay);
  return (
    <div className="bg-white min-h-[134px] w-full rounded-xl mb-6 p-4">
      <div className="flex items-center mb-3 gap-3">
        <div className="relative  w-[50px] aspect-square overflow-hidden rounded-lg">
          <Image src={props.imgUrl} alt="" fill />
        </div>
        <ul>
          <li className="text-xs">{props.jobName}</li>
          <li className="text-md font-semibold">{props.title}</li>
        </ul>
      </div>
      <div className="flex items-center text-[#777777] gap-2 mb-2">
        <MapPin color="#777777" size={16} /> {props.location}
      </div>
      <div className="flex items-center text-[#777777] gap-2">
        <DollarSign color="#777777" size={16} />
        {formattedPay.toLocaleString()}
      </div>
    </div>
  );
}
