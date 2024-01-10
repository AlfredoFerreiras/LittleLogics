import React, { useState } from "react";

const VoiceSelector = ({ onSelectVoice }) => {
  const voices = [
    { id: "alloy", name: "Alloy" },
    { id: "echo", name: "Echo" },
    { id: "fable", name: "Fable" },
    { id: "onyx", name: "Onyx" },
    { id: "nova", name: "Nova" },
    { id: "shimmer", name: "Shimmer" },
    // Include only the valid voices provided by OpenAI
  ];

  const [selectedVoiceId, setSelectedVoiceId] = useState(voices[0].id);

  const handleVoiceChange = (event) => {
    const voiceId = event.target.value;
    setSelectedVoiceId(voiceId);
    onSelectVoice(voiceId);
  };

  return (
    <select value={selectedVoiceId} onChange={handleVoiceChange}>
      {voices.map((voice) => (
        <option key={voice.id} value={voice.id}>
          {voice.name}
        </option>
      ))}
    </select>
  );
};

export default VoiceSelector;
