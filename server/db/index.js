//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Math = require("./models/Math");
const Science = require("./models/Science");
const Vocabulary = require("./models/Vocabulary");

//associations could go here!

User.hasMany(Math);
Math.belongsTo(User);

User.hasMany(Science);
Science.belongsTo(User);

User.hasMany(Vocabulary);
Vocabulary.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Math,
    Science,
    Vocabulary,
  },
};
