// Require dependencies 
var path = require("path");

// Routing
module.exports = (app) => {

    // GET- return notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    
    // GET - return index.html file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
