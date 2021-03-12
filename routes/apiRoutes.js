// Require dependencies 
const fs = require("fs");

// Routing 
module.exports = (app) => {
    let currentNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
     // GET - return saved currentNotes in json format 
    app.get("/api/notes", (req, res) => {
        return res.json(currentNotes);
    });

    // POST - recieve new note & return new note
    app.post('/api/notes', (req, res) => {
        // Check for IDs first 
        let noteID;
        const id = noteID + 1;
        // Use if statement to look for ID 
        if (currentNotes.length) {
            noteID = Math.max(...(currentNotes.map(note => note.id)));
        } else {
            noteID = 0;
        }
        // Push ID and text to the body 
        let addedNote = req.body;
        currentNotes.push({ id, ...addedNote});
        res.json(currentNotes.slice(-1));

        updatedcurrentNotes();
        return console.log("New note has been added: "+ addedNote.title);
    });

    // * DELETE - remove object by matching ID
    app.delete('/api/notes/:id', (req, res) => {
        let currentNotesearch = currentNotes.find(({ id }) => id === JSON.parse(req.params.id));

        currentNotes.splice(currentNotes.indexOf(currentNotesearch), 1);
        updatedcurrentNotes();
        res.end("Note was deleted");
    });
    // Function to update json when there are changes to the db

    function updatedcurrentNotes() {
        fs.writeFile("db/db.json",JSON.stringify(currentNotes,'\t'),err => {
            if (err) throw err;
            return true;
        });
};

}