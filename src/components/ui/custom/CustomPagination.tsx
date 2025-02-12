"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import React from "react";

interface PaginationProps {
  currentPage: number; // 현재 페이지
  totalPages: number; // 전체 페이지 수
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  // Helper function to create a range of pages
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageToShow - 1);

    if (endPage - startPage < maxPageToShow - 1) {
      startPage = Math.max(1, endPage - maxPageToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const router = useRouter();

  const handleSearch = (page: number) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("page", page.toString());
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <Pagination className="w-full mx-auto my-6 text-white">
      <PaginationContent>
        {/* 이전 버튼 */}
        {currentPage != 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => handleSearch(currentPage - 2)} />
          </PaginationItem>
        )}

        {/* 동적 페이지 번호 */}
        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              // href={`job?page=${page}`}
              isActive={page === currentPage}
              className={`${
                page === currentPage
                  ? "bg-[#D9D3F9] text-black font-semibold"
                  : "font-semibold"
              }`}
              onClick={() => handleSearch(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* 중간 생략(엘리시스) */}
        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* 다음 버튼 */}
        {currentPage != totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => handleSearch(currentPage + 2)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
