const router = require("express").Router();
const { generatePrompt } = require("../services/openAiService.js");

const mathSubcategories = [
  "addition",
  "subtraction",
  "multiplication",
  "division",
];

router.get("/math/:subcategory", async (req, res, next) => {
  const subcategory = req.params.subcategory;

  if (!mathSubcategories.includes(subcategory)) {
    return res.status(400).send("Invalid math subcategory");
  }

  try {
    const prompt = await generatePrompt("math", subcategory);
    res.status(201).json(prompt);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
