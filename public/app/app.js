(function(){
  var app = angular.module('MasonApp', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home/home.html',
        controller: 'HomeCtrl as vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about/about.html',
        controller: 'AboutCtrl as vm'
      })
    }])
})()