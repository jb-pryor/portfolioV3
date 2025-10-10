import { useEffect, useState } from "react";
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
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

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
        <span onClick={() => handleScroll("about")}>About</span>
      </p>
    </div>
  );
}

export default Header;
