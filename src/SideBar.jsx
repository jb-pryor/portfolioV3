//imports
import './SideBar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function SideBar() {


  return (

    <>
      <div className="box">
        <div className='sec1'>
          <div className='borderDiv' id='home'></div>
          <h1 className='jitter-text'>Hey there!</h1>
          <h2>I'm James Pryor or JB</h2>
          <h3>I'm a developer.</h3>
          <div className='borderDiv' id='projects'></div>
        </div>
        <div className='sec2'>
          <h2 className='secTitle'>A few things I've made:</h2>
            <div className='proj'>
              <div className='rowL'>
                <p className='title'>Ecommerce Website</p>
                <p className='projInfo'>Created an ecommerce website for a fruit shop, in order to broadcast my skills with...</p>
                <div>
                  <ul className='tools'>
                    <li>Skills/Tools used: </li>
                    <li>React •</li>
                    <li>Javascript •</li>
                    <li>Tailwind </li>
                  </ul>
                </div>
              </div>
              <div className='rowR'>
                <img src='/src/assets/background.jpeg' className='projPic'/>
              </div>
            </div>
            <div className='proj'>
              <div className='rowL'>
                <p className='title'>Stock Tracker</p>
                <p className='projInfo'>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
                <div>
                  <ul className='tools'>
                    <li>Skills/Tools used: </li>
                    <li>React •</li>
                    <li>Javascript •</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
              </div>
              <div className='rowR'>
                <img src='/src/assets/background.jpeg' className='projPic'/>
              </div>
            </div>
            <div className='proj'>
              <div className='rowL'>
                <p className='title'>Stock Tracker</p>
                <p className='projInfo'>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
                <div>
                  <ul className='tools'>
                    <li>Skills/Tools used: </li>
                    <li>React •</li>
                    <li>Javascript •</li>
                    <li>Tailwind </li>
                  </ul>
                </div>
              </div>
              <div className='rowR'>
                <img src='/src/assets/background.jpeg' className='projPic'/>
              </div>
            </div>
        </div>
        <div className='spacing'></div>
        <div className='borderDiv' id='about'></div>
        <div className='sec3'>
          <h2 className='secTitle'>About Me</h2>  
          <p>Junior Software Developer with a passion for building fullstack applications</p>
          <p>Born in Northern California currently living in San Diego, I have always been the most competitve person</p>
          <p>Eager to dive even deeper into fullstack applications, ai, gameDev, web3 Dapps, and other aspects of the forever growing tech industry<u>...read more about me</u></p>
          <h3 className='secTitle'>Skills</h3>
          <div className='skills-container'>     
            <ul className='skills'>
              <li>Java<i className='fab fa-java'></i></li>
              <li>• JavaScript<i className='fab fa-js'></i></li>
              <li>• Python<i className='fab fa-python'></i></li>
              <li>• C++<i className='fab fa-house'></i></li>
              <li>• C#<i className='fab fa-house'></i></li>
              <li>• SQL<i className='fab fa-sql'></i></li>
            </ul>  
            <ul className='skills'>
              <li>React<i className='fab fa-react'></i></li>
              <li>• Figma<i className='fab fa-figma'></i></li>
              <li>• AWS<i className='fab fa-aws'></i></li>
              <li>• Spring Boot<i className='fab fa-house'></i></li>
              <li>• Node.js<i className='fab fa-node'></i></li>
              <li>• Unity<i className='fab fa-unity'></i></li>
              <li>• Github<i className='fab fa-github'></i></li>
            </ul>  
          </div>
        </div>
        <div className='borderDiv' id='contact'></div>
        <div className='sec4'>
          <h2 className='secTitle'>Contact Me</h2>
        </div>
        <div className='trademark'>© 2025 James Pryor. All rights reserved.</div>
      </div>
    
    </>
  )
}

export default SideBar