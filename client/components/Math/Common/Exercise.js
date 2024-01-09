// Common/Exercise.js
import React from "react";

const Exercise = ({ problem, options, onAnswerSubmit }) => {
  return (
    <div>
      <div>{problem}</div>
      {options?.map((option, index) => (
        <button key={index} onClick={() => onAnswerSubmit(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Exercise;
