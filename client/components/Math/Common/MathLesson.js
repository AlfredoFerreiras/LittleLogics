import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchTTS } from "../../../store/tts"; // Adjust the path as necessary

const MathLesson = ({ content }) => {
  const [voice, setVoice] = useState(""); // State to store the selected voice
  const [voices, setVoices] = useState([]); // State to store the list of available voices
  const dispatch = useDispatch();
  const { audioUrl, isLoading, error } = useSelector(
    (state) => state.tts.audioUrl
  );

  // In your MathLesson component
  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await axios.get("/api/tts/voices"); // Update the endpoint
        const fetchedVoices = response.data;
        setVoices(fetchedVoices);
        if (fetchedVoices.length > 0) {
          setVoice(fetchedVoices[0].id);
        }
      } catch (error) {
        console.error("Error fetching voices:", error);
      }
    };

    fetchVoices();
  }, []);

  const handleVoiceChange = (event) => {
    setVoice(event.target.value);
  };

  const handleListenClick = () => {
    dispatch(fetchTTS(content, voice));
  };

  return (
    <div className="math-lesson-container">
      <p className="lesson-content">{content}</p>
      <select
        className="voice-selector"
        onChange={handleVoiceChange}
        value={voice}>
        {voices?.map((v, index) => (
          <option key={index} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
      <button className="listen-button" onClick={handleListenClick}>
        Listen
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
  );
};

export default MathLesson;
