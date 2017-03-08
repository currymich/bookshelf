angular.module('bookshelf')
  .controller('ShelfController', ShelfController)
  .controller('BooksController', BooksController)

function ShelfController($http, $scope) {
  var self = this;
}

function BooksController($http, $scope) {
  var self = this;
}
