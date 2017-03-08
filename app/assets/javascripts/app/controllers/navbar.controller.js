(function() {
  'use strict';

  angular
    .module('meditation')
    .controller('NavbarController', ['$scope', '$rootScope', '$state', '$localStorage', function ($scope, $rootScope, $state, $localStorage) {
      $scope.isNavCollapsed = true;
      $scope.isCollapsed = false;
      $scope.isCollapsedHorizontal = false;
      $scope.$storage = $localStorage;

  }]);
}())
