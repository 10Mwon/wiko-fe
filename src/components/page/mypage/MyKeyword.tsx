import { ChevronDown } from "lucide-react";

export default function MyKeyword() {
  return (
    <div className="bg-white rounded-3xl shadow-md  p-4">
      <h2 className="py-0 font-semibold m-2 flex items-center text-gray-500">
        <p>나의 키워드</p>
        <ChevronDown className="ml-1" />
      </h2>

      <ul className="flex text-nowrap font-bold py-4 justify-between items-center divide-x divide-gray-300">
        <li className="px-4">20 ~ 30</li>
        <li className="px-4">초대졸</li>
        <li className="px-4">식당</li>
        <li className="px-4">고급</li>
      </ul>
    </div>
  );
}
