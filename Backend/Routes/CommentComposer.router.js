// Import the Router from Express to create a router instance
const { Router } = require('express');

// Import the controller function for Comment Generation
const { generateComments } = require('../Controller/CommentComposer.controller');

// Create a router instance for handling comment generation routes
const commentComposerRouter = Router();

// Define a route for comments generation that accepts source language as parameters
commentComposerRouter.route("/generate_comments").post(generateComments);

// Export the comment composer router for use in your application
module.exports = commentComposerRouter;