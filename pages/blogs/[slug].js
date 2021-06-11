// _rfc
import { useRouter } from "next/router";
import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import BlogContent from "components/BlogContent";
import { getAllBlogSlugs, getBlogBySlug2 } from "lib/api";
import { Row, Col } from "react-bootstrap";

// import BlockContent from "@sanity/block-content-to-react";
// // const serializers = {
// //   types: {
// //     code: () => {
// //       return <h1>Code Block will be here</h1>;
// //     },
// //   },
// // };
// const serializers = {
//   types: {
//     code: (props) => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//         <p>{props.node.filename}</p>
//       </pre>
//     ),
//   },
// };

export default function BlogDetailPage(props) {
  const router = useRouter();
  const { query } = router;
  const { slug } = query;
  const { blog } = props;
  // debugger;
  console.log(blog);
  console.log("Displaying page for slug:", blog?.slug);

  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader {...blog} />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  console.log(
    "[[slug].js] Calling ... `getStaticPaths() : Gettings paths for every page"
  );
  const slugs = await getAllBlogSlugs();
  // console.log("slugs:", slugs);
  // const paths = slugs?.map((s) => ({ params: { slug: s.slug } }));
  // console.log("paths:", paths);

  return {
    // paths: [
    //   { params: { slug: "my-first-blog" } },
    //   { params: { slug: "my-second-blog" } },
    //   { params: { slug: "my-third-blog" } },
    // ],
    // paths: paths,
    // paths,
    paths: slugs?.map((s) => ({ params: { slug: s.slug } })),
    fallback: false, // false -> 404
  };
}

export async function getStaticProps(context) {
  console.log("[[slug].js] Calling ... `getStaticProps() : ● (SSG) DYNAMIC");
  const { params } = context;
  const { slug } = params;

  const blog = await getBlogBySlug2(slug);
  console.log("Fetching blog by slug:", slug);

  return {
    props: {
      blog,
    },
  };
}

// export async function getServerSideProps(context) {
//   console.log("[[slug].js] Calling ... `getServerSideProps() : λ (Server)");
//   const { params } = context;
//   const { slug } = params;

//   const blog = await getBlogBySlug2(slug);
//   return {
//     props: {
//       blog,
//     },
//   };
// }
