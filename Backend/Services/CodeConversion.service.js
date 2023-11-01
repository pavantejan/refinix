// Import the OpenAI configuration
const openaiconfig = require("../Config/open_ai");

// Define a service function for code conversion
const CodeConversionService = (from_language, to_language, code) => {

    return new Promise(async (resolve, reject) => {
        try {
            console.log(code);
            // Read the content of the uploaded code file
            // let fileData = (code == undefined) ? code.data.toString('utf-8') : body;
    
            const prompt = `
            Convert ${from_language} code to ${to_language} code while ensuring code readability.
            and use latest functuanality to built the code.

            when you converting the code so remember these things:
            -> use latest dependencies and libraries
            -> use proper indention or bracket
            -> use best practise
            -> use proper comments
            -> write proper documentation            
            
            "
            ${code}
            "
        `;;
            // Create a prompt for code conversion, including the source code and conversion languages

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

            // Resolve the promise with the converted code
            
            
        } catch (err) {
            // Handle errors and reject the promise
            console.error(err);
            reject(err);
        }
    });
};

module.exports = {
    CodeConversionService
};
