(function() {
  "use strict";

  angular
    .module('meditation')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      // $urlRouterProvider.otherwise('/users');

      $stateProvider
        .state('users', {
          url: '/users',
          templateUrl: 'users/users.html',
          controller: 'UsersController as vm',
          resolve: {
            HttpService: 'HttpService',
            users: function(HttpService) {
              return HttpService.all('users');
            },
            user: function(HttpService, $stateParams) {
              return HttpService.getObject('users', $stateParams.userId);
            }
          }
        })
        .state('user', {
          url: '/users/:userId',
          templateUrl: 'users/user.html',
          controller: 'UsersController as vm',
          resolve: {
            HttpService: 'HttpService',
            users: function(HttpService) {
              return HttpService.all('users');
            },
            user: function(HttpService, $stateParams) {
              return HttpService.getObject('users', $stateParams.userId);
            }
          }
        })
        .state('user.update', {
          url: 'users/update',
          templateUrl: 'users/user.update.html',
          controller: 'UsersController as vm'
        });
    }])
}())
