angular.module('app', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/order', {
          templateUrl: 'order.html',
          controller: 'OrderCtrl'
        })
}])