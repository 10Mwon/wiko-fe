export interface NavDataType {
  item: string;
  href: string;
  sub?: NavDataType[];
}

export const MyPageMenuData: NavDataType[] = [
  {
    item: "언어 설정",
    href: "/",
  },
  {
    item: "계정 설정",
    href: "/",
  },
  {
    item: "로그아웃",
    href: "/",
  },
  {
    item: "서비스 탈퇴",
    href: "/",
  },
];

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
