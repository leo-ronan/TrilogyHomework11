const fs = require("fs");
var database = JSON.parse(fs.readFileSync("./db/db.json/"));

module.exports = function(route) {
    route.get("/api/notes/", function(req, res) {
        res.json(database);
    });

    route.post("/api/notes/", function(req, res) {
        var note = req.body;
        var noteId = database.length;
        noteId = Number(noteId);

        note.id = noteId;
        database.push(note);

        fs.writeFileSync("./db/db.json/", JSON.stringify(database), function(error) {
            if (error) throw (error);
        });

        res.json(database);
    })

    route.post("/api/notes/:id/", function(req, res) {
        var position = Number(req.params.id);
        res.json(database[position])
    });

    route.delete("./api/notes/:id/", function(req, res) {
        var noteId = req.params.id;
        console.log("Note " + noteId + " deleted.");

        database = database.filter(thisNote => {
            return thisNote.id != noteId;
        });

        var fixId = 0;
        for (thisNote of database) {
            thisNote.id = fixId;
            JSON.stringify(thisNote.id);
            fixId++;
        }

        fs.writeFile("./db/db.json", JSON.stringify(database));
        res.json(database);
    });
}

