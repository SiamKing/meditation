(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('CollapseDemoCtrl', function ($scope, $rootScope) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;

  });
}())
