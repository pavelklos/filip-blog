// _rfc
import {
  Container,
  Row,
  Col,
  // Navbar,
  // Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";
import BlogNavbar from "../components/Navbar";

export default function HomePage() {
  return (
    <Container>
      {/* NAVBAR STARTS */}
      <BlogNavbar />
      {/* NAVBAR ENDS */}
      <div className='blog-detail-page'>
        <Row>
          <Col md='8'>
            {/* AUTHOR INTRO STARTS */}
            <Media className='mb-4 admin-intro'>
              <Image
                roundedCircle
                width={64}
                height={64}
                className='mr-3'
                src='https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4'
                alt='Generic placeholder'
              />
              <Media.Body>
                <h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
                <p className='welcome-text'>
                  My name is Filip Jerga and I am an experienced software
                  engineer and freelance developer. and this is my blog page.
                </p>
              </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr />
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className='mb-5'>
            <Col md='10'>
              {/* CardListItem STARTS */}
              <Card className={`fj-card fj-card-list`}>
                <div className='card-body-wrapper'>
                  <Card.Header className='d-flex flex-row'>
                    <img
                      src={"https://via.placeholder.com/150"}
                      className='rounded-circle mr-3'
                      height='50px'
                      width='50px'
                      alt='avatar'
                    />
                    <div>
                      <Card.Title className='font-weight-bold mb-1'>
                        Placeholder Author
                      </Card.Title>
                      <Card.Text className='card-date'>
                        Placeholder Date
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className='card-main-title'>
                      Placeholder Title
                    </Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a href='#' className='card-button'>
                  Read More
                </a>
              </Card>
              {/* CardListItem ENDS */}
            </Col>

            <Col md='4'>
              <Card className={`fj-card`}>
                <div className='card-body-wrapper'>
                  <Card.Header className='d-flex flex-row'>
                    <img
                      src={"https://via.placeholder.com/150"}
                      className='rounded-circle mr-3'
                      height='50px'
                      width='50px'
                      alt='avatar'
                    />
                    <div>
                      <Card.Title className='font-weight-bold mb-1'>
                        Placeholder Author
                      </Card.Title>
                      <Card.Text className='card-date'>
                        Placeholder Date
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className='view overlay'>
                    <Card.Img
                      src='https://via.placeholder.com/250'
                      alt='Card image cap'
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className='card-main-title'>
                      Placeholder Title
                    </Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a className='card-button'>Read More</a>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
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

// // _rfc
// import {
//   Navbar,
//   Nav,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";

// export default function HomePage() {
//   return (
//     <div>
//       <Navbar bg='light' expand='lg'>
//         <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls='basic-navbar-nav' />
//         <Navbar.Collapse id='basic-navbar-nav'>
//           <Nav className='mr-auto'>
//             <Nav.Link href='#home'>Home</Nav.Link>
//             <Nav.Link href='#link'>Link</Nav.Link>
//             <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
//               <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
//               <NavDropdown.Item href='#action/3.2'>
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href='#action/3.4'>
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Form inline>
//             <FormControl type='text' placeholder='Search' className='mr-sm-2' />
//             <Button variant='outline-success'>Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>
//       <h1>Hello World!</h1>;
//     </div>
//   );
// }

// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name='description' content='Generated by create next app' />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href='https://nextjs.org'>Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href='https://nextjs.org/docs' className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href='https://nextjs.org/learn' className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href='https://github.com/vercel/next.js/tree/master/examples'
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Powered by{" "}
//           <span className={styles.logo}>
//             <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// }
