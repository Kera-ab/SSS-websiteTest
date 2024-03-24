import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/Swiftsynclogo.png';
import './Header.css';
import AboutUs from './Aboutus';
import { FaBars , FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Header() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

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
        <nav ref={navRef}>

          <div className="navitems">
            <Link to="/">
              <button onClick={scrollToTop}>
                Home
              </button>
            </Link>

          </div>

          <div className="navitems">
            <Link to="/aboutus">
              <button>About us</button>

            </Link>
          </div>

          <div className="navitems">
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button>Contact</button>
            </ScrollLink>
          </div>

          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>

        </nav>

        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
        
      </header>
    </div>
  );
}

export default Header;
