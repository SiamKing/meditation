(function() {


  angular
    .module('meditation')
    .controller('ScrollController', function($scope, $location, anchorSmoothScroll) {

        $scope.gotoElement = function (eID){
          console.log(eID)
          // set the location.hash to the id of
          // the element you wish to scroll to.
          $location.hash('meditation-scroll');

          // call $anchorScroll()
          anchorSmoothScroll.scrollTo(eID);

        };
      });
}())
