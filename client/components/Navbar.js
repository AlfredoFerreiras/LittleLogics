import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store";

const DropdownMenu = ({ title, items }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <button className="dropbtn">{title}</button>
      <div className={`dropdown-content ${isHovering ? "show" : ""}`}>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            activeClassName="active-dropdown-item">
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const Navbar = ({ handleClick, isLoggedIn }) => {
  // Define the dropdown items for Math and Science
  const mathItems = [
    { label: "Addition", path: "/math/addition" },
    { label: "Subtraction", path: "/math/subtraction" },
    { label: "Multiplication", path: "/math/multiplication" },
    { label: "Division", path: "/math/division" },
  ];

  const scienceItems = [
    { label: "Astronomy", path: "/science/astronomy" },
    { label: "Biology", path: "/science/biology" },
    { label: "Chemistry", path: "/science/chemistry" },
    { label: "Physics", path: "/science/physics" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        <NavLink to="/" className="navbar-logo">
          LittleLogics
        </NavLink>
      </div>
      <nav className="navbar-nav">
        <NavLink to="/home" activeClassName="active-nav-link">
          Home
        </NavLink>
        <DropdownMenu title="Math" items={mathItems} />
        <DropdownMenu title="Science" items={scienceItems} />
        <NavLink to="/vocabulary" activeClassName="active-nav-link">
          Vocabulary
        </NavLink>
        {/* ... other nav links ... */}
      </nav>
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
