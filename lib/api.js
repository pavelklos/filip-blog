import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

// [SANITY : GROQ - Query Cheat Sheet]
// https://www.sanity.io/docs/query-cheat-sheet

// SANITY : Query Language (GROQ)
// GROQ (Graph-Relational Object Queries)
// https://www.sanity.io/docs/groq
const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  // 'coverImage': coverImage.asset._ref,
  'coverImage': coverImage.asset->url,
  // 'author': author->{name, 'avatar': Avatar.asset._ref},
  'author': author->{name, 'avatar': Avatar.asset->url},
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date) {${blogFields}}`
  );
  return results;
}

export async function getBlogBySlug1(slug) {
  const results = await client.fetch(
    `*[_type == "blog" && slug.current == "${slug}"] {${blogFields} content[]{..., "asset": asset->}}`
  );
  return results[0]; // first item from array
}
export async function getBlogBySlug2(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content[]{..., "asset": asset->}
      }`,
      {
        slug,
      }
    )
    .then((res) => res?.[0]); // first item from array
  return result;
  // return results[0]; // first item from array
}

export async function getAllBlogSlugs() {
  const results = await client.fetch(
    `*[_type == "blog"] {'slug': slug.current}`
  );
  return results;
}
