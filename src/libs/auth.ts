import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import sanityClient from "./sanity";

export const authOptions: NextAuthOptions = {
  providers: [SanityCredentials(sanityClient)],
  session: {
    strategy: "jwt",
  },

  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userObj = await sanityClient.fetch<{
        _id: string;
        name: string;
      }>(
        `*[_type == "user" && email == $email] [0] {
          _id,
          name,
        }`,
        {
          email: userEmail,
        }
      );

      return {
        ...session,
        user: {
          ...session.user,
          id: userObj._id,
        },
      };
    },
  },
};
