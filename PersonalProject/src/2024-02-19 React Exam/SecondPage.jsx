import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const SecondPage = () => {
  return (
    <>
      <h1>Book registration form:</h1>
      <br></br>
      <Form>
        <Form.Group className="mb-3" controlId="formGridBookTitle">
          <Form.Label>Please enter the title of the book:</Form.Label>
          <Form.Control required placeholder="Book title..." />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>Author First Name:</Form.Label>
            <Form.Control required type="text" placeholder="Enter First Name..." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Author Last Name:</Form.Label>
            <Form.Control required type="text" placeholder="Enter Last Name..." />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridCategory">
          <Form.Label>In which category would you place this book?</Form.Label>
          <Form.Control required type="text" placeholder="Book category..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPrice">
          <Form.Label>Book price:</Form.Label>
          <Form.Control required type="number" placeholder="Book price..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCover">
          <Form.Label>Book cover:</Form.Label>
          <Form.Control type="url" placeholder="Please enter the url of the book..." />
        </Form.Group>
        <br></br>
        <br></br>

        <Button style={{ marginBottom: '4%' }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
