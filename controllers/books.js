var express = require('express');
var router = express.Router();
var request = require('request');
var Book = require('../models/book.js');


//Get a book from api
router.get('/', function(req, res){
  //https://www.npmjs.com/package/request
  request.get({url: `https://www.googleapis.com/books/v1/volumes?q=title:harry+potter+half+blood+prince`, json:true}, function (error, response, body) {
    if(error) console.log(error);
    res.json({books: body.items})
  });
})


// //Create a new book
// router.post('/books', function(req, res){
//   //https://www.npmjs.com/package/request
//   request(`https://www.googleapis.com/books/v1/volumes?q=title:harry+potter+half+blood+prince`, function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   });
//
//   var book = new Book({
//     title: idk,
//     cover_url: idk,
//     buy_url: idk
//   })
//
//   product.save(function(err, product){
//     if(err) console.log(err);
//
//     console.log('New book created in book post route: ', book);
//     res.json({book: book});
//   })
// })

module.exports = router;
