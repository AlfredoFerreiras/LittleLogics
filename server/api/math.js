const router = require("express").Router();
const {
  models: { Math },
} = require("../db");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const math = await Math.findAll();
    res.json(math);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const math = await Math.findByPk(req.params.id);
    res.json(math);
  } catch (err) {
    next(err);
  }
});
