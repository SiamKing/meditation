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
          controller: 'UsersController as vm'
        })
        .state('user', {
          url: '/users/:userId',
          templateUrl: 'users/user.html',
          controller: 'UsersController as vm'
        })
        .state('user.addEvent', {
          url: '/addEvent',
          templateUrl: 'events/add.event.html',
          controller: 'UsersController as vm'
        })
        .state('user.event', {
          url: '/event/:id',
          templateUrl: 'events/event.html',
          controller: 'EventsController as event'
        })
        .state('user.update', {
          url: 'users/update',
          templateUrl: 'users/user.update.html',
          controller: 'UsersController as vm'
        });
    }])
}())
