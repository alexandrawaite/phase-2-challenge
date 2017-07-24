// Define JSON file
var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("./clients.json");

// var contents = require("./clients.json")
// Define to JSON type
var jsonContent = JSON.parse(contents.toString());



 console.log("Rep Name:", jsonContent.rep_name);
