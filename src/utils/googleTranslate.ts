"use server";
import { getUserLocale } from "@/actions/common/getCookie";
import { v2 as Translate } from "@google-cloud/translate";

const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64
  ? JSON.parse(
      Buffer.from(
        process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64,
        "base64"
      ).toString("utf-8")
    )
  : null;

if (!credentialsJson) {
  throw new Error(
    "Google Cloud 인증 정보가 없습니다! .env.local을 확인하세요."
  );
}

const translate = new Translate.Translate({ credentials: credentialsJson });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const googleTranslate = async <T extends Record<string, any>>(
  data: T
): Promise<T> => {
  const translatedData: Partial<T> = {};
  const userLanguage = await getUserLocale();
  const translateText = async (text: string): Promise<string> => {
    try {
      const [translation] = await translate.translate(text, userLanguage);
      return translation;
    } catch (err) {
      console.error("Translation Error:", err);
      throw err;
    }
  };

  for (const key in data) {
    if (typeof data[key] === "string") {
      translatedData[key] = (await translateText(data[key])) as T[Extract<
        keyof T,
        string
      >];
    } else {
      translatedData[key] = data[key];
    }
  }

  return translatedData as T;
};
