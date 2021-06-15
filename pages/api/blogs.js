// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllBlogs } from "lib/api";

export default async function getBlogs(req, res) {
  // res.status(200).json([1, 2, 3, 4, 5]); // test
  const data = await getAllBlogs(); // data = blogs array
  res.status(200).json(data);
}
