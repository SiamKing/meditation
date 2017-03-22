(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('meditationDropdown', function() {
      return {
        controller: 'MeditationsDropdownController',
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'events/templates/meditations.dropdown.html'
      }
    })
}())
