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
          controller: 'UsersController as vm',
          resolve: {
            authenticate: function(Authenticate, $stateParams) {
              return Authenticate.authenticate($stateParams.userId);
            }
          }
        })
        .state('user.addEvent', {
          url: '/addEvent',
          templateUrl: 'events/templates/add.event.html',
          controller: 'EventsController as event',
          resolve: {
            authenticate: function(Authenticate, $stateParams) {
              return Authenticate.authenticate($stateParams.userId);
            }
          }
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
        })
        .state('user.update', {
          url: 'users/update',
          templateUrl: 'users/user.update.html',
          controller: 'UsersController as vm'
        });

    }])
}())
