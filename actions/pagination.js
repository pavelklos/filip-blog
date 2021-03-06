// _rafc
import { useEffect } from "react";

import { useSWRPages } from "swr";
import { useGetBlogs } from "actions";

import { Col } from "react-bootstrap";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import CardItemBlank from "components/CardItemBlank";
import CardListItemBlank from "components/CardListItemBlank";

// HOOK FUNCTION : use..
// export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
export const useGetBlogsPages = ({ blogs, filter }) => {
  // IN BROWSER ENVIRONMENT
  useEffect(() => {
    window.__pagination__init = true;
  }, []); // ON INITIAL RENDER

  // [useSWRPages(...) 4 PARAMS (pageKey, pageFN, SWRToOffset, deps?)
  return useSWRPages(
    // 1.[pageKey] STRING
    "index-page",

    // 2.[pageFN] CALLBACK FUNCTION [FETCHING DATA]
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;
      // debugger;

      if (typeof window !== "undefined" && window.__pagination__init) {
        initialData = null;
      }

      // const { data: blogs } = withSWR(useGetBlogs(initialData));
      // const { data: blogs } = withSWR(useGetBlogs({ offset }, initialData));
      // const { data: blogs } = withSWR(useGetBlogs({ offset }));
      // const { data: paginatedBlogs } = withSWR(
      //   useGetBlogs({ offset }, initialData)
      // );
      const { data: paginatedBlogs } = withSWR(
        useGetBlogs({ offset, filter }, initialData)
      );
      // console.log("offset:", offset);

      if (!paginatedBlogs) {
        // return "Loading...";
        // return 3 blank items (placeholder)
        return Array(3)
          .fill(0)
          .map((_, index) =>
            filter.view.list ? (
              <Col key={`${index}-list`} md='9'>
                <CardListItemBlank />
              </Col>
            ) : (
              <Col key={index} md='6' lg='4'>
                <CardItemBlank />
              </Col>
            )
          );
      }

      return paginatedBlogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md='9'>
            {/* <CardListItem {...blog} link={{ href: `/blogs/${blog.slug}` }} /> */}
            <CardListItem
              {...blog}
              link={{ href: "/blogs/[slug]", as: `/blogs/${blog.slug}` }}
            />
          </Col>
        ) : (
          <Col key={blog.slug} md='6' lg='4'>
            {/* <CardItem {...blog} link={{ href: `/blogs/${blog.slug}` }} /> */}
            <CardItem
              {...blog}
              link={{ href: "/blogs/[slug]", as: `/blogs/${blog.slug}` }}
            />
          </Col>
        )
      );
    },

    // 3.[SWRToOffset] CALLBACK FUNCTION [COUNTING OFFSET]
    // here you will compute offset that will get passed
    // into previous callback function with 'withSWR'
    // - SWR: data you will get from 'withSWR' function
    // - index: number of current page
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 6; // 3 blogs per page
      // [More Blogs] -> [offset] null, 0, 3, 6, 9, 12, ...
    },

    // 4.[deps?] any[]
    [filter]
  );
};
