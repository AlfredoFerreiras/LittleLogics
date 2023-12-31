const router = require("express").Router();
const { generatePrompt } = require("../services/openAiService");

const scienceSubcategories = ["biology", "chemistry", "physics", "astronomy"];

router.get("/:subcategory", async (req, res, next) => {
  const subcategory = req.params.subcategory;
  if (!scienceSubcategories.includes(subcategory)) {
    return res.status(400).send("Invalid math subcategory");
  }

  try {
    const promptData = await generatePrompt("science", subcategory);
    res.json(promptData); // Send the structured data
  } catch (err) {
    next(err);
  }
});

router.post("/:subcategory/answer", async (req, res, next) => {
  const { userAnswer, questionData } = req.body;

  try {
    if (userAnswer === questionData.correctAnswer) {
      res.json({ correct: true, message: "Correct!" });
    } else {
      res.json({ correct: false, message: "Incorrect, try again!" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
