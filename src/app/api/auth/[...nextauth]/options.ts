import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ profile, user, account }) {
      if (account?.provider === "google") {
        try {
          const token = `${account.id_token}`;
          const res = await fetch(`${process.env.BACKEND_URL}api/auth/google`, {
            method: "POST",
            body: JSON.stringify({ token: token }),
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            const data = await res.json();
            user.jwtToken = data.jwtToken;
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
    async jwt({ token, user }) {
      if (user) {
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
