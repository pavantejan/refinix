const openaiconfig = require("../Config/open_ai");

const getCodeExplanation = async (codefile,source_language) => {

    return new Promise(async (resolve, reject) => {
        try {

            const prompt = `
            This is a ${source_language} code,
            Please provide an explanation of the code, highlighting its key components, functionality, and any important algorithms or logic used. 
            Additionally, kindly explain the code line by line, including the purpose of each line, any variable definitions, conditional statements, and loops. 
            Additionally, please provide  explanations for better clarity.
            Your explanation is a comment in a full code like this

            ${codefile}
            `;

            const chatcompletion = await openaiconfig.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
            });
            const result = chatcompletion.choices[0].message.content;
            resolve(result);
        } catch (err) {
            console.error(err);
            reject(err);
        }
    })


};

module.exports = {
    getCodeExplanation,
};
