(function() {
  'use strict';

  angular
    .module('meditation', ['ui.router', 'templates'])
    .config(["$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }])
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
