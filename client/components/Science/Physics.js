import React from "react";
import ScienceQuestion from "./ScienceQuestion";

const physicsQuestions = [
  {
    question: "What force pulls objects toward the ground?",
    choices: ["Magnetism", "Gravity", "Friction", "Electricity"],
    answer: "Gravity",
  },
  {
    question: "What makes a sound louder?",
    choices: ["Softness", "Pitch", "Volume", "Echo"],
    answer: "Volume",
  },
  {
    question: "What do we use to measure how hot or cold something is?",
    choices: ["Ruler", "Thermometer", "Scale", "Stopwatch"],
    answer: "Thermometer",
  },
  {
    question: "What is it called when light bends as it passes through water?",
    choices: ["Reflection", "Refraction", "Direction", "Shining"],
    answer: "Refraction",
  },
  {
    question: "What force slows down a ball rolling on grass?",
    choices: ["Magnetism", "Gravity", "Friction", "Air resistance"],
    answer: "Friction",
  },
  {
    question:
      "What do we call the push or pull on an object that can make it move?",
    choices: ["Gravity", "Weight", "Force", "Motion"],
    answer: "Force",
  },
  {
    question: "Which of these is a source of light?",
    choices: ["Moon", "Star", "Mirror", "Window"],
    answer: "Star",
  },
  {
    question:
      "What is the force that keeps us on the ground and not floating into space?",
    choices: ["Magnetism", "Gravity", "Friction", "Air pressure"],
    answer: "Gravity",
  },
  {
    question: "What do you use to see things far away?",
    choices: ["Magnifying glass", "Microscope", "Telescope", "Glasses"],
    answer: "Telescope",
  },
  {
    question: "What happens when you rub your hands together quickly?",
    choices: [
      "They get cold",
      "They turn red",
      "They get warm",
      "They become sticky",
    ],
    answer: "They get warm",
  },
  {
    question: "If you throw a ball upwards, what will happen to it?",
    choices: [
      "It will float",
      "It will fly into space",
      "It will stay still",
      "It will come back down",
    ],
    answer: "It will come back down",
  },
];

const Physics = () => {
  return <ScienceQuestion questions={physicsQuestions} topic="Physics" />;
};

export default Physics;
