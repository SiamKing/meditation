(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('CollapseDemoCtrl', function ($scope, $rootScope, $state) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;

      $scope.getLinkUrl = function() {
        console.log($rootScope.currentUser)
        if ($rootScope.currentUser !== undefined) {
          return $state.href('user', {userId: $rootScope.currentUser.id});
        } else {
          return 'users'
        }

      }
  });
}())
