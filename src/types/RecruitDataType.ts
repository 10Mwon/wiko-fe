interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

interface Pageable {
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: Sort;
  unpaged: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  imgUrl: string;
  jobName: string;
  location: string;
  payType: string; // "월급" 등의 급여 유형
  pay: string;
  company: string;
}

export interface JobResponse {
  totalElements: number;
  totalPages: number;
  pageable: Pageable;
  size: number;
  content: JobPosting[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface JobQueryParams {
  // industryTypeList?: string[]; // 업종 리스트 (선택적)
  industryTypeList?: string; // 업종 리스트 (선택적)
  startAddress?: string; // 시작 주소 (선택적)
  endAddress?: string; // 종료 주소 (선택적)
  minPay?: string; // 최소 급여 (선택적)
  maxPay?: string; // 최대 급여 (선택적)
  page: string; // 페이지 번호 (기본값 0)
  size?: string; // 페이지 크기 (기본값 10)
  keyword?: string;
}
