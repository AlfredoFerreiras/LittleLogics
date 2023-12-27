import React, { useState } from "react";

const Addition = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [problem, setProblem] = useState(generateAdditionProblem());
  const [feedback, setFeedback] = useState("");

  function generateAdditionProblem() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    return { num1, num2, answer: num1 + num2 };
  }

  function handleSubmit() {
    if (parseInt(userAnswer, 10) === problem.answer) {
      setFeedback("Correct!");
      setProblem(generateAdditionProblem());
    } else {
      setFeedback("Oops, try again!");
    }
    setUserAnswer("");
  }

  return (
    <div className="math-component">
      <h2 className="component-title">Addition Practice</h2>
      <div className="component-content">
        <div>{`${problem.num1} + ${problem.num2} = `}</div>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <div className="feedback">{feedback}</div>
      </div>
    </div>
  );
};

export default Addition;
