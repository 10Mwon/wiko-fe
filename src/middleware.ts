import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const locale = req.cookies.get("NEXT_LOCALE")?.value || "en"; // 기본값: 영어

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 31536000 }); // 1년 유지

  // ✅ 로그인 여부 확인 (예: 쿠키에 "authToken"이 있는지 확인)
  const isLoggedIn = req.cookies.has("next-auth.session-token"); // 로그인된 사용자는 authToken 쿠키가 있다고 가정

  // ✅ 로그인 안 된 사용자는 /mypage 접근 차단
  if (req.nextUrl.pathname.startsWith("/mypage") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signin", req.url)); // 로그인 페이지로 리디렉트
  }

  return response;
}

// ✅ API 및 정적 파일 요청은 제외 (middleware 적용 X)
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // `/api`, `/public`, `_next` 폴더 제외
};
