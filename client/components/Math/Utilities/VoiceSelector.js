import React, { useState, useEffect } from "react";
import { getVoices, speak, setVoice } from "./TextToSpeech";

const VoiceSelector = ({ onSelectVoice }) => {
  const [voiceList, setVoiceList] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState("");
  useEffect(() => {
    getVoices().then((voices) => {
      setVoiceList(voices);
      if (voices.length > 0) {
        setSelectedVoiceId(voices[0].id);
        onSelectVoice(voices[0].id);
      }
    });
  }, []);

  const handleVoiceChange = (event) => {
    const voiceId = event.target.value;
    setSelectedVoiceId(voiceId);

    onSelectVoice(voiceId);
  };

  return (
    <select value={selectedVoiceId} onChange={handleVoiceChange}>
      {voiceList.map((voice) => (
        <option key={voice.id} value={voice.id}>
          {voice.name}
        </option>
      ))}
    </select>
  );
};

export default VoiceSelector;
