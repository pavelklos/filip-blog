// _rfc
import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";

export default function CardListItem(props) {
  const { title, subtitle, slug, coverImage, date, author } = props;
  const { link } = props;
  // console.log(coverImage);

  return (
    <Card className={`fj-card fj-card-list`}>
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
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {/* <a href='#' className='card-button'>
        Read More
      </a> */}
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
}
