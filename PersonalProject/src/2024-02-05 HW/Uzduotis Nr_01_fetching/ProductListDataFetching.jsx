import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './Product';

export const ProductListDataFetching = () => {
  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProductArray(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log('products', productArray);

  if (isLoading) {
    return <div>Laukiame uzkrovimo pabaigos</div>;
  }

  return (
    <>
      <h1>Produkt listo itemai</h1>
      {productArray.map((product) => (
        <Product
          key={product.id}
          thumbnail={product.thumbnail}
          title={product.title}
          price={`price - ${product.price}`}
          stock={`qantity - ${product.stock}`}
        />
      ))}
    </>
  );
};
