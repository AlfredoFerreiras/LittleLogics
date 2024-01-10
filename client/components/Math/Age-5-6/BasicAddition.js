import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateAdditionProblems } from "../Utilities/MathProblemsGenerator";
import NextTopic from "./NextTopic";
import Exercise from "../Common/Exercise";
import VoiceSelector from "../Utilities/VoiceSelector";
import { fetchTTS } from "../../../store/tts";
import { Button } from "react-bootstrap";
import Navbar from "../../Navbar";

const BasicAddition = () => {
  const [problems, setProblems] = useState([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState("");

  const dispatch = useDispatch();
  const audioUrl = useSelector((state) => state.tts.audioUrl);

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch((e) => console.error("Error playing audio:", e));
    }
  }, [audioUrl]);

  useEffect(() => {
    const voices = [
      { id: "voice1", name: "Voice 1" },
      { id: "voice2", name: "Voice 2" },
      // Add more voices as needed
    ];
    if (voices.length > 0) {
      setSelectedVoice(voices[0].id);
    }

    const newProblems = generateAdditionProblems(5, 10);
    setProblems(newProblems);

    const savedIndex = localStorage.getItem("currentProblemIndex");
    if (savedIndex) {
      setCurrentProblemIndex(JSON.parse(savedIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "currentProblemIndex",
      JSON.stringify(currentProblemIndex)
    );
  }, [currentProblemIndex]);

  useEffect(() => {
    const newProblems = generateAdditionProblems(5, 10);
    setProblems(newProblems);
  }, []);

  const handleAnswerSubmit = (selectedAnswer) => {
    if (problems[currentProblemIndex].answer === selectedAnswer) {
      alert("Correct answer!");
      setCurrentProblemIndex((prevIndex) => (prevIndex + 1) % problems.length);
    } else {
      alert("Oops! Try again.");
    }
  };
  const handleHearLesson = () => {
    dispatch(fetchTTS(lessonContent.text, selectedVoice));
  };

  const handleMoreQuestions = () => {
    setCurrentProblemIndex(Math.floor(Math.random() * problems.length));
  };

  const currentProblem = problems[currentProblemIndex];

  if (problems.length === 0) return null;

  return (
    <div>
      <Navbar />
      <div className="basic-addition-container">
        <div className="lesson-title">{lessonContent.title}</div>
        <div className="lesson-content">{lessonContent.text}</div>
        <VoiceSelector onSelectVoice={setSelectedVoice} />
        <button className="cta-button" onClick={handleHearLesson}>
          Hear the Lesson
        </button>
        <div className="exercise-section">
          <Exercise
            problem={currentProblem.problem}
            options={currentProblem.options}
            onAnswerSubmit={handleAnswerSubmit}
          />

          {/* Next Topic section */}
          <div className="next-topic-section">
            <NextTopic />
            <Button
              variant="warning"
              className="mt-2"
              onClick={handleMoreQuestions}>
              More Questions
            </Button>
          </div>
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
