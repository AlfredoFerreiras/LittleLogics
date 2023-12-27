import React, { useState } from "react";

const ScienceQuestion = ({ questions, topic }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (choice) => {
    if (choice === questions[currentQuestion].answer) {
      setFeedback("Correct! Well done!");
    } else {
      setFeedback("Oops! Try again!");
    }
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setFeedback("");
  };

  return (
    <div className="science-component">
      <h2>{`${topic} Questions`}</h2>
      <div className="question">{questions[currentQuestion].question}</div>
      <div className="choices">
        {questions[currentQuestion].choices.map((choice, index) => (
          <button key={index} onClick={() => handleSubmit(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="feedback">{feedback}</div>
      <button onClick={handleNext}>Next Question</button>
    </div>
  );
};

export default ScienceQuestion;
