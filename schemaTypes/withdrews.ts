import { defineField } from "sanity";

const widthdrew = {
  name: "withdrew",
  title: "Withdrew",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "user",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amount",
      title: "Amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "boolean",
      initialValue: false,
      description: "Check if you have received payment",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default widthdrew;
