const { CodeConversionService } = require("../Services/CodeConversion.service");

// Define a controller function to convert code
const convert_code = async (req, res) => {
    try {
        // Get the body from the request
        const {from_language, to_language, code} = req.body;
        console.log("hello");
        CodeConversionService(from_language, to_language,code)
            .then((data) => {
                console.log(data);
                res.send(data);
            })
            .catch((err) => {
                // Handle conversion errors
                res.send({
                    output: "No Output"
                });
            });

    } catch (err) {
        // Handle general errors
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    convert_code
};


// file upload -> [code convert(from,to), comment] ->send 