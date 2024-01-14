// Common/Exercise.js
import React from "react";

const Exercise = ({ problem, options, onAnswerSubmit }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default Exercise;
