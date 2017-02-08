(function() {
  "user strict";

  angular
    .module('meditation')
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
        });
    }])
}())
