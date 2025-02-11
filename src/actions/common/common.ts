"use server";

import { options } from "@/app/api/auth/[...nextauth]";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function requestWithAuth<T>(
  apiUrl: string,
  method: HttpMethod = "GET",
  body?: unknown,
  requestCache?: RequestCache,
  tag?: string
): Promise<T> {
  const session: Session | null = await getServerSession(options);
  const token: string = session ? session.user.accessToken : "";
  const cache = requestCache || "no-cache";
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      uuid: session?.user.uuid || "",
    },
    cache,
  };
  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }
  if (tag) {
    fetchOptions.next = { tags: [tag] };
  }
  const res = await fetch(`${process.env.BACKEND_URL}/${apiUrl}`, fetchOptions);

  const data = (await res.json()) as T;
  return data;
}

export async function requestWithoutAuth<T>(
  apiUrl: string,
  method: HttpMethod = "GET",
  body?: unknown,
  requestCache?: RequestCache,
  tag?: string
): Promise<T> {
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
  const res = await fetch(`${process.env.BACKEND_URL}/${apiUrl}`, fetchOptions);

  const data = (await res.json()) as T;
  return data;
}
