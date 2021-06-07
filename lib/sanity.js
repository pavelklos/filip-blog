import sanityClient from "@sanity/client";

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: process.env.NODE_ENV === "production",
  // useCdn === true, gives you fast response, it will get you cached data
  // useCdn === false, gives you little bit slower response, but latest data
};
// const client = sanityClient(options);

export default sanityClient(options);

// https://www.npmjs.com/package/@sanity/client
// const sanityClient = require("@sanity/client");
// const client = sanityClient({
//   projectId: "your-project-id",
//   dataset: "bikeshop",
//   apiVersion: "2019-01-29", // use current UTC date - see "specifying API version"!
//   token: "sanity-auth-token", // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// });
