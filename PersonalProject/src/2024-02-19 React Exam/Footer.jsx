import './CardPage.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

export const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  // useEffect skirtas mygtuko "show top" valdymui, atsiranda kai Y skrolas > 400 , 11 + 24 eilutes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    //  Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    //  Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // The empty array means this effect runs once on mount and once on unmount

  // funkcija goTop ir veikimo budas "smooth"
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
