//imports
import './SideBar.css'

function SideBar() {


  return (

    <>
      <div className="box">
        <div className='sec1'>
          <div className='borderImg'></div>
          <h1>Hey there!</h1>
          <h2>I'm James Pryor or JB</h2>
          <h3>I'm a developer.</h3>
          <div className='borderImg'></div>
        </div>
        <div className='sec2'>
          <h2>A few things I've made</h2>
          <div className='row'>
            <div className='proj'>
              <p>Stock Tracker</p>
              <p>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <p><u>ThisWillBeALink.com</u></p>
            </div>
            <div className='proj'>
              <p>Stock Tracker</p>
              <p>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <p><u>ThisWillBeALink.com</u></p>
            </div>
          </div>
          <div className='row'>
            <div className='proj'>
              <p>Stock Tracker</p>
              <p>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <p><u>ThisWillBeALink.com</u></p>
            </div>
            <div className='proj'>
              <p>Stock Tracker</p>
              <p>Created a dashboard that allows user to input a stock's ticker and retrieves the stock's price, market cap, market index, industry, analyst rating...</p>
              <p><u>ThisWillBeALink.com</u></p>
            </div>
          </div>
        </div>
        <div className='spacing'></div>
        <div className='borderImg'></div>
        <div className='sec3'>
          <h2>About Me</h2>          
        </div>
      </div>
    
    </>
  )
}

export default SideBar