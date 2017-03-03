(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('scrollDirective', [function() {
      return {
        template: [
        `<div class="btn-center">
          <button type="button" class="btn btn-default" ng-click="gotoElement('top')">Go to top</button>
        </div>`
      ],
      controller: 'ScrollController',
    }
    }])
}())
