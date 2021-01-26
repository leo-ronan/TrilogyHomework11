const path = require("path");
//var database = JSON.parse(fs.readFileSync("./db/db.json/"));

module.exports = function(page) {
    page.get("/", function(req, res) {        
        res.sendFile(path.join(__dirname, "/../public/index.html/"));
    });

    page.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html/"));
    })
}

