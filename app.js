const path = require('path');
const mustacheExpress = require('mustache-express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//important shit is below this line

let apiURL = "";

app.get("/", function (req, res) {
  res.render('index', { apiURL: apiURL });
});

app.post("/apiURL", function (req, res) {
  // console.log(req.body.apiURL);
  apiURL = req.body.apiURL;
  console.log(apiURL);
  res.redirect('/');
});

app.post("/resetAPI", function(req, res) {
  console.log("Resetting API");
  apiURL = "";
  res.redirect('/');
});

app.listen(3000, () => console.log('SHOW ME WHAT YOU GOT'));
