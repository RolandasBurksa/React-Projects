import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SecondPage = () => {
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: '',
  });

  // books irasymo formos pildymo 'on submit' valdymas
  const handleForm = (e) => {
    setInputForm((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // postiname ivedamos knygos duomenis i DB, masyvas -> inputForm
    axios
      .post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', inputForm)
      .then((res) => {
        console.log('res', res);

        alert(`Your book ${res.data.title} is registered`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Book registration form:</h1>
      <br></br>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formGridBookTitle">
          <Form.Label>Please enter the title of the book:</Form.Label>
          <Form.Control
            required
            placeholder="Book title..."
            name="title"
            value={inputForm.title}
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAuthor">
          <Form.Label>Who is the author of this book?</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Book author...."
            name="author"
            value={inputForm.author}
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCategory">
          <Form.Label>In which category would you place this book?</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Book category..."
            name="category"
            value={inputForm.category}
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPrice">
          <Form.Label>Book price:</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Book price..."
            name="price"
            value={inputForm.price}
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCover">
          <Form.Label>Book cover:</Form.Label>
          <Form.Control
            type="url"
            placeholder="Please enter the url of the book..."
            name="cover"
            value={inputForm.cover}
            onChange={handleForm}
          />
        </Form.Group>
        <br></br>
        <br></br>

        <Button onClick={() => navigate('/firstpage')} style={{ marginBottom: '4%' }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Author: {inputForm.author}, Category: {inputForm.category}, Title: {inputForm.title},{' '}
      </p>
    </>
  );
};
