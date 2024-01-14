import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/auth";

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        <NavLink to="/" exact className="navbar-logo">
          LittleLogics
        </NavLink>
      </div>
      <nav className="navbar-nav">
        <NavLink to="/home" activeClassName="nav-link" className="nav-item">
          Home
        </NavLink>

        {/* Add more nav items if needed */}
      </nav>
      <div className="navbar-nav">
        <NavLink to="/courses" activeClassName="nav-link" className="nav-item">
          Courses
        </NavLink>
      </div>
      <div className="navbar-actions">
        {isLoggedIn ? (
          <>
            <NavLink
              to="/profile"
              activeClassName="active-nav-link"
              className="nav-link">
              Profile
            </NavLink>
            <button onClick={handleClick} className="logout-button nav-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              activeClassName="active-nav-link"
              className="login-link nav-link">
              Log In
            </NavLink>
            <NavLink
              to="/join"
              activeClassName="active-nav-link"
              className="join-button nav-link">
              Join
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
