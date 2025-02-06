"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Search from "../../../../public/assets/icons/Search";

export default function SearchInput({ query = "" }: { query?: string }) {
  const [searchQuery, setSearchQuery] = useState(query); // 입력된 검색어를 상태로 관리
  const router = useRouter(); // Next.js의 useRouter 훅을 사용

  // 검색 버튼 클릭 시 처리
  const handler = () => {
    if (searchQuery.trim()) {
      router.push(`/job?query=${searchQuery}`);
    }
  };

  return (
    <div className="relative">
      <input
        className="bg-white w-full h-[34px] rounded-xl px-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // 입력값을 상태에 저장
        placeholder="검색어를 입력하세요"
      />
      <Search
        className="absolute top-0 right-2.5 h-[34px] cursor-pointer"
        handler={handler} // 검색 버튼 클릭 시 handler 호출
      />
    </div>
  );
}
