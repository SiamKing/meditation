(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('NavbarController', ['$scope', '$rootScope', '$state', '$localStorage', 'Auth', 'toaster', function ($scope, $rootScope, $state, $localStorage, Auth, toaster) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;
      $rootScope.$storage = $localStorage;

      var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };

      $rootScope.logout = function() {
        Auth.logout(config).then(function(oldUser) {
          $rootScope.$storage.currentUserSignedIn = false;
          $rootScope.$storage.currentUser = {};
          toaster.pop('success', 'You have been logged out successfully', 'Namaste!')
        }, function(error) {
            toaster.pop('error', 'An error occurred', 'Please try again')
        });
      }

  }]);
}())
