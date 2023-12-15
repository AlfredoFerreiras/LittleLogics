import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMathProblems } from "../store/math";

export const Math = () => {
  const dispatch = useDispatch();
  const mathProblems = useSelector((state) => {
    state.math;
  });

  useEffect(() => {
    dispatch(fetchMathProblems());
  }, [dispatch]);

  console.log(mathProblems?.problem);

  return (
    <div>
      <h1>Math</h1>
      <Link to="/home">
        <button> go home </button>
      </Link>
    </div>
  );
};

export default Math;
