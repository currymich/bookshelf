var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var app = express()

var booksController = require('./controllers/books.js')
var shelvesController = require('./controllers/shelves.js')

mongoose.connect('mongodb://localhost/bookshelf')

app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/books', booksController);
app.use('/shelves', shelvesController);

app.listen(3000, function(){
  console.log('Bookshelf listening on 3000')
})
