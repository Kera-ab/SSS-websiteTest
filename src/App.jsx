import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Header from './headerfooter/Header';
import Footer from './headerfooter/Footer';
import Aboutuspage from './Aboutuspage/AboutusPage';





function App() {

  useEffect(() => {
    document.title = "Swift-Sync";
  }, []);
  
    useEffect(() => {
      const favicon = document.querySelector('link[rel="icon"]');
      favicon.href = './assets/Swiftsynclogo.png';
    }, []);
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/aboutus" element={<Aboutuspage />} /> {/* Define route for AboutUs */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
