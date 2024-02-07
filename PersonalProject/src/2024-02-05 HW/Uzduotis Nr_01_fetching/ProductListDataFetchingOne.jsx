import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './Product';
import { useParams } from 'react-router-dom';

export const ProductListDataFetchingOne = () => {
  const [param, setParam] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => setParam(response.data))
      .catch((error) => console.log(error));
  });

  console.log('id', id);

  //   const oneUser = param.find((person) => person.Id.toString() === id);

  return (
    <>
      <p>Producte one</p>
      {param.map((person) => (
        <Product key={person.id} id={person.id} title={person.title} />
      ))}
    </>
  );
};
