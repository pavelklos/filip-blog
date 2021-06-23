// http://localhost:3000/api/preview?secret=previewSecret&slug=my-first-blog
// api/preview
// - query parameter : secret
// - query parameter : slug

import { getBlogBySlug2 } from "lib/api";

// export default (req, res) => {
//   res.status(200).json({ name: "John Doe" });
// };

export default async function enablePreview(req, res) {
  const { secret, slug } = req.query;
  const previewSecret = process.env.SANITY_PREVIEW_SECRET;

  // CHECK URL PARAMETERS (secret, slug)
  if (secret !== previewSecret || !slug) {
    // [401] Unauthorized
    return res.status(401).json({ message: "Invalid token or missing slug" });
  }

  // GET BLOG BY SLUG
  const blog = await getBlogBySlug2(slug);

  // CHECK BLOG
  if (!blog) {
    // [401] Unauthorized
    return res.status(401).json({ message: `Invalid slug: ${slug}` });
  }

  // setPreviewData() WILL SET COOKIES INTO YOUR BROWSER
  // COOKIES: __prerender_bypass, __next_preview_data
  // [307] Temporary Redirect
  // res.setPreviewData({ message: "Hello World" });
  res.setPreviewData({});
  res.writeHead(307, { Location: `/blogs/${blog.slug}` });
  res.end();

  // return (
  //   res
  //     // [200] OK
  //     .status(200)
  //     .json({
  //       message: "You may continue!",
  //       SANITY_PREVIEW_SECRET: "previewSecret",
  //       secret,
  //       slug,
  //       blog,
  //     })
  // );
}
