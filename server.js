//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Ejs engine
app.set('view engine', 'ejs');
//Body parser url encoded data
app.use(bodyParser.urlencoded({extended: true}));
//Add static urls implementation
app.use(express.static("public"));

app.get("/", function(req, res) {
  var personName = "Emmanouil Tsikniadopoulos";

  res.render('index', {personName: personName})
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server listen in 3000 port");
});
