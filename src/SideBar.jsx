//imports
import './SideBar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function SideBar() {


  return (

    <>
      <div className="box">
        <div className='sec sec1'>
          <div className='borderDiv' id='home'></div>
          {/*<div className='circFlipImg'></div>*/}
          <h2 className='nameText'>I'm James Pryor or JB <span className='emoji-wave'>👋</span></h2>
          <div className='locateText'><h2><i className='fa-solid fa-location-dot'></i>San Diego, CA</h2></div>
          <h2 className='fullStack'>I am a <span className='colorText'>Software Engineer</span></h2>
        </div>
        <div className='borderDiv' id='about'></div>
        <div className='sec sec3'>
          <h2 className='secTitle'>About Me</h2>  
          <p>Software engineer that enjoys building fullstack applications in my freetime.</p>
          <p>Born in Northern California currently a student living in San Diego, I have always been a very competitve person and have always pushed myself to be the best</p>
          <p>Eager to dive even deeper into fullstack applications, ai, gameDev, web3 Dapps, and other aspects of the forever growing tech industry. My ability to learn quickly and easily adapt under any situations. </p>
        </div>
        <div className='borderDiv' id='projects'></div>
        <div className='sec sec2'>
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
                <p className='title'>GameTitle</p>
                <p className='projInfo'>Created a topdown level progression zombie game inspired by one of my favorite mobile games when I was a kid.</p>
                <div>
                  <ul className='tools'>
                    <li>Skills/Tools used: </li>
                    <li>Unity •</li>
                    <li>C# •</li>
                    <li>Krita</li>
                  </ul>
                </div>
              </div>
              <div className='rowR'>
                <img src='/src/assets/background.jpeg' className='projPic'/>
              </div>
            </div>
        </div>
        <div className='sec sec5'>
          <h3 className='secTitle'>Skills</h3>
          <div className='skills-container'>     
            <ul className='skills'>
              <li>JavaScript  <i className='fab fa-js'></i></li>
              <li>C#<i className='fab fa-house'></i></li>
              <li>Python<i className='fab fa-python'></i></li>
              <li>C++<i className='fab fa-house'></i></li>
              <li>Java<i className='fab fa-java'></i></li>
              <li>SQL<i className='fab fa-sql'></i></li>
            </ul>  
            <ul className='skills'>
              <li>Spring Boot<i className='fab fa-house'></i></li>
              <li>AWS<i className='fab fa-aws'></i></li>
              <li>Tailwind<i className='fab fa-tailwind'></i></li>
              <li>React<i className='fab fa-react'></i></li>
              <li>Node.js<i className='fab fa-node'></i></li>
              <li>Unity<i className='fab fa-unity'></i></li>
            </ul>  
          </div>
        </div>
        <div className='borderDiv' id='contact'></div>
        <div className='sec sec4'>
          <form action="" className="contact-left">
            <h2 className='secTitle'>Contact Me</h2>
            <div className='contactTitle'>
              <h3>Send me a message!</h3>
              <hr />
            </div>
            <input type='text' name='name' placeholder='Your Name' className='contact-inputs' id='nameInput' required/>
            <input type="email" name='email' placeholder='Your Email' className='contact-inputs' id='emailInput' required/>
            <textarea name="message" className='contact-inputs' placeholder='Your Message' id='messageInp' required></textarea>
            <button type='submit' className='contact-inputs'>Submit</button>
          </form>
          <div className="contact-right"></div>
        </div>
        {/*<div className='trademark'>© 2025 James Pryor. All rights reserved.</div>*/}
      </div>
    
    </>
  )
}

export default SideBar