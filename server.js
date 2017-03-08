var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb://localhost/bookshelf')

app.use(express.static('public'));
app.use(logger('dev'));

app.listen(3000, function(){
  console.log('Bookshelf listening on 3000')
})
