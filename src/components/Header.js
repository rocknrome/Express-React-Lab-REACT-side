import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../logo.svg";

function Header(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* Use the SVG logo */}
        <Link to="/" className="navbar-item">
          <img src={Logo} alt="Logo" style={{ maxHeight: '3rem' }} />
        </Link>

        <a role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" onClick={() => setIsActive(!isActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">HOME</Link>
          <Link to="/about" className="navbar-item">ABOUT</Link>
          <Link to="/projects" className="navbar-item">PROJECTS</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
