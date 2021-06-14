import useSWR from "swr";

// [CLIENT FETCH] : useSWR()
const fetcher = (url) => fetch(url).then((res) => res.json());

// HELLO ***********************************************************************

export const useGetHello = () => useSWR("/api/hello", fetcher); // return { data, error }

// SANITY BLOGS ****************************************************************

export const useGetBlogs = () => {
  return useSWR(`/api/blogs`, fetcher); // return { data, error }
};
