// _rfc
import { Alert } from "react-bootstrap";

export default function PreviewAlert() {
  return (
    <Alert variant='secondary'>
      <div className='preview'>
        PREVIEW MODE
        <br />
        {/* This will lead me to API route that will remove preview cookies */}
        <Alert.Link href='/api/exit-preview'>Leave preview mode</Alert.Link>
      </div>
    </Alert>
  );
}
