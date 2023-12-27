"use strict";

const {
  db,
  models: { User, Math, Science, Vocabulary, Quiz },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const [cody, murphy, alfredo] = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
    User.create({ username: "alfredo", password: "123" }),
  ]);

  const mathProblems = await Promise.all([
    Math.create({
      problem: "2 + 2",
      answer: 4,
      difficulty: "easy",
      userId: cody.id,
    }),
    Math.create({
      problem: "5 x 5",
      answer: 25,
      difficulty: "medium",
      userId: alfredo.id,
    }),
  ]);

  // Creating Science Questions
  const scienceQuestions = await Promise.all([
    Science.create({
      question: "What is the boiling point of water?",
      answer: "100°C",
      difficulty: "easy",
    }),
    Science.create({
      question: "What planet is known as the Red Planet?",
      answer: "Mars",
      difficulty: "medium",
    }),
  ]);

  // Creating Vocabulary Words
  const vocabularyWords = await Promise.all([
    Vocabulary.create({
      word: "Apple",
      definition: "A fruit that is round and typically red or green",
      difficulty: "easy",
    }),
    Vocabulary.create({
      word: "Volcano",
      definition: "A mountain with a crater which lava flows",
      difficulty: "medium",
    }),
    // More vocabulary words...
  ]);

  console.log(`seeded successfully`);
  return {
    users: {
      cody,
      murphy,
      alfredo,
    },
    mathProblems: {
      math1: mathProblems[0],
      math2: mathProblems[1],
    },
    scienceQuestions: {
      science1: scienceQuestions[0],
      science2: scienceQuestions[1],
    },
    vocabularyWords: {
      vocabulary1: vocabularyWords[0],
      vocabulary2: vocabularyWords[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
