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

  function newBook(){
    $http.post('/books/new', {title: self.title, cover_url: self.cover_url || $scope.searchResults[$scope.selectedBook.index].cover, description: self.description || $scope.searchResults[$scope.selectedBook.index].description})
    .then(function(response){
      console.log(response)
    })
  }

  function getCovers(){
    $scope.searchResults.splice(0);
    splitTitle = self.title.split(' ').join('+')
    $http.get(`/books/new/${splitTitle}`)
    .then(function(response){
      var books = response.data.books
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
