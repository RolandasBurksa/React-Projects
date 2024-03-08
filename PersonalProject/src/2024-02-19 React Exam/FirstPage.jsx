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

  // louderis, kol krauna, matome pranesima 24 eilute
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  <br></br>;
  return (
    <>
      <h1>Books for sale</h1>

      <div className="row" style={{ marginTop: '4%' }}>
        {books.map((book) => (
          <div className="col-md-3" key={book.id} style={{ marginBottom: '4%' }}>
            <Card style={{ width: '18rem', height: '108vh' }}>
              <Card.Img style={{ height: '50vh' }} variant="top" src={book.cover} />
              <Card.Body>
                <Card.Title style={{ height: '10vh' }}>Title: {book.title} </Card.Title>
                <Card.Text style={{ height: '5vh' }}>
                  <b>Author: </b>Author: {book.author}
                </Card.Text>
                <Card.Text style={{ height: '35%' }}>
                  Some quick example text to build on the card title and make up the bulk of the cards content.
                </Card.Text>
                <Card.Text style={{ color: 'red', marginBottom: '4%' }}>Price: ${book.price}</Card.Text>
                <Button variant={book.reserved ? 'secondary' : 'success'} onClick={() => handleToggleReserved(book.id)}>
                  {book.reserved ? 'Reserved' : 'Available'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
