const router = require("express").Router();
const {
  models: { Science },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const science = await Science.findAll();
    res.json(science);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const science = await Science.findByPk(req.params.id);
    res.json(science);
  } catch (err) {
    next(err);
  }
});
