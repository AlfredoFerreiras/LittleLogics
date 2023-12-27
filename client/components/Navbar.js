import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import { connect } from "react-redux";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="sidebar">
    <div className="logo">
      <h1>LittleLogics</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>

        {/* Repeat for other links */}
      </ul>
    </nav>
    {isLoggedIn && (
      <div className="profile-section">
        <NavLink to="/profile" className="profile-link">
          Profile
        </NavLink>
        <NavLink to="/settings" className="settings-link">
          Settings
        </NavLink>
        <button onClick={handleClick} className="logout-button">
          Logout
        </button>
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
