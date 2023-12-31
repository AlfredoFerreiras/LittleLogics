require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const parseResponse = (text) => {
  const lines = text.split("\n");
  const question = lines[0]?.trim();
  const options = lines.slice(1, 6).map((line) => line.trim());
  // Assuming the correct answer is always marked with a special character like '*'
  const correctIndex = options.findIndex((option) => option.endsWith("*"));

  if (correctIndex !== -1) {
    // Remove the marker from the correct answer
    options[correctIndex] = options[correctIndex].replace("*", "");
  }

  return {
    question,
    options,
    correctAnswer: options[correctIndex], // or correctIndex if you prefer the index
  };
};

const generatePrompt = async (category, subcategory) => {
  try {
    const systemMessage = {
      role: "system",
      content: `I am a helpful assistant, well-versed in ${subcategory} within ${category}. I am here to provide information and answer questions for kids aged 4-9.`,
    };

    const userMessage = {
      role: "user",
      content: `Can you provide a question about ${subcategory} suitable for a 4-9-year-old student?. Also please provide 4 different choices for the answer. Also provide with the answer after they select . Also please don't say anything after you created the question`,
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [userMessage, systemMessage],
    });

    // Check if the response is structured as expected
    console.log("Response:", response.choices[0]);

    // Extract and return the content of the AI's response
    const aiResponse = response.choices[0].message.content.trim();
    console.log("AI Response:", aiResponse);

    const { question, options, correctAnswer } = parseResponse(aiResponse);
    console.log("parsed response:", { question, options, correctAnswer });

    return { question, options, correctAnswer };
  } catch (error) {
    console.error("Error generating prompt:", error);
    throw error;
  }
};

module.exports = { generatePrompt };
