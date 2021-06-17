// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllBlogs } from "lib/api";

export default async function getBlogs(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const date = req.query.date || "desc";

  // res.status(200).json([1, 2, 3, 4, 5]); // test
  // const data = await getAllBlogs(); // data = blogs array
  // const data = await getAllBlogs({ offset: 0 }); // data = blogs array
  // const data = await getAllBlogs({ offset });
  const data = await getAllBlogs({ offset, date });

  res.status(200).json(data);
}
