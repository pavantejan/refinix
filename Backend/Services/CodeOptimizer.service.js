const openaiconfig = require("../Config/open_ai");

const codeOptimizerService=async (code, source_language)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            const prompt=
            `
            this is my code written in " ${source_language} ":
            "
            ${code}
            "
            you have to optimize this code in the same language or framework in which it is written. 
            Also resolve if you find any vulnerabilities add best practices as well.

            `
            const chatcompletion=await openaiconfig.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
            })
            const result=chatcompletion.choices[0].message.content;
            resolve(result);


           
        }
        catch(err){
            reject(err);
        }
    })
}

module.exports=codeOptimizerService;