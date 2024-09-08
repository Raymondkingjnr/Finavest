import { groq } from "next-sanity";

export const getUserDataQuery = groq`*[_type == "user" && _id == $userId][0] { 
  _id,
  name,
  email,
  image,
  _createdAt,
  balance,
  deposit,
  widthdrew,
}`;

export const getCoinAddress = groq`
*[_type == "address"][0] {
_id,
_rev,
_type,
bnb,
btc,
eth,
solana,
usdc,
usdt,
}
`;

export const getUserDeposit = groq`*[_type == "deposits" && user._ref == $userId] {
 _id,
 amount,
 token,
  _createdAt,
  paymentStatus,
}`;
export const getUserWithdrew = groq`*[_type == "withdrew" && user._ref == $userId] {
 _id,
 amount,
 token,
  _createdAt,
  paymentStatus,
}`;
