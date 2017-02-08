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
    }])

}())
