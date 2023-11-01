
const { OPENAI_API_KEY } = require("../Constant");
const codeOptimizerService = require("../Services/CodeOptimizer.service");
const axios = require('axios');
const handleCodeOptimizer = async (req, res) => {
    try {
        const {code,source_language} = req.body;
        codeOptimizerService(code, source_language)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                console.log(err);
                res.send({
                    output: "No Output"
                })
            })
    }
    catch (err) {
        res.send({
            message: '' + err
        })
    }
}

module.exports = handleCodeOptimizer