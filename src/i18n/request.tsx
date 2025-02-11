/* eslint-disable @typescript-eslint/no-require-imports */
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// ✅ 인덱스 시그니처를 추가하여 string 타입의 키를 허용
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messagesMap: Record<string, any> = {
  ko: require("../app/messages/ko.json"),
  en: require("../app/messages/en.json"),
  vi: require("../app/messages/vi.json"),
  fil: require("../app/messages/fil.json"),
  th: require("../app/messages/th.json"),
  zh: require("../app/messages/zh.json"),
  uz: require("../app/messages/uz.json"),
  kk: require("../app/messages/kk.json"),
};

export default getRequestConfig(async () => {
  // ✅ `await cookies()` 사용하여 NEXT_LOCALE 가져오기
  const requestLocale = (await cookies()).get("NEXT_LOCALE")?.value || "ko"; // 기본값: 한국어

  return {
    locale: requestLocale,
    messages: messagesMap[requestLocale] || messagesMap["ko"], // ✅ 인덱스 시그니처 적용
  };
});
