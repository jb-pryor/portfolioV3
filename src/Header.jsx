import { useEffect, useState, useRef } from "react";

import "./Header.css";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down → hide
      setShowHeader(false);
    } else {
      // Scrolling up → show
      setShowHeader(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`header ${showHeader ? "visible" : "hidden"}`}>
      <p className="nav-text">
        <span onClick={() => handleScroll("home")}>Home</span> •{" "}
        <span onClick={() => handleScroll("projects")}>Projects</span> •{" "}
        <span onClick={() => handleScroll("about")}>About</span> •{" "}
        <span onClick={() => handleScroll("contact")}>Contact</span>
      </p>
    </div>
  );
}

export default Header;
