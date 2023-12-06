import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  // Function to get a personalized greeting based on the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="home-container">
      <h3>
        {getGreeting()}, {username}!
      </h3>
      <nav className="side-menu">
        <ul>
          <li>
            <Link to="/numbers">Learn Numbers</Link>
          </li>
          <li>
            <Link to="/colors">Explore Colors</Link>
          </li>
          <li>
            <Link to="/shapes">Shape Adventures</Link>
          </li>
          {/* Add more links to other components */}
        </ul>
      </nav>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
