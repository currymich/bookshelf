angular.module('bookshelf')
  .controller('ShelfController', ShelfController)
  .controller('BooksController', BooksController)

function ShelfController($http, $scope) {
  var self = this;
}

function BooksController($http, $scope) {
  var self = this;

  function newBook(){
    $http.post('/books', {title: self.title})
    .then(function(response){
      console.log(response)
    })
  }

  function getBook(){
    $http.get(`/books`)
    .then(function(response){
      console.log(response.data.books[0].volumeInfo.imageLinks.thumbnail)
    })
  }

  self.newBook = newBook;
  self.getBook = getBook;
}
