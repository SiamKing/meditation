(function() {
  "use strict";

  angular
    .module('meditation')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('meditations', {
          url: '/meditations',
          templateUrl: 'meditations/meditations.html',
          controller: 'MeditationsController as vm'
        })
        .state('meditation', {
          url: 'meditations/:id',
          templateUrl: 'meditations/meditation.html',
          controller: 'MeditationsController as vm'
        })
    }])

}())
