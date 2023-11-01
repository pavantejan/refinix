// Import the Router from Express to create a router instance
const { Router } = require('express');

// Import the controller function for code conversion
const { convert_code } = require('../Controller/CodeConversion.controller');

// Create a router instance for handling code conversion routes
const code_conversion_router = Router();

// Define a route for code conversion that accepts source and target languages as parameters
code_conversion_router.route("/convert-code").post(convert_code);

// Export the code_conversion_router for use in your application
module.exports = code_conversion_router;      