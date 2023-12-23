import { useRef } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav class="navbar" ref={navRef}>
        <a href="/" class="navbar-logo">
          all1();
        </a>
        <div class="navbar-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">My Skill</a>
          <a href="/service">Project</a>
          <a href="/contact">Contact</a>
          <a className="nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </a>
        </div>
        <div class="navbar-extra">
          <a href="/*" id="moon">
            <FaMoon />
          </a>
          <a className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
