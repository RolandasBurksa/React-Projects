import { Link } from 'react-router-dom';
import image1 from './img/DonKort.jpeg';

export const HomePage = () => {
  return (
    <>
      <br></br>
      <h1 style={{ color: 'red' }}>Give Something that Means Something</h1>
      <br></br>
      <img src={image1} alt="Donor Card" />
      <br></br>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic maxime minus eos sint ea esse sapiente,
        accusantium labore ipsam voluptas mollitia, quam deleniti at nesciunt, deserunt ex repellendus aperiam.
      </p>
      <Link to="/inputform">
        <button style={{ color: 'red' }}>Registration</button>
      </Link>
    </>
  );
};
