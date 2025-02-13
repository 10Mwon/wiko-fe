export { default } from "next-auth/middleware";

// ✅ API 및 정적 파일 요청은 제외 (middleware 적용 X)
export const config = {
  matcher: ["/mypage", "/resume:path*"],
};
