const Sequelize = require("sequelize");
const db = require("../db");

const MathJungle = db.define("mathJungle", {
  level: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = MathJungle;
