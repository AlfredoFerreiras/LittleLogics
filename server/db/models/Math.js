const Sequelize = require("sequelize");
const db = require("../db");

const Math = db.define("math", {
  problem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  difficulty: {
    type: Sequelize.ENUM("easy", "medium", "hard"),
    allowNull: false,
  },
});

module.exports = Math;
