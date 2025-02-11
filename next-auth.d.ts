import "next-auth";

declare module "next-auth" {
  interface User {
    jwtToken: string;
  }
  interface Session {
    user: {
      jwtToken: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    jwtToken: string;
  }
}
