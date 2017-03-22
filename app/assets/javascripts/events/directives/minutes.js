(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('minutes', function() {
      return {
        scope: true,
        bindToController: true,
        templateUrl: 'events/templates/minutes.html',
        controller: 'EventsController'
      }
    })
}())
