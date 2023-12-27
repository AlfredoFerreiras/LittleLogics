import React from "react";
import ScienceQuestion from "./ScienceQuestion";

const physicsQuestions = [
  {
    question: "What force pulls objects toward the ground?",
    choices: ["Magnetism", "Gravity", "Friction", "Electricity"],
    answer: "Gravity",
  },
  // ... additional questions
];

const Physics = () => {
  return <ScienceQuestion questions={physicsQuestions} topic="Physics" />;
};

export default Physics;
