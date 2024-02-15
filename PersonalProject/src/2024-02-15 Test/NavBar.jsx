import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link>
          <button>Home page</button>
        </Link>
        <Link>
          <button>Donor List</button>
        </Link>
      </nav>
    </>
  );
};
