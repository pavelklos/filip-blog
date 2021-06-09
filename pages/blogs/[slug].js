// _rfc
import { useRouter } from "next/router";
import PageLayout from "components/PageLayout";

export default function BlogDetailPage() {
  const router = useRouter();
  // debugger;
  const { query } = router;
  const { slug } = query;

  return (
    <PageLayout>
      <h1>Blog Detail Page : {slug}</h1>
    </PageLayout>
  );
}
