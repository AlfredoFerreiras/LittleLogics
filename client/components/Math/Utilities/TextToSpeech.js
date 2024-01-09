import axios from "axios";

// Replace with the endpoint provided by ElevenLabs for fetching voices
const ELEVENLABS_VOICES_ENDPOINT = "https://api.elevenlabs.io/voice";
// Replace with the endpoint provided by ElevenLabs for synthesizing speech
const ELEVENLABS_SYNTHESIZE_ENDPOINT = "https://api.elevenlabs.io/synthesize";

export const getVoices = async () => {
  try {
    const response = await axios.get(ELEVENLABS_VOICES_ENDPOINT);
    return response.data.voices;
  } catch (error) {
    console.error("Error fetching voices from ElevenLabs:", error);
    throw error;
  }
};

// Function to create a new utterance with the selected voice.
export const speak = async (text, voiceId) => {
  try {
    const response = await axios.post(ELEVENLABS_SYNTHESIZE_ENDPOINT, {
      text,
      voiceId,
    });
    // Handle the response, e.g., by playing the audio URL if provided
    const audioUrl = response.data.audioUrl;
    new Audio(audioUrl).play();
  } catch (error) {
    console.error("Error synthesizing speech with ElevenLabs:", error);
    throw error;
  }
};

// Function to set the chosen voice for the utterance.
export const setVoice = (voiceName) => {
  return getVoices().then((voices) => {
    return voices.find((voice) => voice.name === voiceName);
  });
};
