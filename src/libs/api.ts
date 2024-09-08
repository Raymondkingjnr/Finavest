import { CreateDeposit, Deposits } from "@/modals/user";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";
import { Coins } from "@/modals/coins";
import axios from "axios";

export async function getUserData(userId: string) {
  const result = await sanityClient.fetch(
    queries.getUserDataQuery,
    { userId },
    { cache: "no-cache" }
  );

  return result;
}

export async function getCoinsAddress() {
  const result = await sanityClient.fetch<Coins>(
    queries.getCoinAddress,
    {},
    { cache: "no-cache" }
  );
  // console.log("Fetched data:", result);
  return result;
}

export const amountSent = async ({ userId, amount, token }: CreateDeposit) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "deposits",
          user: {
            _type: "reference",
            _ref: userId,
          },
          amount,
          token,
        },
      },
    ],
  };

  try {
    const { data } = await axios.post(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}`,
      mutation,
      {
        headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` },
      }
    );

    return data;
  } catch (error: any) {
    console.error("Error sending data to Sanity:", error); // Log more details
    throw new Error("Sanity API request failed");
  }
};

export const amountWithdrew = async ({
  userId,
  amount,
  token,
}: CreateDeposit) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "withdrew",
          user: {
            _type: "reference",
            _ref: userId,
          },
          amount,
          token,
        },
      },
    ],
  };

  try {
    const { data } = await axios.post(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}`,
      mutation,
      {
        headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` },
      }
    );

    return data;
  } catch (error: any) {
    console.error("Error sending data to Sanity:", error); // Log more details
    throw new Error("Sanity API request failed");
  }
};

export async function getUserDeposit(userId: string) {
  const result = await sanityClient.fetch<Deposits[]>(
    queries.getUserDeposit,
    { userId },
    {
      cache: "no-cache",
    }
  );

  return result;
}
export async function getUserWithdrew(userId: string) {
  const result = await sanityClient.fetch<Deposits[]>(
    queries.getUserWithdrew,
    { userId },
    {
      cache: "no-cache",
    }
  );

  return result;
}
