//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Math = require("./models/Math");
const Science = require("./models/Science");
const Vocabulary = require("./models/Vocabulary");
const Quiz = require("./models/quiz");
//associations could go here!

User.hasMany(Math);
Math.belongsTo(User);

User.hasMany(Science);
Science.belongsTo(User);

User.hasMany(Vocabulary);
Vocabulary.belongsTo(User);

Math.hasMany(Quiz);
Quiz.belongsTo(Math);

Science.hasMany(Quiz);
Quiz.belongsTo(Science);

Vocabulary.hasMany(Quiz);
Quiz.belongsTo(Vocabulary);

module.exports = {
  db,
  models: {
    User,
    Math,
    Science,
    Vocabulary,
    Quiz,
  },
};
