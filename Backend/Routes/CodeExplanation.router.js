const express = require('express');
const router = express.Router();
const { getExplanation } = require('../Controller/CodeExplanation.controller');

// Define a route for code explanation
router.post('/', getExplanation);

module.exports = router;
