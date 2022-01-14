const express = require('express');
// This enables us to use the enviourment variables 
require('dotenv').config()
const mongoose = require('mongoose');

// Routes Import 
const userRoutes = require('./routes/user')

// apps
const app = express();

// database 
mongoose.connect(process.env.DATABASE, {
}).then(() => console.log('Database Connected'));



// Url Route Middleware
// prepend each route with /api
app.use("/api",userRoutes); 


//  module that loads environment variables from a .env file into process.env
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
