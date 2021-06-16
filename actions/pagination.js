// _rafc
import { useSWRPages } from "swr";
import { useGetBlogs } from "actions";

import { Col } from "react-bootstrap";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

// HOOK FUNCTION : use..
export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
  // [useSWRPages(...) 4 PARAMS (pageKey, pageFN, SWRToOffset, deps?)
  return useSWRPages(
    // 1.[pageKey] STRING
    "index-page",

    // 2.[pageFN] CALLBACK FUNCTION [FETCHING DATA]
    ({ offset, withSWR }) => {
      const { data: blogs } = withSWR(useGetBlogs(initialData));

      if (!blogs) {
        return "Loading...";
      }

      return blogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md='9'>
            <CardListItem {...blog} link={{ href: `/blogs/${blog.slug}` }} />
          </Col>
        ) : (
          <Col key={blog.slug} md='4'>
            <CardItem {...blog} link={{ href: `/blogs/${blog.slug}` }} />
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
      return 0;
    },

    // 4.[deps?] any[]
    [filter]
  );
};
