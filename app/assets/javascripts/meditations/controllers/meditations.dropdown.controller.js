(function() {

  angular
    .module('meditation')
    .controller('MeditationsDropdownController', ['$scope', '$log', 'HttpService', '$stateParams', function ($scope, $log, HttpService, $stateParams) {
      var vm = this;

      HttpService.all('meditations')
        .then((data) => {
          console.log(data)
          vm.meditations = data;
          $scope.selectedMeditation = vm.meditations[0].name;
          vm.meditationId = vm.meditations[0].id;
        });

      $scope.status = {
      isopen: false
      };

      $scope.meditationId = function(meditationId) {
        vm.meditationId = meditationId;
      }

      $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
      };


      $scope.meditationSelected = function (meditation) {
        $scope.selectedMeditation = meditation;
      }

      $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
      };

      $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

}])

}())
