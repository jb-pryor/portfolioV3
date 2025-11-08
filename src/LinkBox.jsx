import "./LinkBox.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function LinkBox() {


  return (
    <>
      <div className="linkBox">
        <div className='circFlipImg'></div>
        <ul>
          <li><i className="fab fa-github"></i>GITHUB</li>
          <li><i className="fab fa-linkedin"></i>LINKEDIN</li>
          <li><i className="fab fa-download"></i>RESUME</li>
        </ul>
      </div>
    </>
  );
}

export default LinkBox;