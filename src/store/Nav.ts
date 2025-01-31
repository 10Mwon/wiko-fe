export interface NavDataType {
  item: string;
  href: string;
  sub?: NavDataType[];
}
export const NavData: NavDataType[] = [
  {
    item: "일자리 찾기",
    href: "/",
  },
  {
    item: "일자리 매칭",
    href: "/",
  },
  {
    item: "계약서 쓰기",
    href: "/",
    sub: [
      { item: "계약서 확인", href: "/" },
      { item: "계약서 최종 확인", href: "/" },
    ],
  },
  {
    item: "이력서 쓰기",
    href: "/",
  },
  {
    item: "커뮤니티",
    href: "/",
  },
  {
    item: "마이페이지",
    href: "/mypage",
  },
];
