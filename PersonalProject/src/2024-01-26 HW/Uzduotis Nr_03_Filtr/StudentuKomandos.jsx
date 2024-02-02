import { people } from './studentuSarasas';

export const StudentuKomanda = () => {
  const studentuKomanda = people.filter((person) => person.team === 'Studentai');

  const moksleiviuKomanda = people.filter((person) => person.team === 'Moksleiviai' || person.age > 22);

  return (
    <>
      <h2>Moksleiviai</h2>
      <ul>
        {moksleiviuKomanda.map((zmogus) => (
          <li key={zmogus.Id}>
            <i>
              {' '}
              {zmogus.name} {zmogus.surname}{' '}
            </i>{' '}
            {zmogus.age}
          </li>
        ))}
      </ul>
      <h2>Studentai</h2>
      <ul>
        {studentuKomanda.map((studentas) => (
          <li key={studentas.Id}>
            <i>
              {studentas.name} {studentas.surname}{' '}
            </i>{' '}
            {studentas.age}{' '}
          </li>
        ))}
      </ul>
    </>
  );
};
