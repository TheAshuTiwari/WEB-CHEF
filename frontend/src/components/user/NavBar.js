import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { useUserContext } from "../../context/UserProvider";

const Navbar = () => {

  const { loggedIn, setLoggedIn, logout } = useUserContext();

  const showLoggedIn = () => {
    if (!loggedIn) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/main/signin">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/main/signup">
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };

  const showLogout = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button className="btn btn-danger" aria-current="page" onClick={logout}>
            Logout
          </button>
        </li>
      );
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <NavLink className="navbar-brand my-auto" to="/main/home">
              <Logo title={'Web Chef'} />
            </NavLink>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signin">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/generatedesign">
                  Manage Mockups
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">

          </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {showLoggedIn()}
            {showLogout()}
          </ul>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
