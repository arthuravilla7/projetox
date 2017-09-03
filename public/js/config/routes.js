angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "homeCtrl"
    }).state('pagina2', {
      url: "/pagina2",
      templateUrl: "templates/pagina2.html",
      controller: "pagina2Ctrl"
    })

    $urlRouterProvider.otherwise('/home')
  }
])
