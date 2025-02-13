export default function JobItemFallback() {
  return (
    <div className="bg-white min-h-[134px] rounded-xl px-3 py-4 animate-pulse">
      <div className="h-[50px] w-full bg-gray-300 rounded-lg mb-3"></div>
      <hr className="h-[1px] border-b-[1px] border-[#F0F1F5] mt-1 mb-2" />
      <ul>
        <li className="h-4 bg-gray-300 rounded w-3/4 mb-1.5"></li>
        <li className="h-4 bg-gray-300 rounded w-full mb-6"></li>
        <li className="h-3 bg-gray-300 rounded w-1/2 mb-1"></li>
        <li className="h-3 bg-gray-300 rounded w-1/3"></li>
      </ul>
    </div>
  );
}
