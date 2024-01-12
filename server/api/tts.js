// api.js
const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

// Import the main function from tts.js
const { main } = require("../services/tts.js");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/voices", async (req, res, next) => {
  try {
    // Make a request to the OpenAI API to list voices
    const voices = await openai.voice.list();
    console.log(voices);

    // Send the list of voices as a JSON response
    res.json(voices);
  } catch (error) {
    console.error("Error in GET /voices endpoint:", error);
    next(error);
  }
});

// Endpoint to synthesize speech
router.post("/synthesize", async (req, res, next) => {
  try {
    const { text } = req.body;

    // Generate speech using the main function
    await main(); // Call the main function from tts.js

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    res.send(buffer); // You can also consider streaming the audio
  } catch (error) {
    console.error("Error in TTS endpoint:", error);
    next(error);
  }
});

module.exports = router;
