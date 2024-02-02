import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModalOnSale from './Modal';

export const ProdOnSaleItem = ({ productName, productQuantity, discount, productImage, productText }) => {
  const reiksme = productQuantity === 0 ? 'Sold' : discount > 0 ? 'On Sale!' : 'New!';

  const [showModule, setShowModule] = useState(false);

  const handleClose = () => setShowModule(false);
  const handleShow = () => setShowModule(true);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
          <Card.Title>
            {productName} <br />
            <br /> {reiksme} <br />
            <br />
            Kiekis: {productQuantity}
          </Card.Title>
          <Card.Text>
            {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
            {productText}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Pirkti
          </Button>
        </Card.Body>
      </Card>
      <ModalOnSale show={showModule} onHide={handleClose} text={productText} name={productName} image={productImage} />
    </>
  );
};
