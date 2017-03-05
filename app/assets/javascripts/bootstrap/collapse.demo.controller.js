(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('CollapseDemoCtrl', ['$scope', '$rootScope', '$state', '$localStorage', function ($scope, $rootScope, $state, $localStorage) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;
      $scope.$storage = $localStorage;


      // $scope.getLinkUrl = function() {
      //   console.log($rootScope.$storage)
      //   if ($rootScope.$storage !== undefined) {
      //     return $state.href('user', {userId: $rootScope.$storage.currentUser.id});
      //   } else {
      //     return 'users'
      //   }
      //
      // }
  }]);
}())
