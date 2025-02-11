import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        loginId: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.loginId || !credentials?.password) {
          throw new Error("Missing credentials");
        }
        const res = await fetch(`${process.env.BACKEND_URL}jwt-login/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        // 응답이 JSON인지 아닌지 판별
        const contentType = res.headers.get("content-type");

        if (res.ok) {
          if (contentType && contentType.includes("application/json")) {
            // 로그인 성공 → JSON을 반환하므로 정상적으로 처리
            const user = await res.json();
            return user;
          } else {
            // 정상적인 응답인데 JSON이 아닐 경우 처리 (예: 백엔드 실수로 JSON이 아닌 데이터를 보낸 경우)
            throw new Error("Unexpected response format from server");
          }
        } else {
          if (contentType && contentType.includes("application/json")) {
            // 실패 응답이 JSON일 경우
            const errorData = await res.json();
            console.log(errorData);
            throw new Error(errorData.message || "로그인 오류 발생");
          } else {
            // 실패 응답이 문자열일 경우
            const errorMessage = await res.text();
            throw new Error(errorMessage || "로그인 오류 발생");
          }
        }
      },
    }),
  ],
  cookies: {
    state: {
      name: "next-auth.state-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      },
    },
  },
  callbacks: {
    async signIn({ profile, user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await fetch(
            // ★★★소셜 로그인 API URL로 변경★★★
            `${process.env.BACKEND_URL}`,
            {
              method: "POST",
              body: JSON.stringify({
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              }),
              headers: { "Content-Type": "application/json" },
            }
          );

          if (res.ok) {
            const data = await res.json();
            user.jwtToken = data.result.jwtToken;
            return true;
          } else {
            console.error("Social login failed:", await res.text());
            return false;
          }
        } catch (error) {
          console.error("Error during social sign-in:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.jwtToken = user.jwtToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
      };

      return session;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  debug: true, // 디버깅 로그 활성화
};
