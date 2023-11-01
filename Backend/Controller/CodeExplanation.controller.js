const { getCodeExplanation } = require('../Services/CodeExplanation.service');

const getExplanation = async (req, res) => {
    try {
        const {code,source_language} = req.body;
        console.log(code);
        getCodeExplanation(code,source_language)
            .then((data)=>{
                console.log(data);
                res.send(data);
            })
            .catch((err) => {
                res.send({
                    output: "No Output"
                });
            })

        
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'An error occurred while fetching the code explanation.' });
    }
};


module.exports = {
    getExplanation,
};
