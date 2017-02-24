(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('CollapseDemoCtrl', function ($scope, $rootScope, $state) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;

      $scope.getLinkUrl = function() {
        if ($rootScope.currentUserSignedIn === true) {
          return "user({userId: $rootScope.currentUser.id})"
        } else {
          return 'users'
        }

      }
  });
}())
