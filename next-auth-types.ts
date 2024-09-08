import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      name: string;
      bnb: string;
      btc: string;
      eth: string;
      usdterc: string;
      usdttrc: string;
    };
  }
}
