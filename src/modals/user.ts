type Witdhdrew = {
  _key: string;
  amount: number;
  date: string;
};

export type User = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;

  balance: number;
  bnb: string;
  btc: string;
  email: string;
  eth: string;
  isAdmin: boolean;
  name: string;

  usdterc: string;
  usdttrc: string;
  widthdrew: Witdhdrew[];
};

export type Deposits = {
  amount: number;
  token: string;
  userId: string;
  paymentStatus: boolean;
  _createdAt: string;
};
export type CreateDeposit = {
  amount: number;
  token: string;
  userId: string;
};
