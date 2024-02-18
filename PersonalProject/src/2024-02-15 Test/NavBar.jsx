import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home page</button>
      </Link>
      <Link to="/donorinfo/:id">
        <button>Donor List</button>
      </Link>
    </nav>
  );
};
