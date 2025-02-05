import "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    uuid: string;
    AccessTokenExpiredTime: number;
  }
  interface Session {
    user: {
      accessToken: string;
      uuid: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    uuid: string;
    AccessTokenExpiredTime: number;
  }
}
