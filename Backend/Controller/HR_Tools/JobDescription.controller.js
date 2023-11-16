const { job_description_service } = require("../../Services/HR_Tools/JobDescription.service");


const job_description_controller=async (req,res)=>{
    try {
        // Get the body from the request

        job_description_service(req.body)
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
}

module.exports={
    job_description_controller
}
