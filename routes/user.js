// All Routes related to user 

// imports 
const express = require('express');
// Create a new router object
const router =  express.Router();


router.get('/', (req, res) => {
    res.send("Hey there, this route is working");
})

//  export router as a module
module.exports = router