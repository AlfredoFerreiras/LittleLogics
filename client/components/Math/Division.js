import React, { useState } from "react";

const Division = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [problem, setProblem] = useState(generateDivisionProblem());
  const [feedback, setFeedback] = useState("");

  function generateDivisionProblem() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    const answer = num1 * num2;
    return { num1: answer, num2, answer: num1 };
  }

  function handleSubmit() {
    if (parseInt(userAnswer, 10) === problem.answer) {
      setFeedback("Correct!");
      setProblem(generateDivisionProblem());
    } else {
      setFeedback("Oops, try again!");
    }
    setUserAnswer("");
  }

  return (
    <div>
      <h2>Division Practice</h2>
      <div>{`${problem.num1} ÷ ${problem.num2} = `}</div>
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

export default Division;
