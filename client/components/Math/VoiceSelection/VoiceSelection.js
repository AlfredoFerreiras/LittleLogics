// VoiceSelection/VoiceSelection.js
import React, { useState, useEffect } from "react";

const VoiceSelection = ({ onSelectVoice }) => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    setVoices(speechSynthesis.getVoices()); // Gets available voices from the Web Speech API
  }, []);

  return (
    <select onChange={(e) => onSelectVoice(e.target.value)}>
      {voices.map((voice, index) => (
        <option key={index} value={voice.name}>
          {voice.name}
        </option>
      ))}
    </select>
  );
};

export default VoiceSelection;
