const Sequelize = require("sequelize");
const db = require("../db");

const Alphabet = db.define("alphabet", {
  letter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
