import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="nav-bar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Mailos logo" />
          <span>Mailos</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="burger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;