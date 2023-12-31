import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSciencePrompt } from "../../store/science";

const ScienceCategory = () => {
  const { subcategory } = useParams();
  const dispatch = useDispatch();
  const { prompts, isLoading, error } = useSelector((state) => state.science);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const promptData = prompts[subcategory];

  useEffect(() => {
    if (subcategory) {
      dispatch(fetchSciencePrompt(subcategory));
    }
  }, [dispatch, subcategory]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    // Here you might handle the answer, check if it's correct, etc.
    // This might involve another Redux action or just local state handling
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!promptData) return <div>No prompt found for this category.</div>;

  return (
    <div className="science-category">
      <h2>{subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</h2>
      <p>{promptData.prompt}</p>
      {promptData.options?.map((option, index) => (
        <button key={index} onClick={() => handleAnswerSelection(option)}>
          {option}
        </button>
      ))}
      {selectedAnswer && <div>Selected Answer: {selectedAnswer}</div>}
    </div>
  );
};

export default ScienceCategory;
