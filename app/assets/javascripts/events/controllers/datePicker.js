(function() {

  angular
    .module('meditation')
    .controller('DatePickerController', ['$scope', '$stateParams', 'HttpService', function ($scope, $stateParams, HttpService) {
      var vm = this;

      vm.valuationDatePickerIsOpen = false;
      vm.opens = [];

      if ($stateParams.id) {
        HttpService
          .getObject('events', $stateParams.id)
          .then(function(event){
            vm.valuationDate = new Date(event.date);
          })
      } else {
          vm.valuationDate = new Date();
      }

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
    }]);

}())
