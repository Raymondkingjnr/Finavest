import { createClient } from "next-sanity";

const sanityClient = createClient({
  apiVersion: "2021-10-21",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  token: process.env.SANITY_STUDIO_TOKEN,
  useCdn: process.env.NODE_ENV === "production",
});

export default sanityClient;
