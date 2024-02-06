import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './Product';

export const ProductListDataFetching = () => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => setProductArray(response.data.products));
  }, []);

  console.log('products', productArray);

  return (
    <>
      <h1>Produkt listo itemai</h1>
      {productArray.map((product) => (
        <Product key={product.id} title={product.title} />
      ))}
    </>
  );
};
