import React from "react";
import { Link } from "react-router-dom";

const GameSquare = ({ to, title }) => {
  return (
    <Link to={to} className="card">
      <div className="flex items-center justify-center h-full col-auto">
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default GameSquare;
