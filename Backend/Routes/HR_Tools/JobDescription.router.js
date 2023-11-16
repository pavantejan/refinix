// Import the Router from Express to create a router instance
const { Router } = require('express');
const { job_description_controller } = require('../../Controller/HR_Tools/JobDescription.controller');


// Create a router instance for handling code conversion routes
const job_description_router = Router();

// Define a route for code conversion that accepts source and target languages as parameters
job_description_router.route("/").post(job_description_controller);

// Export the code_conversion_router for use in your application
module.exports = job_description_router;  