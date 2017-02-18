(function() {
  "use strict";

  angular
    .module('meditation')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('meditations', {
          url: '/meditations',
          templateUrl: 'meditations/templates/meditations.html',
          controller: 'MeditationsController as vm'
        })
        .state('meditations.meditation', {
          url: '/:id',
          templateUrl: 'meditations/templates/meditation.html',
          controller: 'MeditationsController as vm'
        })
    }])

}())
