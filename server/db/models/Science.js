const Sequelize = require("sequelize");
const db = require("../db");

const Science = db.define("science", {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  difficulty: {
    type: Sequelize.ENUM("easy", "medium", "hard"),
    allowNull: false,
  },
});

module.exports = Science;
