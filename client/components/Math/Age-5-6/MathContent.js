export const generateAdditionProblems = (count, maxNumber) => {
  const problems = [];
  const visualHints = ["🍎", "🚗", "⚽", "🎈"]; // Array of visual hints (emojis)

  for (let i = 0; i < count; i++) {
    const num1 = Math.floor(Math.random() * maxNumber) + 1; // Generates a random number between 1 and maxNumber
    const num2 = Math.floor(Math.random() * maxNumber) + 1; // Generates a random number between 1 and maxNumber
    const visualHint =
      visualHints[Math.floor(Math.random() * visualHints.length)]; // Randomly picks a visual hint

    problems.push({
      problem: `${num1} + ${num2}`,
      visualHint: `${visualHint.repeat(num1)} + ${visualHint.repeat(num2)}`,
      answer: num1 + num2,
    });
  }

  return problems;
};

export const generateSubtractionProblems = (count, maxNumber) => {
  const problems = [];
  const visualHints = ["🍎", "🚗", "⚽", "🎈"]; // Array of visual hints (emojis)

  for (let i = 0; i < count; i++) {
    const num1 = Math.floor(Math.random() * maxNumber) + 1; // Generates a random number between 1 and maxNumber
    const num2 = Math.floor(Math.random() * maxNumber) + 1; // Generates a random number between 1 and maxNumber
    const visualHint =
      visualHints[Math.floor(Math.random() * visualHints.length)]; // Randomly picks a visual hint

    problems.push({
      problem: `${num1} - ${num2}`,
      visualHint: `${visualHint.repeat(num1)} - ${visualHint.repeat(num2)}`,
      answer: num1 - num2,
    });
  }

  return problems;
};

export const generateCountingProblems = (count, maxNumber) => {
  const problems = [];
  const visualHints = ["🍎", "🚗", "⚽", "🎈"]; // Array of visual hints (emojis)

  for (let i = 0; i < count; i++) {
    const numberToCount = Math.floor(Math.random() * maxNumber) + 1;
    const visualHint =
      visualHints[Math.floor(Math.random() * visualHints.length)];

    problems.push({
      problem: `Count the number of ${visualHint}s`,
      visualHint: `${visualHint.repeat(numberToCount)}`,
      answer: numberToCount,
    });
  }

  return problems;
};

export const generateShapeProblems = (count) => {
  const problems = [];
  const shapes = [
    { name: "circle", emoji: "⭕" },
    { name: "square", emoji: "◼" },
    { name: "triangle", emoji: "🔺" },
    { name: "rectangle", emoji: "▬" },
  ];

  for (let i = 0; i < count; i++) {
    const randomShapeIndex = Math.floor(Math.random() * shapes.length);
    const shape = shapes[randomShapeIndex];

    problems.push({
      problem: `Find the ${shape.name}`,
      visualHint: shapes.map((s) => s.emoji).join(" "), // Display a sequence of shape emojis
      answer: shape.name,
    });
  }

  return problems;
};
