const Sequelize = require("sequelize");
const db = require("../db");

const Vocabulary = db.define("vocabulary", {
  word: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  definition: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  difficulty: {
    type: Sequelize.ENUM("easy", "medium", "hard"),
    allowNull: false,
  },
});

module.exports = Vocabulary;
