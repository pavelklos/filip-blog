import useSWR from "swr";

// [CLIENT FETCH] : useSWR()
const fetcher = (url) => fetch(url).then((res) => res.json());

// HELLO ***********************************************************************

export const useGetHello = () => useSWR("/api/hello", fetcher); // return { data, error }

// SANITY BLOGS ****************************************************************

// // export const useGetBlogs = (initialData) => {
// export const useGetBlogs = ({ offset }, initialData) => {
//   return useSWR(`/api/blogs?offset=${offset || 0}`, fetcher, { initialData });
//   // return { data, error }
// };

export const useGetBlogs = ({ offset, filter }, initialData) => {
  return useSWR(
    `/api/blogs?offset=${offset || 0}&date=${filter.date.asc ? "asc" : "desc"}`,
    fetcher,
    { initialData }
  );
};
