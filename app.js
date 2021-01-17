// console.log("hello2");

// var http = require('http');

// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('hello 35');
//     response.end();
// }

// http.createServer(onRequest).listen(8000);

const a = 25;
let b = 26;
var c = 27;

const express = require('express');
let app = new express();

app.get("/", function(req, res) {
    res.send("hello from node elie")
});


app.get("/about", function(req, res) {
    res.send("hello from node about")
});

app.get("/contact", function(req, res) {
    res.send("hello from node contacts")
});

app.get("*", function(req, res) {
    res.send("anything")
});


let port = 8000;
app.listen(port, function() {
    console.log("Server started listening to port: " + port);
});

