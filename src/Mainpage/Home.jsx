import React from 'react';
import swiftservices from '../assets/image 1.png';
import './Home.css';
// Your component definition
function Home() {
  return (
    <div className='Page'>
      <div className='Text-Area'>
        <h1>SwiftSync Services </h1>
        <h2>Providing What You Need</h2>
        <p>SwiftSync Services offers a wide range of consulting servies with necessary tools and expertise to help grow your business. We partner with our clients from start to finish,focusing on  thier needs while producing new ideas, developing effective strategies and designing high quality and scalable solutions. Contact us to learn more.</p>
      </div>
      <img className='img' src={swiftservices} alt="home"  />
    </div>
  );
}

export default Home;
