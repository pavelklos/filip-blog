import client, { previewClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

// [SANITY : GROQ - Query Cheat Sheet]
// https://www.sanity.io/docs/query-cheat-sheet

// SANITY : Query Language (GROQ)
// GROQ (Graph-Relational Object Queries)
// https://www.sanity.io/docs/groq
const blogFields = `
  _createdAt,
  title,
  subtitle,
  'slug': slug.current,
  date,
  // 'coverImage': coverImage.asset._ref,
  // 'coverImage': coverImage.asset->url,
  coverImage,
  // 'author': author->{name, 'avatar': Avatar.asset._ref},
  'author': author->{name, 'avatar': Avatar.asset->url},
`;

const builder = imageUrlBuilder(client);
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

// [offset] how many data you want to skip
// [limit] how many data you want to fetch
// 0...3 = 1,2,3
// 3...6 = 4,5,6
// 6...9 = 7,8,9
// export async function getAllBlogs({ offset }) {
// export async function getAllBlogs({ offset } = { offset: 0 }) {
export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`
  );
  return results;
}
export async function getPaginatedBlogs(
  { offset = 0, date = "desc" } = { offset: 0, date: "desc" }
) {
  const results = await client.fetch(
    // `*[_type == "blog"] | order(date) {${blogFields}}`
    // `*[_type == "blog"] | order(_createdAt asc) {${blogFields}} [0...3]`
    // 3 blogs per page
    // `*[_type == "blog"] | order(date desc) {${blogFields}} [${offset}...${
    //   offset + 3
    // }]`
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
      offset + 6
    }]`
  );
  return results;
}

export async function getBlogBySlug1(slug) {
  const results = await client.fetch(
    `*[_type == "blog" && slug.current == "${slug}"] {${blogFields} content[]{..., "asset": asset->}}`
  );
  return results[0]; // first item from array
}
export async function getBlogBySlug2(slug, preview) {
  const currentClient = getClient(preview);
  // console.log({ preview, currentClient });

  // !!! res?.[0] : WE GET 2 OBJECTS
  // res?.[0] = PUBLISHED DATA
  // res?.[1] = PREVIEW DATA (DRAFT DATA)
  // const result = await client
  const result = await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content[]{..., "asset": asset->}
      }`,
      {
        slug,
      }
    )
    .then((res) => {
      // console.log(res);
      // return res?.[0];
      // return preview ? res?.[1] : res?.[0];
      return preview ? (res?.[1] ? res[1] : res?.[0]) : res?.[0];
    }); // first item from array
  return result;
  // return results[0]; // first item from array
}

export async function getAllBlogSlugs() {
  const results = await client.fetch(
    `*[_type == "blog"] {'slug': slug.current}`
  );
  return results;
}
