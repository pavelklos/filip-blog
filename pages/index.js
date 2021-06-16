// _rfc
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
// import CardListItem from "components/CardListItem";
// import CardItem from "components/CardItem";
import FilteringMenu from "components/FilteringMenu";
import { getAllBlogs } from "lib/api";
import { useGetHello, useGetBlogs } from "actions";
import { useGetBlogsPages } from "actions/pagination";

export default function HomePage(props) {
  // filter.view.list === 0 : CARD VIEW
  // filter.view.list === 1 : LIST VIEW
  // const [filter, setFilter] = useState({ view: { list: false } });
  const [filter, setFilter] = useState({ view: { list: 0 } });
  // const { blogs, randomNumber } = props;
  // const { blogs: initialData, randomNumber } = props;
  const { blogs, randomNumber } = props;
  // console.log(blogs);
  // debugger;
  // console.log("Hello World");

  // const changeHandler = () => {
  //   setFilter({ view: { list: !filter.view.list } });
  // };

  // [CLIENT FETCH] : useEffect()
  useEffect(() => {
    // console.log(blogs);
    // async function fetchBlogs() {
    //   const blogs = await getAllBlogs();
    //   return blogs;
    // }
    // fetchBlogs();
  }, []); // ON INITIAL RENDER

  // useSWR() FROM [index.js] actions
  const { data: dataHello, error: errorHello } = useGetHello();
  // const { data: blogsData, error } = useGetBlogs();
  // const { data: blogs, error } = useGetBlogs(initialData);
  // console.log("useGetBlogs()", data);
  // debugger;

  // if (!blogsData) {
  //   return (
  //     <PageLayout>
  //       <h3 className='warning'>loading Blogs data...</h3>
  //     </PageLayout>
  //   );
  // }

  // [useSWRPages(....)] => useGetBlogsPages({..})
  // WE GET 'pagesResponseInterface'
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter,
  });
  // console.log({ pages, isLoadingMore, isReachingEnd, loadMore });

  return (
    <PageLayout>
      <div className='blog-detail-page'>
        <h5 className='warning'>
          {randomNumber} : {dataHello ? JSON.stringify(dataHello) : "NO DATA1"}
        </h5>
        <AuthorIntro />
        {/* <FilteringMenu filter={filter} onChange={() => changeHandler()} /> */}
        <FilteringMenu
          filter={filter}
          onChange={(option, value) =>
            setFilter({ ...filter, [option]: value })
          }
        />
        <hr />
        {/* {JSON.stringify(blogs)} */}
        {/* className from props */}
        {/* <div className={`page-wrapper`}> */}
        <small>
          <span className='warning'>useSWRPages() return</span>
          <br />
          pages.length: <span className='warning'>{pages.length}</span>{" "}
          isLoadingMore:{" "}
          <span className='warning'>{isLoadingMore.toString()}</span>{" "}
          isReachingEnd:{" "}
          <span className='warning'>{isReachingEnd.toString()}</span>{" "}
        </small>
        <hr />
        <Row className='mb-5'>
          {pages}
          {/* <Col md='10'>
            <CardListItem />
          </Col> */}

          {/* {blogsData.map((blog) => */}
          {/* {blogs.map((blog) =>
            filter.view.list ? (
              <Col key={`${blog.slug}-list`} md='9'>
                <CardListItem
                  {...blog}
                  link={{ href: `/blogs/${blog.slug}` }}
                />
              </Col>
            ) : (
              <Col key={blog.slug} md='4'>
                <CardItem {...blog} link={{ href: `/blogs/${blog.slug}` }} />
              </Col>
            )
            )} */}

          {/* <Col md='4'>
            <CardItem />
            </Col> */}
        </Row>
        {/* </div> */}
      </div>
    </PageLayout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  console.log("[index.js] Calling ... `getStaticProps() : ● (SSG)");
  const randomNumber = Math.random();
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
      randomNumber,
    },
  };
}

// export async function getServerSideProps() {
//   console.log("[index.js] Calling ... getServerSideProps() : λ  (Server)");
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//       randomNumber,
//     },
//   };
// }

// *****************************************************************************
// STATIC PAGE
// *****************************************************************************
// - Created at build time
// - When we are making the request we are always receiving the same html document
// - Faster, can be cached using CDN
// - getStaticProps()
// *****************************************************************************
// DYNAMIC PAGE
// *****************************************************************************
// - Created at request time (we can fetch data on server)
// - Little bit slower, the time depends on data you are fetching
// - getServerSideProps()
// *****************************************************************************

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
