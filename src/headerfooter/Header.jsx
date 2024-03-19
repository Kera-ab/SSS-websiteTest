import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/Swiftsynclogo.png';
import './Header.css';
import AboutUs from './Aboutus';

function Header() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleAboutHoverEnter = () => {
    setIsAboutHovered(true);
  };

  const handleAboutHoverLeave = () => {
    setIsAboutHovered(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <header>
        <h3>
          <img className='logo' src={logo} alt="Logo" onClick={scrollToTop} />
        </h3>
        <nav>
          <ul>
            <li>
            <Link to="/">
              <button onClick={scrollToTop}>
                  Home
              </button>
            </Link>
            </li>
            <li
              onMouseEnter={handleAboutHoverEnter}
              onMouseLeave={handleAboutHoverLeave}
            >
              <button>About us</button>
            </li>
            <li>
              <button>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {isAboutHovered && (
        <div
          className="dropdown"
          onMouseEnter={handleAboutHoverEnter}
          onMouseLeave={handleAboutHoverLeave}
        >
          <AboutUs />
        </div>
      )}
    </div>
  );
}

export default Header;
