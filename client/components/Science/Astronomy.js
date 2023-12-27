import React, { useState } from "react";
import ScienceQuestion from "./ScienceQuestion"; // A component to render the question and choices

const astronomyQuestions = [
  {
    question: "What is the largest planet in our Solar System?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  // ... additional questions
];

const Astronomy = () => {
  return <ScienceQuestion questions={astronomyQuestions} topic="Astronomy" />;
};

export default Astronomy;
