// _rfc
import { Container } from "react-bootstrap";
import BlogNavbar from "components/Navbar";

export default function PageLayout(props) {
  const { children, className } = props;

  return (
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
  );
}
