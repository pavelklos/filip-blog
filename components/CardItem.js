// _rfc
import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";

export default function CardItem(props) {
  const { title, subtitle, slug, coverImage, date, author } = props;
  const { link } = props;
  // console.log(coverImage);

  return (
    <Card className={`fj-card`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            // src={"https://via.placeholder.com/150"}
            src={author ? author.avatar : "https://via.placeholder.com/150"}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {author ? author.name : "Placeholder Author"}
            </Card.Title>
            <Card.Text className='card-date'>
              {date
                ? new Date(date).toLocaleString("cs-CZ", {})
                : "Placeholder date"}
            </Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img
            // src='https://via.placeholder.com/250'
            src={
              coverImage
                ? // urlFor(coverImage).height(300).url()
                  // urlFor(coverImage).height(300).crop("center").fit("clip").url()
                  urlFor(coverImage).url()
                : "https://via.placeholder.com/250"
            }
            alt='Card image cap'
          />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
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
