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
      console.log(response.data.book)
    })
  }

  function getBook(){
    $http.get(`/books`)
  }

  self.newBook = newBook;
  self.getBook = getBook;
}
