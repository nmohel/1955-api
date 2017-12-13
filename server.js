// requirements (like imports)
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 

//this is my app
var app = express();

// use body parser
app.use(bodyParser.json());

//require mongoose model config stuff
require('./server/config/mongoose.js');

// store function from routes module.exports in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
