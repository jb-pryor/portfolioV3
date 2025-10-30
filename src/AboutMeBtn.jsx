import './AboutMeBtn.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import { useState } from 'react';


function AboutMeBtn() {

  const btnbox = document.getElementById("btnbox");
  const popup = document.getElementById("popup");
  const exit = document.getElementById("exit");

  
  const [isOpen, setIsOpen] = useState(true);

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
        {/*<button onClick={closePopup}>X</button>*/}
        {/*<h2>Contact Card</h2>*/}
        <img src='/src/assets/7A6A1293.jpg' className='bigCircImg'/>
        <h3>James (JB) Pryor</h3>
        {/*<h4><i className='fa-solid fa-location-dot'></i>San Diego, CA</h4>*/}
        <div className='icons'>
          <a href="https://github.com/jb-pryor" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i>GitHub</a>
          <a href='https://www.linkedin.com/in/james-pryor-571b3a2ab/' target='_blank' rel="noopener noreferrer" id='github-text'><i className='fab fa-linkedin'></i>LinkedIn</a>
          <a className='resume' href="/RoughResume.pdf" target="_blank" rel="noopener noreferrer"><i className='fab fa-download'></i>Resume</a>
          {/*<a href='https://instagram.com/jb_pryor_' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>*/}
        </div>
        
      </div>

    )}
    
    </>
  )
}

export default AboutMeBtn