const express=require('express');
const handleCodeOptimizer = require('./../../Controller/Developer_Tools/CodeOptimizer.controller');

const code_optimizer_router=express.Router()

code_optimizer_router.route("/").post(handleCodeOptimizer);

module.exports=code_optimizer_router;