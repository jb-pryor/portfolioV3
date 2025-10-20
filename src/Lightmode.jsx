//imports
import { useEffect, useState } from "react";
import "./Lightmode.css"

function Lightmode() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if(darkMode) {
      document.body.classList.add("dark-mode");
    }
    else {

      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <input type='checkbox' id='darkmode-toggle' checked={darkMode} onChange={() => setDarkMode(!darkMode)}></input>
      <label htmlFor="darkmode-toggle"></label>
    </>
  );
}

export default Lightmode;