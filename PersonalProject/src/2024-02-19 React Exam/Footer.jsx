import './CardPage.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

export const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    if (window.scrollY > 400) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div>
        <Container fluid>
          <div className="copyright">&copy; 2024 TechIn Corporate. All Rights Reserved</div>
          <br></br>
          <div className="socials">
            <ul className="ul_no-bullets">
              <li>
                <Facebook size={40} />
              </li>
              <li>
                <Twitter size={40} />
              </li>
              <li>
                <Linkedin size={40} />
              </li>
            </ul>
          </div>
          <br></br>
          {showTopButton && (
            <div className="go-top">
              <div>
                <Button onClick={goTop}>Show Top</Button>
              </div>
            </div>
          )}
          <div className="author">Author - Rolandas B</div>
          <br></br>
        </Container>
      </div>
    </>
  );
};
