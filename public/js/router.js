angular.module('bookshelf', ['ui-router'])
  .config(BookshelfRouter)

function BookshelfRouter($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/index.html'
  })
}
