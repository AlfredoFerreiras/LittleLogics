// Common/Exercise.js
import React from "react";

const Exercise = ({ problem, options, onAnswerSubmit }) => {
  return (
    <div className="exercise-container">
      <div className="problem-statement">{problem}</div>
      {options?.map((option, index) => (
        <button
          key={index}
          className="option-button"
          onClick={() => onAnswerSubmit(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Exercise;
