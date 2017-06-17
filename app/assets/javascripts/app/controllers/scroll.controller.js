(function() {


  angular
    .module('meditation')
    .controller('ScrollController', ['$rootScope', '$location', 'anchorSmoothScroll', function($rootScope, $location, anchorSmoothScroll) {
      $rootScope.gotoElement = function (eID) {
        $location.hash(eID);

        anchorSmoothScroll.scrollTo(eID);

      }

    }]);
}())
