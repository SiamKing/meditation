(function() {
  'use strict';

  angular
    .module('meditation')
    .directive('meditationDropdown', function() {
      return {
        scope: {
          meditations: '='
        },
        controller: 'MeditationsDropdownController',
        controllerAs: 'vm',
        template: `<div class="col-md-4 meditations-dropdown-menu" >
          <span class="btn-group" uib-dropdown keyboard-nav>
            <buttons id="simple-btn-keyboard-nav" type="button" class="btn btn-meditations-dropdown-menu" uib-dropdown-toggle ng-disabled="disabled">
              {{selectedMeditation}} <span class="caret"></span>
            </button>

            <ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="simple-btn-keyboard-nav">
              <li ng-repeat="meditation in meditations">
                <a href="" class="meditations-dropdown-menu" ng-click="meditationSelected(meditation.name) ; meditationId(meditation.id)">{{meditation.name}}</a>
              </li>
            </ul>
          </span>
        </div>`
      }
    })
}())
