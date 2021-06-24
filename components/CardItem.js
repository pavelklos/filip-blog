// _rfc
import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";
// import moment from "moment";
// moment.locale("cs");

export default function CardItem(props) {
  const { title, subtitle, slug, coverImage, date, author } = props;
  const { link } = props;
  const { mode = "normal" } = props;
  // const { mode = "placeholder" } = props;
  // console.log(coverImage);
  // console.log(mode);

  return (
    <Card className={`fj-card ${mode}`}>
      {/* <div className='card-body-wrapper'> */}
      <div className={`card-body-wrapper ${!coverImage ? "no-image" : ""}`}>
        <Card.Header className='d-flex flex-row'>
          <img
            // src={"https://via.placeholder.com/150"}
            src={
              mode === "normal" && author
                ? author.avatar
                : "https://via.placeholder.com/150"
            }
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {mode === "normal" && author ? author.name : "Placeholder Author"}
            </Card.Title>
            <Card.Text className='card-date'>
              {mode === "normal" && date
                ? // moment(date).format("LLL")
                  new Date(date).toLocaleString("cs-CZ", {})
                : "Placeholder Date"}
            </Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          {mode === "placeholder" ? (
            <div className='image-placeholder' />
          ) : (
            <Card.Img
              // src='https://via.placeholder.com/250'
              src={
                coverImage
                  ? // urlFor(coverImage).height(300).url()
                    // urlFor(coverImage).height(300).crop("center").fit("clip").url()
                    // urlFor(coverImage).url() // ORIGINAL SIZE WITH HOTSPOT
                    // .card-img { height: 15rem } = 15 x 16px = 240px
                    urlFor(coverImage).height(300).url()
                  : // urlFor(coverImage).height(300).crop("center").fit("clip").url()
                    "https://via.placeholder.com/250"
              }
              alt='Card image cap'
            />
          )}
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>
            {/* {mode === "normal" && title ? title : "Placeholder Title"} */}
            {mode === "normal" && title
              ? title.length > 40
                ? title.substr(0, 40) + "..."
                : title
              : "Placeholder Title"}
          </Card.Title>
          <Card.Text>
            {/* {mode === "normal" && subtitle ? subtitle : "Placeholder Subtitle"} */}
            {mode === "normal" && subtitle
              ? subtitle.length > 40
                ? subtitle.substr(0, 40) + "..."
                : subtitle
              : "Placeholder Subtitle"}
          </Card.Text>
        </Card.Body>
      </div>
      {/* <a href={`/blogs/${slug}`} className='card-button'>
        Read More
      </a> */}
      {/* <Link href='/blogs/[slug]' as={`/blogs/${slug}`}> */}
      {/* <Link href={`/blogs/${slug}`}>
        <a className='card-button'>Read More</a>
      </Link> */}
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
}
