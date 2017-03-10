angular.module('bookshelf')
  .controller('ShelfController', ShelfController)
  .controller('BooksController', BooksController)

function ShelfController($http, $scope) {
  var self = this;

  function getBooks(){
    $http.get(`/shelves`)
    .then(function(response){
      self.allBooks = response.data.books
    })
  }
}

function BooksController($http, $scope) {
  var self = this;
  $scope.selectedBook = {'index': ''}
  $scope.searchResults = []

  function newBook(book_info){
    $http.post('/books', {title: self.title})
    .then(function(response){
      console.log(response)
    })
  }

  function getCovers(){
    splitTitle = self.title.split(' ').join('+')
    $http.get(`/books/new/${splitTitle}`)
    .then(function(response){
      var books = response.data.books
      self.searchResults = []
      books.forEach(function(book){
        $scope.searchResults.push({
          cover: book.volumeInfo.imageLinks.thumbnail,
          description: book.volumeInfo.description
        })
      })
    })
  }

  self.newBook = newBook;
  self.getCovers = getCovers;
}
