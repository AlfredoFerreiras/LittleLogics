import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/auth";

const NestedDropdownMenu = ({ title, items }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [subMenuVisibility, setSubMenuVisibility] = useState({});

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Toggle submenu visibility
  const toggleSubMenu = (index) => {
    setSubMenuVisibility((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        {title}
      </button>
      <div className={`dropdown-content ${isDropdownVisible ? "show" : ""}`}>
        {items?.map((item, index) => {
          if (item.items && item.items.length) {
            // Render a nested dropdown menu
            return (
              <div key={index} className="dropdown-submenu">
                <button
                  className="dropbtn"
                  onClick={() => toggleSubMenu(index)}>
                  {item.label}
                </button>
                <div
                  className={`dropdown-content ${
                    subMenuVisibility[index] ? "show" : ""
                  }`}>
                  {item.items.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      activeClassName="active-dropdown-item">
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          } else {
            // Render a regular dropdown item
            return (
              <NavLink
                key={index}
                to={item.path}
                activeClassName="active-dropdown-item">
                {item.label}
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};
const Navbar = ({ handleClick, isLoggedIn }) => {
  // Define the dropdown items for Math and Science
  const scienceItems = [
    {
      label: "Basic",
      items: [
        {
          label: "Human Body Basics",
          path: "/science/age-5-6/human-body-basics",
        },
        { label: "Plants & Animals", path: "/science/age-5-6/plants-animals" },
        { label: "Weather", path: "/science/age-5-6/weather" },
      ],
    },
    {
      label: "Intermediate",
      items: [
        { label: "Earth Science", path: "/science/age-7-8/earth-science" },
        { label: "Life Cycles", path: "/science/age-7-8/life-cycles" },
        { label: "Simple Geology", path: "/science/age-7-8/simple-geology" },
      ],
    },
    {
      label: "Advanced",
      items: [
        {
          label: "Earth Sciences Advanced",
          path: "/science/age-9/earth-sciences-advanced",
        },
        { label: "Physics Basics", path: "/science/age-9/physics-basics" },
        {
          label: "Scientific Method",
          path: "/science/age-9/scientific-method",
        },
      ],
    },
  ];
  const mathItems = [
    {
      label: "Basic",
      items: [
        { label: "Counting", path: "/math/age-5-6/counting" },
        { label: "Basic Addition", path: "/math/age-5-6/basic-addition" },
        { label: "Basic Subtraction", path: "/math/age-5-6/basic-subtraction" },
        { label: "Shapes", path: "/math/age-5-6/shapes" },
      ],
    },
    {
      label: "Intermediate",
      items: [
        { label: "Advanced Addition", path: "/math/age-7-8/advanced-addition" },
        {
          label: "Advanced Subtraction",
          path: "/math/age-7-8/advanced-subtraction",
        },
        { label: "Multiplication", path: "/math/age-7-8/multiplication" },
        { label: "Division", path: "/math/age-7-8/division" },
      ],
    },
    {
      label: "Advanced",
      items: [
        {
          label: "Advanced Multiplication",
          path: "/math/age-9/advanced-multiplication",
        },
        { label: "Advanced Division", path: "/math/age-9/advanced-division" },
        { label: "Fractions", path: "/math/age-9/fractions" },
      ],
    },
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
        <NestedDropdownMenu title="Math" items={mathItems} />
        <NestedDropdownMenu title="Science" items={scienceItems} />
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
