// Common/MathLesson.js
import React from "react";
import { speak } from "../Utilities/TextToSpeech"; // Assuming this utility initiates text-to-speech

const MathLesson = ({ content }) => {
  return (
    <div className="math-lesson-container">
      <p className="lesson-content">{content}</p>
      <button className="listen-button" onClick={() => speak(content)}>
        Listen
      </button>
      {/* Include navigation or "Next" buttons if needed */}
    </div>
  );
};

export default MathLesson;
