import './AboutMeBtn.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import { useState } from 'react';


function AboutMeBtn() {

  const btnbox = document.getElementById("btnbox");
  const popup = document.getElementById("popup");
  const exit = document.getElementById("exit");

  
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
    {!isOpen && (
      <div id="btnbox" className="btnbox" onClick={openPopup}>
        <img src='/src/assets/7A6A1293.jpg' className='cirImg'/>
      </div>
    )}
    {isOpen && (
      <div className='popup' id='popup'>
        <h2>Contact Card</h2>
        <img src='/src/assets/7A6A1293.jpg' className='bigCircImg' onClick={closePopup}/>
        <h3>James (JB) Pryor</h3>
        <i className='fab fa-github'></i>
        <i className='fab fa-linkedin'></i>
        <i className='fab fa-instagram'></i>
        <p className='resume'><u>Resume</u></p>
        
      </div>
    )}
    
    </>
  )
}

export default AboutMeBtn