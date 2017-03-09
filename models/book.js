var Schema = require('../db/schema');
var mongoose = require('mongoose');

var BookModel = mongoose.model('Book', Schema.Book);

module.exports = {
  Book: BookModel
};
