import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import './CardPage.css';

export const FirstPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // parsiunciame duomenis is serverio, formuojame 'users' masyva su 'get'
  useEffect(() => {
    axios
      .get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books')
      .then((response) => {
        setBooks(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <h1>Books in a shop</h1>

      <div className="row" style={{ marginTop: '4%', marginLeft: '2%' }}>
        {books.map((book) => (
          <div className="col-md-3" key={book.id} style={{ marginBottom: '4%' }}>
            <Card style={{ width: '18rem', height: '105vh' }}>
              <Card.Img style={{ height: '50vh' }} variant="top" src={book.cover} />
              <Card.Body>
                <Card.Title>{book.title} </Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text style={{ height: '40%' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Text>Price: ${book.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
