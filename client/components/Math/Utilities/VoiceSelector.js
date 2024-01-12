import React, { useState, useEffect } from "react";
import axios from "axios";

const VoiceSelector = ({ onSelectVoice, initialVoice }) => {
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState(initialVoice || "");

  useEffect(() => {
    onSelectVoice(selectedVoiceId);
  }, [selectedVoiceId, onSelectVoice]);

  const handleVoiceChange = (event) => {
    setSelectedVoiceId(event.target.value);
  };

  return (
    <div>
      <label htmlFor="voice-selector">Choose a Voice:</label>
      <select
        id="voice-selector"
        value={selectedVoiceId}
        onChange={handleVoiceChange}>
        {voices.map((voice) => (
          <option key={voice.id} value={voice.id}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;
