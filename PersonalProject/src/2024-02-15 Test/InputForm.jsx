import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const InputForm = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputForm, setInputForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    bloodGroup: '',
    gender: '',
  });
  // parsiunciame duomenis is serverio, formuojame 'users' masyva su 'get'
  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // donoru irasymo formos pildymo 'on submit' valdymas
  const handleForm = (e) => {
    setInputForm((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // postiname nauja donora i sarasa
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
      {/*  pramapiname parsisiusta 'users' masyva is 'get'  */}
      <ul>
        {users.map((donor) => (
          <div key={donor.id}>
            <br></br>
            {donor.firstName} {donor.lastName}: {donor.age}:{donor.bloodGroup}: {donor.gender}
            <Link to={`/donorinfo/${donor.id}`}>
              <button>View more</button>
            </Link>
          </div>
        ))}
      </ul>
      <p>
        Name: {inputForm.firstName}, LName: {inputForm.lastName}, Age: {inputForm.age}, BlotGrou:{inputForm.bloodGroup}
        Gender: {inputForm.gender}{' '}
      </p>
    </div>
  );
};
