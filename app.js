const express = require('express');
// This enables us to use the enviourment variables 
require('dotenv').config()
const mongoose = require('mongoose');

// apps
const app = express();

// database 
mongoose.connect(process.env.DATABASE, {
}).then(() => console.log('Database Connected'));



// Url Route 
app.get('/', (req, res) =>{
    res.send("This site is working Updated once more");
})

//  module that loads environment variables from a .env file into process.env
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
