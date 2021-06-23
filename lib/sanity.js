import sanityClient from "@sanity/client";

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: process.env.NODE_ENV === "production",
  // useCdn === true, gives you fast response, it will get you cached data
  // useCdn === false, gives you little bit slower response, but latest data
  apiVersion: "2021-03-25", // use a UTC date string
};
// const client = sanityClient(options);

export const previewClient = sanityClient({
  ...options, // default options
  useCdn: false, // latest data, not cached data
  token: process.env.SANITY_API_TOKEN, // www.sanity.io token
});

export default sanityClient(options);

// https://www.sanity.io/help/js-client-api-version
// const client = sanityClient({
//   projectId: "your-project-id",
//   dataset: "production",
//   apiVersion: "2021-03-25", // use a UTC date string
//   token: "sanity-auth-token", // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// });

// https://www.npmjs.com/package/@sanity/client
// const sanityClient = require("@sanity/client");
// const client = sanityClient({
//   projectId: "your-project-id",
//   dataset: "bikeshop",
//   apiVersion: "2019-01-29", // use current UTC date - see "specifying API version"!
//   token: "sanity-auth-token", // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// });
