(function() {
  'use strict';

  angular
    .module('meditation')
    .factory('Authenticate', ['$rootScope', '$state', '$localStorage', '$q', '$timeout', function($rootScope, $state, $localstorage, $q, $timeout) {
      return {
        authenticate
      }

      function authenticate(id) {
        if ($rootScope.$storage.currentUserSignedIn) {
          if ($rootScope.$storage.currentUser.id === parseInt(id)) {
            return $q.when();
          } else {
            $timeout(function() {
              $state.go('user', {userId: $rootScope.$storage.currentUser.id})
            })
            return $q.reject();
          }
        } else {
          $timeout(function() {
            $state.go('users')
          })
          return $q.reject();
        }

      }
    }])
}())
