import axios from 'axios';
import { useState } from 'react';

export const InputForm = () => {
  const [inputForm, setInputForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    blodGroup: '',
    gender: '',
  });

  // const [serverMessage, setServerMessage] = useState({});

  const handleForm = (e) => {
    setInputForm((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // alert(`Form submitet for user ${inputForm.firstName}`);

    axios
      .post('https://dummyjson.com/users/add', inputForm)
      .then((res) => {
        console.log('res', res);
        // setInputForm(res.data.inputForm);
        // setServerMessage(res.data);
        alert(`Vartotojas: ${res.data.firstName} uzregistruotas`);
      })
      .catch((error) => console.log(error));
    // alert(`Vartotojas: ${serverMessage.firstName} uzregistruotas`);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={inputForm.firstName} onChange={handleForm} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={inputForm.lastName} onChange={handleForm} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={inputForm.age} onChange={handleForm} />
        </label>
        <label>
          Blood group:
          <input type="text" name="blodGroup" value={inputForm.blodGroup} onChange={handleForm} />
        </label>
        <label>
          Gender:
          <select type="text" name="gender" value={inputForm.gender} onChange={handleForm}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>
        Name: {inputForm.firstName}, LName: {inputForm.lastName}, Age: {inputForm.age}, BlotGrou:{inputForm.blodGroup}
        ,Gender: {inputForm.gender}{' '}
      </p>
    </div>
  );
};
