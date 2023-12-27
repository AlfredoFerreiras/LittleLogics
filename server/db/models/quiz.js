const Sequelize = require("sequelize");
const db = require("../db");

const Quiz = db.define("quiz", {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.STRING), // Array of options
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING, // Correct answer
    allowNull: false,
  },
  explanation: {
    type: Sequelize.TEXT, // Explanation of the answer
    allowNull: true,
  },
});

module.exports = Quiz;
