(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('scrollDirective', [function() {
      return {
        template: [
        '<div class="text-center">',
          '<button type="button" class="btn btn-default" ng-click="gotoElement(',
          '"top"',
        ')">Go to top</button>',
        '</div>'
      ].join(''),
      controller: 'ScrollController',
    }
    }])
}())
