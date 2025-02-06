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
        const res = await fetch(
          // 백엔드 URL들어오면 수정
          `${process.env.BACKEND_URL}`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (res.ok) {
          const user = await res.json();
          return user.result;
        } else {
          throw new Error("로그인 오류 발생");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          scope: "openid email profile",
        },
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
            user.accessToken = data.result.accessToken;
            user.uuid = data.result.uuid;
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
        token.uuid = user.uuid;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        uuid: token.uuid,
        accessToken: token.accessToken,
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
