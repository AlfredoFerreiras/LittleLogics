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
          <GameSquare to="/numbers" title="Math" />
          <GameSquare to="/colors" title="Science" />
          <GameSquare to="/shapes" title="Vocabulary" />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  username: state.auth.username,
});

export default connect(mapState)(Home);
