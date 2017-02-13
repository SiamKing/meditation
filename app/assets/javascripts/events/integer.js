(function() {
  "use strict";

  angular
    .module('meditation')
    .directive('integer', [function() {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
          ngModel.$validators.integer = function (value) {
            console.log(value)
            return value.test(/^\-?\d+$/);
          };
        }
      }
    }])
}())
