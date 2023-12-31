import React from "react";
import ScienceQuestion from "./ScienceQuestion";

const chemistryQuestions = [
  {
    question: "Water is made up of which two elements?",
    choices: [
      "Oxygen and Hydrogen",
      "Oxygen and Nitrogen",
      "Hydrogen and Carbon",
      "Carbon and Nitrogen",
    ],
    answer: "Oxygen and Hydrogen",
  },
];

const Chemistry = () => {
  return <ScienceQuestion questions={chemistryQuestions} topic="Chemistry" />;
};

export default Chemistry;
