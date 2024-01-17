import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateAdditionProblems } from "../Utilities/MathProblemsGenerator";
import NextTopic from "./NextTopic";
import Exercise from "../Common/Exercise";
import VoiceSelector from "../Utilities/VoiceSelector";
import { fetchTTS } from "../../../store/tts";
import { Button } from "react-bootstrap";
import Navbar from "../../Navbar";
import MathLesson from "../Common/MathLesson";

const BasicAddition = () => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const dispatch = useDispatch();
  const audioUrl = useSelector((state) => state.tts.audioUrl);
  const audioRef = useRef(new Audio());

  const problems = useMemo(() => generateAdditionProblems(5, 10), []);

  const handleAnswerSubmit = useCallback(
    (selectedAnswer) => {
      if (problems[currentProblemIndex].answer === selectedAnswer) {
        setFeedbackMessage("Yay! You Got it!");
        setCurrentProblemIndex(
          (prevIndex) => (prevIndex + 1) % problems.length
        );
      } else {
        setFeedbackMessage("Oops! Try again");
      }
    },
    [currentProblemIndex, problems]
  );

  const handleHearLesson = useCallback(() => {
    dispatch(fetchTTS(lessonContent.text, selectedVoice));
  }, [dispatch, lessonContent.text, selectedVoice]);

  const handleMoreQuestions = useCallback(() => {
    setCurrentProblemIndex(Math.floor(Math.random() * problems.length));
  }, [problems]);

  useEffect(() => {
    localStorage.setItem(
      "currentProblemIndex",
      JSON.stringify(currentProblemIndex)
    );
  }, [currentProblemIndex]);

  const currentProblem = problems[currentProblemIndex];
  if (problems.length === 0) return null;

  return (
    <div>
      <Navbar />
      <div className="basic-addition-container">
        <div className="math-lesson-container">
          <h2 className="lesson-title">{lessonContent.title}</h2>
          <MathLesson content={lessonContent.text} />
        </div>

        <div className="exercise-section">
          <Exercise
            problem={currentProblem.problem}
            options={currentProblem.options}
            onAnswerSubmit={handleAnswerSubmit}
          />
          <div className="feedback-message">{feedbackMessage}</div>
          <Button className="option-button" onClick={handleMoreQuestions}>
            More Questions
          </Button>
          <NextTopic />
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
