// server/api/tts.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_API_URL = "https://api.elevenlabs.io";

router.post("/synthesize", async (req, res, next) => {
  try {
    const { text, voiceId } = req.body;
    const response = await axios.post(
      `${ELEVENLABS_API_URL}/synthesize`,
      {
        text,
        voiceId,
      },
      {
        headers: {
          Authorization: `Bearer ${ELEVENLABS_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Respond with the URL to the audio file or the audio data itself
    res.json(response.data);
  } catch (error) {
    console.error("Error with ElevenLabs TTS:", error);
    next(error);
  }
});

module.exports = router;
