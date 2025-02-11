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

        const contentType = res.headers.get("content-type");

        if (res.ok) {
          if (contentType && contentType.includes("application/json")) {
            const data = await res.json();

            if (!data.jwtToken) {
              throw new Error("JWT Token이 없습니다.");
            }

            // 🔥 NextAuth가 필요로 하는 `user` 객체에 jwtToken 포함
            return {
              id: credentials.loginId, // 사용자 ID 포함
              loginId: credentials.loginId, // 필요하면 사용자 ID 포함
              jwtToken: data.jwtToken, // 백엔드에서 받은 JWT 토큰 추가
            };
          } else {
            throw new Error("Unexpected response format from server");
          }
        } else {
          const errorMessage = contentType?.includes("application/json")
            ? (await res.json()).message
            : await res.text();

          throw new Error(errorMessage || "로그인 오류 발생");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // ✅ user가 있으면 jwtToken을 토큰에 저장
        token.jwtToken = user.jwtToken;
      }
      return token;
    },
    async session({ session, token }) {
      // ✅ 세션에 jwtToken 추가
      session.user = {
        ...session.user,
        jwtToken: token.jwtToken, // 토큰에서 세션으로 전달
      };
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  debug: true,
};
