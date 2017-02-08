(function() {
  'use strict';

  angular
    .module('meditation', ['ui.router', 'templates'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/user');

      $stateProvider
        .state('root', {
          url: '/',
          templateUrl: 'users/welcome.html',
          controller: 'UserController as vm'
        })
        .state('user', {
          url: '/user/:userId',
          templateUrl: 'users/user.html',
          controller: 'UserController as vm'
        })
    }])
}())
