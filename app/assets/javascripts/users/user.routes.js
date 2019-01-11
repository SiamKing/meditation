(function() {
  "use strict";

  angular
    .module('meditation')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('users', {
          url: '/',
          templateUrl: 'users/templates/users.html',
          controller: 'UsersController as vm'
        })
        .state('user', {
          url: '/users/:userId',
          templateUrl: 'users/templates/user.html',
          controller: 'UsersController as vm'
        })
        .state('user.addEvent', {
          url: '/addEvent',
          templateUrl: 'events/templates/add.event.html',
          controller: 'EventsController as event'
        })
        .state('user.event', {
          url: '/event/:id',
          templateUrl: 'events/templates/event.html',
          controller: 'EventsController as event'
        })
        .state('user.event.update', {
          url: '/update',
          templateUrl: 'events/templates/update.event.html',
          controller: 'EventsController as event'
        });

    }])
}())
