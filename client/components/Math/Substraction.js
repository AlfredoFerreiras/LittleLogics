import React, { useState } from "react";

const minus = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [problem, setProblem] = useState(generateSubtractionProblem());
  const [feedback, setFeedback] = useState("");

  function generateSubtractionProblem() {
    const num1 = Math.ceil(Math.random() * 20);
    const num2 = Math.ceil(Math.random() * 10);
    return {
      num1: Math.max(num1, num2),
      num2: Math.min(num1, num2),
      answer: num1 - num2,
    };
  }

  function handleSubmit() {
    if (parseInt(userAnswer, 10) === problem.answer) {
      setFeedback("Correct!");
      setProblem(generateSubtractionProblem());
    } else {
      setFeedback("Oops, try again!");
    }
    setUserAnswer("");
  }

  return (
    <div>
      <h2>Subtraction Practice</h2>
      <div>{`${problem.num1} - ${problem.num2} = `}</div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>{feedback}</div>
    </div>
  );
};

export default minus;
