// Import the OpenAI configuration
const openaiconfig = require("../Config/open_ai");

// Define a service function for generate comments from source code 
const CommentComposerService = (source_language, code) => {
  return new Promise(async (resolve, reject) => {
    try {
      
      const prompt = `I have a piece of code written in ${source_language} that I'd like to generate comments for. 
      I'm using a tool called Comment Composer to streamline the process of creating comments for my source code.
      Here's the code I'd like to generate comments for:
      \`\`\`${source_language}
      ${code}
      \`\`\`
      Please generate comprehensive and customizable comments for this code to improve its documentation. The comments should describe the functionality, purpose, and any relevant details of the code. You can use natural language and be as descriptive as possible to make the documentation more informative.
      `;
      // Create a prompt for comments generation, including the source code and its language

      // Log the generated prompt for debugging
      console.log(prompt);
      // Use the OpenAI API to create a chat completion
      const chatcompletion = await openaiconfig.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      // Extract the result from the chat completion
      const result = chatcompletion.choices[0].message.content;
      resolve(result);
      // Log the result for debugging
      console.log(result);

      // Resolve the promise with the generated code with comments
    } catch (err) {
      // Handle errors and reject the promise
      console.error(err);
      reject(err);
    }
  });
};

module.exports = {
  CommentComposerService,
};
