var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var Book = require('../models/book.js');

//Get all saved books
router.get('/', function(req, res){
  Book.find({})
  .exec(function(err, books){
    if(err) console.log(err);
    res.json({books: books})
  })
})


//Get a book from api
router.get('/new/:title', function(req, res){
  var title = req.params.title
  // https://www.npmjs.com/package/request-promise
  var request = {
    uri: `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=5`,
    json: true
  }
  rp(request)
  .then(function (response) {
    res.json({books: response.items})
  })
  .catch(function(error){
    console.log(error);
  })
})


//Create a new book
router.post('/new', function(req, res){
  console.log(req.body)
  var book = new Book({
    title: req.body.title,
    cover_url: req.body.cover_url,
    description: req.body.description
  })

  book.save(function(err, book){
    if(err) console.log(err);

    console.log('New book created in book post route: ', book);
    res.json({book: book});
  })
})

module.exports = router;
