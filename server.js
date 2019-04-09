//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/css/styles.css", function(req, res) {
  res.sendFile(__dirname + "/css/styles.css");
});

app.get("/js/utility.js", function(req, res) {
  res.sendFile(__dirname + "/js/utility.js");
});

app.get("/js/scrollspy.js", function(req, res) {
  res.sendFile(__dirname + "/js/scrollspy.js");
});

app.get("/assets/image-profile.png", function(req, res) {
  res.sendFile(__dirname + "/assets/image-profile.png");
});

app.get("/assets/trophy.png", function(req, res) {
  res.sendFile(__dirname + "/assets/trophy.png");
});

app.listen(3000, "192.168.1.14");
