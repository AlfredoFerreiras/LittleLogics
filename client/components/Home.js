import React from "react";
import { connect } from "react-redux";
import GameSquare from "./GameSquare";
import Navbar from "./Navbar";

export const Home = ({ username }) => {
  return (
    <div id="app">
      <Navbar />
      <div className="content">
        <div className="games">
          <GameSquare to="/numbers" title="Learn Numbers" />
          <GameSquare to="/colors" title="Learn Colors" />
          <GameSquare to="/shapes" title="Learn Shapes" />
          <GameSquare to="/addition" title="Addition" />
          <GameSquare to="/subtraction" title="Subtraction" />
          <GameSquare to="/multiplication" title="Multiplication" />
          <GameSquare to="/division" title="Division" />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  username: state.auth.username,
});

export default connect(mapState)(Home);
