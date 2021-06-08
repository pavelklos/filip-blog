import client from "./sanity";

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  // 'coverImage': coverImage.asset._ref
  'coverImage': coverImage.asset->url,
  author
`;

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}
