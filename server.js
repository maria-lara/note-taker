// Dependencies
const express = require("express");
const fs = require("fs");

// Create express app
const app = express();

// Set initial port
const PORT = process.env.PORT || 3000;

// Set the express app 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Access to public files 
app.use(express.static('public'));

// Require api and html route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Set up listener
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});