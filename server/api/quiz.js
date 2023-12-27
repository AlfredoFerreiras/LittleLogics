const router = require("express").Router();
const {
  models: { Quiz, Math },
} = require("../db");

// Fetch all quizzes
router.get("/math", async (req, res, next) => {
  try {
    const mathQuizzes = await Quiz.findAll({
      where: { MathId: req.params.mathId },
      // include other relevant details
    });
    res.json(mathQuizzes);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
