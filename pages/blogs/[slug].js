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

  return (
    <PageLayout>
      <h1>Blog Detail Page : {blog.title}</h1>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  console.log("[[slug].js] Calling ... `getServerSideProps() : λ (Server)");
  const { params } = context;
  const { slug } = params;

  const blog = await getBlogBySlug2(slug);
  return {
    props: {
      blog,
    },
  };
}
