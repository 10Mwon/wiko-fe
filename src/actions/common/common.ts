"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function requestWithAuth<T>(
  apiUrl: string,
  method: HttpMethod = "GET",
  body?: unknown,
  requestCache?: RequestCache,
  tag?: string
): Promise<T | string> {
  const session: Session | null = await getServerSession(options);
  console.log("세션정보:", session);
  const token: string = session ? session.user.jwtToken : "";
  const cache = requestCache || "no-cache";
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache,
  };
  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }
  if (tag) {
    fetchOptions.next = { tags: [tag] };
  }
  const res = await fetch(`${process.env.BACKEND_URL}${apiUrl}`, fetchOptions);

  const data = (await res.json()) as T;
  return data;
}

export async function requestWithoutAuth<T>(
  apiUrl: string,
  method: HttpMethod = "GET",
  body?: unknown,
  requestCache?: RequestCache,
  tag?: string
): Promise<T | string> {
  "use server";
  const cache = requestCache || "no-cache";
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    cache,
  };
  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }
  if (tag) {
    fetchOptions.next = { tags: [tag] };
  }
  const res = await fetch(`${process.env.BACKEND_URL}${apiUrl}`, fetchOptions);
  // 만약 res가 json이 아니면 console로 res값 출력
  if (res.headers.get("content-type") !== "application/json") {
    console.log("여기는 res가 json이 아닐때", res);
    return res.text();
  } else {
    console.log("여기는 res가 json일때");
    const data = (await res.json()) as T;

    return data;
  }
}
