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
        setUsers([...users, res.data]); // formuojame nauja masyva su naujai papildytu donoru atvaizdavimui
        alert(`Vartotojas: ${res.data.firstName} uzregistruotas`);
      })
      .catch((error) => console.log(error));
    // alert(`Vartotojas: ${serverMessage.firstName} uzregistruotas`);
  };
  // triname pasirinkta donora is saraso, mygtukas 101 eiluteje
  const handleDelete = (id) => {
    axios
      .delete(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        const deletedUser = response.data;
        const filtredUsers = users.filter((person) => person.id !== deletedUser.id);
        setUsers(filtredUsers);
        console.log('users', users);
      })
      .catch((err) => console.log(err));
  };
  // donoro pildymo forma
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
      {/*  pramapiname parsisiusta 'users' masyva is 'get'  18 eilute */}
      <ul>
        {users.map((donor) => (
          <div key={donor.id}>
            <br></br>
            {donor.firstName} {donor.lastName}: {donor.age}:{donor.bloodGroup}: {donor.gender}
            <Link to={`/donorinfo/${donor.id}`}>
              <button>View more</button>
            </Link>
            <br></br>
            <button onClick={() => handleDelete(donor.id)}>Delete</button>
          </div>
        ))}
      </ul>
      {/* <p>
        Name: {inputForm.firstName}, LName: {inputForm.lastName}, Age: {inputForm.age}, BlotGrou:{inputForm.bloodGroup}
        Gender: {inputForm.gender}{' '}
      </p> */}
    </div>
  );
};
