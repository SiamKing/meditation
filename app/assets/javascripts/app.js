(function() {
  'use strict';

  angular
    .module('meditation', ['ui.router', 'templates'])
    .config(["$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/users');

      $stateProvider
        .state('users', {
          url: '/users',
          templateUrl: 'users/users.html',
          controller: 'UsersController as vm',
          resolve: {
            UserService: 'UserService',
            users: function(UserService) {
              return UserService.all();
            },
            user: function(UserService, $stateParams) {
              return UserService.getUser($stateParams.userId);
            }
          }
        })
        .state('user', {
          url: '/users/:userId',
          templateUrl: 'users/user.html',
          controller: 'UsersController as vm',
          resolve: {
            UserService: 'UserService',
            users: function(UserService) {
              return UserService.all();
            },
            user: function(UserService, $stateParams) {
              return UserService.getUser($stateParams.userId);
            }
          }
        })
        .state('user.update', {
          url: 'users/update',
          templateUrl: 'users/user.update.html',
          controller: 'UsersController as vm'
        })
    }])
}())
