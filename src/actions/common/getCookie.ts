"use server";

import { cookies } from "next/headers";

export async function getUserLocale() {
  return (await cookies()).get("NEXT_LOCALE")?.value || "ko";
}
