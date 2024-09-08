import { defineField } from "sanity";

const address = {
  name: "address",
  title: "Address",
  type: "document",

  fields: [
    defineField({
      name: "btc",
      title: "Btc",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eth",
      title: "Eth",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bnb",
      title: "Bnb",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "solana",
      title: "Solana",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "usdt",
      title: "Usdt",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "usdc",
      title: "Usdc",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default address;
