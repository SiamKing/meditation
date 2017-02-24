(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('CollapseDemoCtrl', function ($scope, $rootScope, $state) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;

      // $scope.getLinkUrl = function() {
      //   console.log($rootScope.$storage)
      //   if ($rootScope.$storage !== undefined) {
      //     return $state.href('user', {userId: $rootScope.$storage.currentUser.id});
      //   } else {
      //     return 'users'
      //   }
      //
      // }
  });
}())
