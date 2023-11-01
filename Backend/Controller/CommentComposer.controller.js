const { CommentComposerService } = require("../Services/CommentComposer.service");

// Define a controller function to generate comments
const generateComments = async (req, res) => {
    try {
        const {source_language, code} = req.body;
       
        // Call the CommentComposerService to generate the code with comments based on the prompt
        CommentComposerService( source_language, code)
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
    generateComments
};


// file upload -> [comments generate(of), comment] ->send 