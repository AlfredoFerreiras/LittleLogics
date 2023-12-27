const router = require("express").Router();
const {
  models: { Math, User },
} = require("../db");

module.exports = router;

// Modify your existing GET route
router.get("/", async (req, res, next) => {
  try {
    const mathProblems = await Math.findAll();
    res.json(mathProblems);
  } catch (err) {
    next(err);
  }
});
router.get("/addition", (req, res, next) => {
  // Logic to fetch or generate addition problems
});

router.get("/:id", async (req, res, next) => {
  try {
    const math = await Math.findByPk(req.params.id);
    res.json(math);
  } catch (err) {
    next(err);
  }
});
