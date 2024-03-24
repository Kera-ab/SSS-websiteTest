import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/Swiftsynclogo.png';
import './Header.css';
import AboutUs from './Aboutus';

function Header() {

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
            <Link to="/aboutus">
            <li>
              <button>About us</button>
            </li>
            </Link>
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
    </div>
  );
}

export default Header;
