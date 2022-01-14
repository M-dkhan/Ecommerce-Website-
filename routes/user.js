// All Routes related to user 

// imports 
const express = require('express');
// Create a new router object
const router =  express.Router();

//import user controllers 
const {sayHi} = require('../controllers/user');

router.get('/', sayHi);

//  export router as a module
module.exports = router