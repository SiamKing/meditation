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
        .state('meditation', {
          url: 'meditations/:id',
          templateUrl: 'meditations/templates/meditation.html',
          controller: 'MeditationsController as vm'
        })
    }])

}())
