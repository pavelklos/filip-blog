// _rfc
import { Container } from "react-bootstrap";
import Head from "next/head";
import BlogNavbar from "components/Navbar";

export default function PageLayout(props) {
  const { children, className } = props;

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        /> */}
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <BlogNavbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <div>
            <a href='#'>courses</a>
            {" | "}
            <a href='#'>github</a>
            {" | "}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
}
