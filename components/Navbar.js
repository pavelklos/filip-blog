// _rfc
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
// import { useTheme } from "providers/ThemeProvider";
// import { themes } from "context/ThemeContext";

export default function BlogNavbar(props) {
  // const { theme, toggleTheme } = useTheme();
  const { theme, toggleTheme } = props;
  // console.log(theme);

  return (
    <Navbar
      variant={theme.type}
      className='fj-navbar fj-nav-base'
      bg='transparent'
      expand='lg'
    >
      <Navbar.Brand className='fj-navbar-brand'>
        {/* <a href='/'>Filip-Jerga</a> */}
        <Link href='/'>
          <a style={{ color: theme.fontColor }}>Filip-Jerga</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {/* <Nav.Link className='fj-navbar-item fj-navbar-link' href='/'>
            Home
          </Nav.Link> */}
          {/* <Nav.Link
            as={() => (
              <Link href='/'>
                <a className='fj-navbar-item fj-navbar-link'>Home</a>
              </Link>
            )}
            /> */}
          {/* passHref https://github.com/react-bootstrap/react-bootstrap/issues/4131 */}
          <Link href='/' passHref>
            <Nav.Link className='fj-navbar-item fj-navbar-link'>Home</Nav.Link>
          </Link>
          <Link href='/api/blogs' passHref>
            <Nav.Link className='fj-navbar-item fj-navbar-link' target='_blank'>
              API
            </Nav.Link>
          </Link>
          <Nav.Link className='fj-navbar-item fj-navbar-link' href='#'>
            {process.env.NODE_ENV === "development" && (
              <span className='envDev'>✘ DEV</span>
            )}
            {process.env.NODE_ENV === "production" && (
              <span className='envProd'>✔ PROD</span>
            )}
          </Nav.Link>
          <button className={`btn btn-${theme.type}`} onClick={toggleTheme}>
            {theme.type.toUpperCase()}
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
