import React from "react";
import { connect } from "react-redux";
import GameSquare from "./GameSquare";

export const Home = ({ username }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";
  };

  return (
    <div className="home text-center font-sans m-5">
      <h3 className="greeting text-blue-500 text-4xl mt-2.5">
        {getGreeting()}, {username}!
      </h3>

      <div className="games flex flex-col items-center gap-4 mt-7.5">
        <GameSquare to="/numbers" title="Learn Numbers" />
        <GameSquare to="/colors" title="Explore Colors" />
        <GameSquare to="/shapes" title="Shape Adventures" />
      </div>
    </div>
  );
};

const mapState = (state) => ({
  username: state.auth.username,
});

export default connect(mapState)(Home);
