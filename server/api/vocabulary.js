const router = require("express").Router();
const {
  models: { Vocabulary },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const vocabulary = await Vocabulary.findAll();
    res.json(vocabulary);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const vocabulary = await Vocabulary.findByPk(req.params.id);
    res.json(vocabulary);
  } catch (err) {
    next(err);
  }
});
