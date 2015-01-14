"use strict";

var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/'));
// just for test ajax
app.get('/', function(req, res){
  res.send('/index.html');
});

app.listen(3000);
