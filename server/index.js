var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/helpers', function (req, res) {
  db.selectAllHelpers(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/seekers', function (req, res) {
  db.selectAllSeekers(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/helpers', urlencodedParser, function (req, res) {
  console.log('req.body: ',req.body.city);
  db.selectHelpers(req.body, function(err, data) {
    if(err) {
      console.log(req.query.id);
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(req.query.id);
    }
  });
});

app.post('/seekers', urlencodedParser, function (req, res) {
  console.log('req.body: ',req.body.city);
  db.selectSeekers(req.body, function(err, data) {
    if(err) {
      console.log(req.query.id);
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(req.query.id);
    }
  });
});

app.listen(8080, function() {
  console.log('listening on port 8080!');
});

console.log(db)