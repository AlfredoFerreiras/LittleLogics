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
    type: Sequelize.ENUM("easy", "medium", "hard"), // This could be refactored into age groups if you prefer
    allowNull: false,
  },
  ageGroup: {
    type: Sequelize.ENUM("5-6", "7-8", "9"), // New field to categorize by age group
    allowNull: false,
  },
});

module.exports = Math;
