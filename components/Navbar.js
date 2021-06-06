// _rfc
import { Navbar, Nav } from "react-bootstrap";

export default function BlogNavbar() {
  return (
    <Navbar className='fj-navbar fj-nav-base' bg='transparent' expand='lg'>
      <Navbar.Brand className='fj-navbar-brand'>
        <a href='#'>Filip-Jerga</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='fj-navbar-item fj-navbar-link' href='/'>
            Home
          </Nav.Link>
          <Nav.Link className='fj-navbar-item fj-navbar-link' href='#'>
            {process.env.NODE_ENV === "development" && (
              <span className='envDev'>✘ DEV</span>
            )}
            {process.env.NODE_ENV === "production" && (
              <span className='envProd'>✔ PROD</span>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
