import client from "./sanity";

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

export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date) {${blogFields}}`
  );
  return results;
}
