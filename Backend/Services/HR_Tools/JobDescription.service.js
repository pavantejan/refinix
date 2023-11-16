// Import the OpenAI configuration
const openaiconfig = require("./../../Config/open_ai");

// Define a service function for code conversion
const job_description_service = (input) => {

    return new Promise(async (resolve, reject) => {
        try {
            const {
                title, 
                department,
                about_company, 
                report, 
                duties, 
                responsibilites, 
                qualification,
                requirements,
                compensation,
                benefits
            } = input;
            // Read the content of the uploaded code file
            // let fileData = (code == undefined) ? code.data.toString('utf-8') : body;
    
            const prompt = `

            Write a job description for a 
            Job Title: ${title}
            Department: ${department}
            About Company: ${about_company}
            Reporting To: ${report}
            Duties: ${duties}
            Responsibilities: ${responsibilites}
            Qualification: ${qualification}
            Requirements: ${requirements}
            Compensation: ${compensation}
            Benefits: ${benefits}

            you have to write a good job description with the help of these input which are provided above
            and you want to add atleast 5 point in duties,responsibilites accordign to title and department
            

        `;
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
    job_description_service
};
