import Home from './Home';
import Services from './Services';
import Contact from './Contact';





function Mainpage() {

  return (
    <>
      <div id='home'>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Home/>
      </div>
      <Services/>
      
      <div id='contact'>
      <Contact/>
      </div>
    </>
  );
}

export default Mainpage;
