import React from "react";
import { Link } from "react-router-dom";
import Figure from "react-bootstrap/Figure";

const GameSquare = ({ to, title }) => {
  return (
    <Link
      to={to}
      className="game border-2 border-blue-500 rounded-lg p-4 w-80 h-40 flex flex-col items-center justify-center bg-blue-100 text-center my-2">
      <h4 className="title text-yellow-400 text-xl">{title}</h4>
    </Link>
  );
};

export default GameSquare;
