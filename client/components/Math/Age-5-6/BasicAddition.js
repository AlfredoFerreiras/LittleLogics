import React, { useState, useEffect } from "react";
import { generateAdditionProblems } from "../Utilities/MathProblemsGenerator";
import { Button } from "react-bootstrap";
import { speak, getVoices } from "../Utilities/TextToSpeech";
import MathLesson from "../Common/MathLesson";
import Exercise from "../Common/Exercise";
import VoiceSelector from "../Utilities/VoiceSelector";

const BasicAddition = ({ onNextTopic }) => {
  const [problems, setProblems] = useState([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    // Fetch and set available voices for text-to-speech
    getVoices().then((voices) => {
      if (voices.length > 0) {
        setSelectedVoice(voices[1].name); // Set the default voice to the first one in the list
      }
    });

    // Generate new problems and shuffle them
    const newProblems = generateAdditionProblems(5, 10);
    setProblems(newProblems);

    // Load the current problem index from local storage if it exists
    const savedIndex = localStorage.getItem("currentProblemIndex");
    if (savedIndex) {
      setCurrentProblemIndex(JSON.parse(savedIndex));
    }
  }, []);

  useEffect(() => {
    // Save the current problem index to local storage
    localStorage.setItem(
      "currentProblemIndex",
      JSON.stringify(currentProblemIndex)
    );
  }, [currentProblemIndex]);

  const handleAnswerSubmit = (selectedAnswer) => {
    if (problems[currentProblemIndex].answer === selectedAnswer) {
      alert("Correct answer!");
      setCurrentProblemIndex(currentProblemIndex + 1);
    } else {
      alert("Oops! Try again.");
    }
  };

  const currentProblem = problems[currentProblemIndex];

  const handleNextTopic = () => {
    onNextTopic();
  };

  // Render the component only if there are problems loaded
  if (problems.length === 0) return null;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <MathLesson content={lessonContent.text} />
          <VoiceSelector
            onSelectVoice={(voice) => speak(lessonContent.text, voice)}
          />
          <Button onClick={() => speak(lessonContent.text, selectedVoice)}>
            Hear the Lesson
          </Button>
        </div>
        <div className="col-span-1">
          {currentProblemIndex < problems.length && (
            <Exercise
              problem={currentProblem.problem}
              options={currentProblem.options}
              onAnswerSubmit={handleAnswerSubmit}
            />
          )}
          {currentProblemIndex >= problems.length && (
            <div>
              <Button onClick={handleNextTopic}>Next Topic</Button>
              <Button onClick={() => setCurrentProblemIndex(0)}>
                More Questions
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const lessonContent = {
  title: "Adventure in Adding",
  text: "Welcome to the magical world of numbers! Today, we're going on an adventure to discover how numbers come together to make new ones. It's like a party where everyone joins in to have fun!",
};

export default BasicAddition;
