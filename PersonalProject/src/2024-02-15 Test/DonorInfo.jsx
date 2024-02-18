import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const DonorInfo = () => {
  const [donorInfo, setDonorInfo] = useState({});
  const { id } = useParams();
  // parsisiunciame duomenis pagal pasirinkto donoro id, pats id dinaminis, pagal pasirinkima is InputForm
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        setDonorInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  // atvaizduojame gauto donoro duomenos is 'get'
  return (
    <>
      <h1>Donor data:</h1>
      <img src={donorInfo.image} alt="some img" />
      <h1>{donorInfo.firstName}</h1>
      <p>{donorInfo.lastName}</p>
      <p>Age:{donorInfo.age}</p>
      <p>Blood group: {donorInfo.bloodGroup}</p>
      <p>{donorInfo.gender}</p>
    </>
  );
};
