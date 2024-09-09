import { defineField } from "sanity";
const user = {
  name: "user",
  title: "user",
  type: "document",

  fields: [
    defineField({
      name: "isAdmin",
      title: "is admin",
      type: "boolean",
      description: "Check if the user is an admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: true,
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      readOnly: true,
    }),
    defineField({
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    }),
    defineField({
      name: "btc",
      type: "string",
      title: "btc",
      readOnly: true,
    }),
    defineField({
      name: "eth",
      type: "string",
      title: "eth",
      readOnly: true,
    }),
    defineField({
      name: "usdterc",
      type: "string",
      title: "usdterc",
      readOnly: true,
    }),
    defineField({
      name: "usdttrc",
      type: "string",
      title: "usdttrc",
      readOnly: true,
    }),
    defineField({
      name: "bnb",
      type: "string",
      title: "bnb",
      readOnly: true,
    }),
    defineField({
      name: "balance",
      title: "Balance",
      type: "number",
    }),
  ],
};

export default user;
