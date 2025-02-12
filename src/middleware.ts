import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const locale = req.cookies.get("NEXT_LOCALE")?.value || "en"; // 기본값: 한국어

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 31536000 }); // 1년 유지

  return response;
}

// ✅ API 및 정적 파일 요청은 제외 (middleware 적용 X)
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // `/api`, `/public`, `_next` 폴더 제외
};
