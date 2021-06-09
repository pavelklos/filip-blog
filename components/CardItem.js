// _rfc
import { Card } from "react-bootstrap";

export default function CardItem(props) {
  const { title, subtitle, slug, coverImage, date, author } = props;
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
              {date ? new Date(date).toLocaleString() : "Placeholder date"}
            </Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img
            // src='https://via.placeholder.com/250'
            src={coverImage || "https://via.placeholder.com/250"}
            alt='Card image cap'
          />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      <a className='card-button'>Read More</a>
    </Card>
  );
}
