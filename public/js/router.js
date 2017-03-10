angular.module('bookshelf', ['ui.router'])
  .config(BookshelfRouter)

function BookshelfRouter($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('new', {
    url: '/books/new',
    templateUrl: '/partials/new.html'
  })
}
