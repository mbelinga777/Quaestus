var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var exerciseData = require('./exerciseData.json');
var fs = require('fs')
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({
  defaultLayout: "main"
}))

app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function(req, res,){
  res.status(200).render('./partials/home');
});

app.get('/aboutUs', function(req, res){
  res.status(200).render('./partials/aboutUs');
});

app.get('/LinkedIn', function(req, res){
  res.status(200).render('./partials/LinkedIn');
});

app.get('/diet', function(req, res)
{
    res.status(200).render('./partials/dietPage');
});

app.get('/exercise/:n', function (req, res, next) {
  var n = req.params.n.toLowerCase();
  if(exerciseData[n]){
    res.status(200).render('./partials/exercisePage', {
      exerciseData: [exerciseData[n]]
    });
  } else {
    next();
  }
});

app.get('/exercise', function(req, res){
  res.status(200).render('./partials/exercisePage', {
    exerciseData: exerciseData
  });
});

app.get("*", function (req, res) {
    res.status(404).render('./partials/404')
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});