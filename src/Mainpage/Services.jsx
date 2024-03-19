import React from 'react';
import swiftservices from '../assets/image 2.png';
import cyberSecurityImage from '../assets/cybersecurityicon.png';
import managedServicesImage from '../assets/mslogo.png';
import cloudSolutionsImage from '../assets/cloudlogo.png';

import './Services.css';

// Function to create a Service Item
function ServiceItem({ imageSrc, altText, title, items }) {
  return (
    
    
    <div className='Service-Item'>
        <img className='Service-Icon' src={imageSrc} alt={altText} />
        <h2>{title}</h2>
        
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      
    <button className='Service-button'>
      Learn More
    </button>
    </div>
  );
}

// Your component definition
function Services() {
  return (
    <div className='Page'>
      <div className='sText-Area'>
        <h1>Services</h1>
        <h2>A wide range of services are available. Select one of the options for details or more.</h2>

        {/* Cyber Security */}
        <ServiceItem
          imageSrc={cyberSecurityImage}
          altText="Cyber Security"
          title="Cyber Security"
          items={['Risk Management', 'Defensive Security']}
        />

        {/* Managed Services */}
        <ServiceItem
          imageSrc={managedServicesImage}
          altText="Managed Services"
          title="Managed Services"
          items={['Bau Ticket Handling', 'Software Development Services','Health Checks','OS Patching','Web Application Maintainance']}
        />

        {/* Cloud Solutions */}
        <ServiceItem
          imageSrc={cloudSolutionsImage}
          altText="Cloud Solutions"
          title="Cloud Solutions"
          items={['Power Platfrom', 'Dynamics 365']}
        />

      </div>
    </div>
  );
}

export default Services;
