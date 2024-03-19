import React from 'react';
import { Link } from 'react-router-dom';



import { useState } from 'react';
import './Aboutus.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
      
      <ButtonWithTitleAndDescription
        title="About Us"
        description="Find out more about our team and services."
      />

      <ButtonWithTitleAndDescription
        title="Reach out to us"
        description="Feel free to get in touch for a quick consultation."
      />

      <ButtonWithTitleAndDescription
        title="Clients & Partners"
        description="Checkout some of the clients we have previously worked with."
      />

      <ButtonWithTitleAndDescription
        title="Blogs"
        description="We regularly post content as a part of our research."
      />
    </div>
  );
}

function ButtonWithTitleAndDescription({ title, description }) {

  return (
    <div className="button-wrapper">
      <Link to="/aboutus">
      <button
        className="button-aboutus"
      >
        <div>
          <h2>{title}</h2>
          <br />
          <p>{description}</p>
        </div>
      </button>
      </Link>
    </div>
  );
}

export default AboutUs;
