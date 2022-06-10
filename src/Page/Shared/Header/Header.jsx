import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);


  const handleSinOut = ()=>{
    signOut(auth)
  }

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

              {user ? (
                <li className="nav-item mx-4">
                  <button onClick={handleSinOut} className="btn btn-danger">Sign up</button>
                </li>
              ) : (
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
