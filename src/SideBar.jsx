//imports
import './SideBar.css'

function SideBar() {


  return (

    <>
      <div className="box">
        <div className='sec1'>
          <div className='borderImg' id='home'></div>
          <h1>Hey there!</h1>
          <h2>I'm James Pryor or JB</h2>
          <h3>I'm a developer.</h3>
          <div className='borderImg' id='projects'></div>
        </div>
        <div className='sec2'>
          <h2>A few things I've made</h2>
          <div className='row'>
            <div className='proj'>
              <p className='title'>Stock Tracker</p>
              <p className='projInfo'>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <a href='stocktrakcer.com'>stockertrackerdfafndf.com</a>
            </div>
            <div className='proj'>
              <p className='title'>Stock Tracker</p>
              <p className='projInfo'>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <a href='stocktrakcer.com'>stockertrackerdfafndf.com</a>
            </div>
          </div>
          <div className='row'>
            <div className='proj'>
              <p className='title'>Stock Tracker</p>
              <p className='projInfo'>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <a href='stocktrakcer.com'>stockertrackerdfafndf.com</a>
            </div>
            <div className='proj'>
              <p className='title'>Stock Tracker</p>
              <p className='projInfo'>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <a href='stocktrakcer.com'>stockertrackerdfafndf.com</a>
            </div>
          </div>
        </div>
        <div className='spacing'></div>
        <div className='borderImg' id='about'></div>
        <div className='sec3'>
          <h2>About Me</h2>  
          <p> 21 year old software developer. Graduating with a bachelors of science in computer science: software engineering, i am passionate and enthusiastic to leave my mark on the technical world. 
            Worked with react to create websites, used figma to design webpages, use git for version control, vs code as primary ide, node.js and springboot, unity.
            Eager to dive into AI and machine learning, that is one of my highest items on my checklist, as well as developing/creating video games using unity or other game engines like unreal engine, using C# or C++, also fullstack engineering, creating the frontend and the backend to ship my own product. 
            That's why i got into compSci: to have the ability to create whatever I wanted. 
            Lot of us do not realize the powerful tool we have at our fingertips. Don't fear the man that wastes all his energy attacking you, fear the man that types a few lines on his computer attacking you"</p> 
          <h3>Skills</h3>     
          <p className='skills'>Java • JavaScript • Python • C++ • C#</p>  
          <p className='skills'>React • Figma • AWS • Spring Boot • Node.js • Unity</p>  
        </div>
        <div className='borderImg'></div>
        <div className='trademark'>© 2025 James Pryor. All rights reserved.</div>
      </div>
    
    </>
  )
}

export default SideBar