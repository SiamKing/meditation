(function() {

  angular
    .module('meditation')
    .controller('DatPicker', ['$scope', 'HttpService', '$log', '$stateParams', function ($scope, HttpService, $log, $stateParams) {
      var vm = this;

      vm.valuationDate = new Date();
      vm.valuationDatePickerIsOpen = false;
      vm.opens = [];

      HttpService.all('meditations')
        .then(data => vm.meditations = data)

        vm.addEvent = function () {
          vm.event = {
            minutes: vm.event.minutes,
            meditation_id: vm.meditationId,
            user_id: $stateParams.userId,
            date: vm.valuationDate
          }
          HttpService
            .addEvent(vm.event)
            .then(event => vm.events.push(event))
            .then(vm.event = {})
        }

// dropdown
      $scope.status = {
      isopen: false
      };

      $scope.meditationId = function(meditationId) {
        vm.meditationId = meditationId;
      }

      $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
      };

      $scope.selectedMeditation = "Meditations";
      $scope.meditationSelected = function (meditation) {
        $scope.selectedMeditation = meditation;
      }

      $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
      };

      $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

// calendar
      $scope.$watch(function () {
           return vm.valuationDatePickerIsOpen;
       },function(value){
          vm.opens.push("valuationDatePickerIsOpen: " + value + " at: " + new Date());
       });

      vm.valuationDatePickerOpen = function ($event) {

          if ($event) {
              $event.preventDefault();
              $event.stopPropagation(); // This is the magic
          }
          this.valuationDatePickerIsOpen = true;
        }
}])

}())