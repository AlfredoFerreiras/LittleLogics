import React from "react";
import ScienceQuestion from "./ScienceQuestion";

const biologyQuestions = [
  {
    question: "What part of the plant makes food?",
    choices: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf",
  },
  // ... additional questions
];

const Biology = () => {
  return <ScienceQuestion questions={biologyQuestions} topic="Biology" />;
};

export default Biology;
