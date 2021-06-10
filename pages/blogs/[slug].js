// _rfc
import { useRouter } from "next/router";
import PageLayout from "components/PageLayout";
import { getBlogBySlug2 } from "lib/api";

export default function BlogDetailPage(props) {
  const router = useRouter();
  const { query } = router;
  const { slug } = query;
  const { blog } = props;
  // debugger;
  // console.log(blog);
  console.log("Displaying page for slug:", blog?.slug);

  return (
    <PageLayout>
      <h1>Blog Detail Page : {blog.title}</h1>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  console.log(
    "[[slug].js] Calling ... `getStaticPaths() : Gettings paths for every page"
  );
  return {
    paths: [
      { params: { slug: "my-first-blog" } },
      { params: { slug: "my-second-blog" } },
      { params: { slug: "my-third-blog" } },
    ],
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
