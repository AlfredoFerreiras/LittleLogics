const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/vocabulary", require("./vocabulary"));
router.use("/math", require("./math"));
router.use("/science", require("./science"));
router.use("/tts", require("./tts"));
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
