// BiologyQuestions.js
import React, { useState } from "react";
import axios from "axios";

const openaiKey = "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";

const BiologyQuestions = () => {
  const [question, setQuestion] = useState("");

  const fetchQuestion = async () => {
    const data = {
      message:
        "Create a multiple-choice question about plant biology with options and indicate the correct answer.",
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "gpt-3.5-turbo",
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        data,
        {
          headers: {
            Authorization: `Bearer${
              process.env.OPENAI_API_KEY ||
              "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"
            } `, // This is a more secure way to handle the API key.
          },
        }
      );

      setQuestion(response.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchQuestion}>Generate Question</button>
      <div>{question && <p>{question}</p>}</div>
    </div>
  );
};

export default BiologyQuestions;
