import { useState } from 'react';

export const Registration = () => {
  const [userData, setUserData] = useState({
    firsName: '',
    lastName: '',
    age: '',
    blodGroup: '',
    gender: '',
  });
};
