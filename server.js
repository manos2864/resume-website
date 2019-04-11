//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var indexLogic = "";

//Ejs engine
app.set('view engine', 'ejs');
//Body parser url encoded data
app.use(bodyParser.urlencoded({
  extended: true
}));
//Add static urls implementation
app.use(express.static("public"));

// Global Variables pass in every view
app.use(function(req, res, next) {
  res.locals = {
    name: "Emmanouil Tsikniadopoulos",
    timestamp: new Date().getFullYear()
  };
  next();
});

app.get("/", function(req, res) {
  indexLogic = require("./logic/indexLogic");
  indexLogic.setIndex(res);
});

app.get("/certifications", function(req, res) {
  indexLogic = require("./logic/certificationsLogic");
  indexLogic.setIndex(res);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server listen in 3000 port");
});
