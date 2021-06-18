// _rfc
import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";
// import moment from "moment";
// moment.locale("cs");

export default function CardListItem(props) {
  const { title, subtitle, slug, coverImage, date, author } = props;
  const { link } = props;
  const { mode = "normal" } = props;
  // const { mode = "placeholder" } = props;
  // console.log(coverImage);
  // console.log(mode);

  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
      <div className='card-body-wrapper'>
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
        <Card.Body>
          <Card.Title className='card-main-title'>
            {mode === "normal" && title ? title : "Placeholder Title"}
          </Card.Title>
          <Card.Text>
            {mode === "normal" && subtitle ? subtitle : "Placeholder Subtitle"}
          </Card.Text>
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
