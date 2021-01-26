const fs = require("fs");
const express = require("express");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function() {
console.log("Server listening on port " + PORT);
});
