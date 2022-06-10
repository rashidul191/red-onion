import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item mx-4">
              <button>Sign up</button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
