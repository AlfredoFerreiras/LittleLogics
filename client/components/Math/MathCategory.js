import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMathPrompt } from "../../store/math";

const MathCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { prompts, isLoading, error } = useSelector((state) => state.math);
  const prompt = prompts[category];

  useEffect(() => {
    if (category) {
      dispatch(fetchMathPrompt(category));
    }
  }, [dispatch, category]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!prompt) return <div>No prompt found for this category.</div>;

  return (
    <div className="math-category">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <p>{prompt.question}</p>
      {prompt.choices && (
        <ol>
          {prompt.choices.map((choice, index) => (
            <li key={index}>{choice}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default MathCategory;
