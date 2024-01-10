const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint to synthesize speech
router.post("/synthesize", async (req, res, next) => {
  try {
    const { text } = req.body;
    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });

    console.log("Response:", req.body);

    const buffer = Buffer.from(await response.arrayBuffer());
    res.send(buffer); // You can also consider streaming the audio
  } catch (error) {
    console.error("Error in TTS endpoint:", error);
    next(error);
  }
});

module.exports = router;
