(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('CollapseDemoCtrl', function ($scope, $rootScope) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;
      $rootScope.hideDiv = hideDiv;
      $rootScope.hideLink = true;

      function hideDiv() {
        console.log("Hi")
        return $rootScope.hideLink = true;
    }
    $rootScope.link = false
  });
}())
