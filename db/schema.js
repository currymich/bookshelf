var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var BookSchema = new Schema({
  title: String,
  cover_url: String,
  description: String
});

module.exports = {
  Book: BookSchema
}
